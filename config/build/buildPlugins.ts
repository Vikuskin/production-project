import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildPaths } from './types/config';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins(paths: BuildPaths, isDev: boolean): webpack.WebpackPluginInstance[] {
  const plugins = [];

  plugins.push(
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      IS_DEV: JSON.stringify(isDev),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  );

  if (isDev) {
    plugins.push(
      new ReactRefreshWebpackPlugin({
        overlay: false,
      }),
      new webpack.HotModuleReplacementPlugin(),
    );
  }

  return plugins;
}
