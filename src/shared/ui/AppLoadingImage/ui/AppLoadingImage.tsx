import React, { FC, ImgHTMLAttributes, ReactElement, useLayoutEffect, useState } from 'react';

import { getClassNames } from '../../../lib/classNames/getClassNames';

interface IAppLoadingImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  classNames?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppLoadingImage: FC<IAppLoadingImageProps> = (props) => {
  const { classNames, src, alt = 'image', fallback, errorFallback, ...otherProps } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();

    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return <img src={src} alt={alt} className={getClassNames('', [classNames ?? ''])} {...otherProps} />;
};
