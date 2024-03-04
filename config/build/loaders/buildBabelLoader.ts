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
        presets: [['@babel/preset-env', { targets: 'defaults' }]],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'ru'],
              keyAsDefaultValue: true,
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
