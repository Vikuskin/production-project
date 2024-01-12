declare module '*.scss' {
    interface ClassNames {
        [className: string]: string;
    }
    const classNames: ClassNames;
    export = classNames;
};
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import React from 'react';
    const SVG:  React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    export default SVG;
};