import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { IBuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: IBuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: path.resolve(__dirname, '..', '..', 'public', 'locales'),
    buildLocales: path.resolve(__dirname, '..', '..', 'build', 'locales'),
  };
  const rules = config.module!.rules as RuleSetRule[];

  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('.ts', '.tsx');

  config.module!.rules = rules.map((rule: any) =>
    /svg/.test(rule.test as string) ? { ...rule, exclude: /\.svg/i } : { ...rule },
  );
  config.module!.rules!.push(buildSvgLoader());

  config.module!.rules!.push(buildCssLoader(true));
  config.resolve!.alias = {
    '@': paths.src,
  };
  config.plugins?.push(
    new DefinePlugin({
      IS_DEV: true,
      API_URL: JSON.stringify('https://test-api'),
      PROJECT: JSON.stringify('storybook'),
    }),
  );

  return config;
};
