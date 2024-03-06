import React, { CSSProperties, FC } from 'react';

import { getClassNames } from '@/shared/lib/classNames/getClassNames';

import * as styles from './Skeleton.module.scss';

interface ISkeletonProps {
  height?: string | number;
  width?: string | number;
  border?: string;
  className?: string;
}

export const Skeleton: FC<ISkeletonProps> = (props) => {
  const { border, className, height, width } = props;
  const style: CSSProperties = {
    width: width,
    height: height,
    borderRadius: border,
  };

  return <div style={style} className={getClassNames(styles.skeleton, [className ?? ''])}></div>;
};
