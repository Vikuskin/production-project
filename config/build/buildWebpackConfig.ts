import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { IBuildOptions } from './types/config';

export function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
  const { paths, mode, isDev, port, apiUrl, project } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/',
    },
    plugins: buildPlugins(paths, isDev, apiUrl, project),
    module: {
      strictExportPresence: true,
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(paths),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(port) : undefined,
  };
}
