import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(port: number): DevServerConfiguration {
  return {
    port: port,
    open: true,
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: false,
    },
  };
}
