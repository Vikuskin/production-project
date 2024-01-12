import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack, { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const cssLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          esModule: true,
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: options.isDev
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

  return [typescriptLoader, cssLoader, svgLoader, fileLoader];
}
