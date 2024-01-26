declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import React from 'react';

  const SVG: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  export default SVG;
}
declare const IS_DEV: boolean;
declare module '@loki/is-loki-running';
declare module '@loki/create-async-callback';
