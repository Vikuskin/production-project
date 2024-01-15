import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack, { RuleSetRule } from 'webpack';

export function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const cssLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          esModule: true,
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:8]'
              : '[hash:base64:8]',
            namedExport: true,
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };
  const svgLoader: RuleSetRule = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };
  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', { targets: "defaults" }]
        ],
        plugins: [
          [
            "i18next-extract",
            { locales: ['en', 'ru'], keyAsDefaultValue: true }
          ],
        ]
      }
    }
  }

  return [cssLoader, svgLoader, fileLoader, babelLoader, typescriptLoader];
}
