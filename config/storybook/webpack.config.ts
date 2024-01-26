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
  };

  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('.ts', '.tsx');

  config.module!.rules = config.module!.rules!.map((rule: any) =>
    /svg/.test(rule.test as string) ? { ...rule, exclude: /\.svg/i } : { ...rule },
  );
  config.module!.rules!.push(buildSvgLoader());

  config.module!.rules!.push(buildCssLoader(true));
  config.resolve!.alias = {
    entities: path.resolve(__dirname, '..', '..', 'src', 'entities'),
  };
  config.plugins?.push(new DefinePlugin({ IS_DEV: true }));

  return config;
};
