import removePropsPlugin from '../../babel/removePropsPlugin';

interface IBuildBabelLoaderProps {
  isDev: boolean;
  isTsx?: boolean;
}

export const buildBabelLoader = ({ isDev, isTsx }: IBuildBabelLoaderProps) => {
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: [['@babel/preset-env', { targets: 'defaults' }]],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
              outputPath: 'public/locales/{{locale}}/{{ns}}.json',
            },
          ],
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx,
            },
          ],
          '@babel/plugin-transform-runtime',
          isTsx &&
            !isDev && [
              removePropsPlugin,
              {
                props: ['data-testid'],
              },
            ],
        ].filter(Boolean),
      },
    },
  };
};
