import React, { FC } from 'react';

import { getClassNames } from '@/shared/lib/classNames/getClassNames';

import * as styles from './Overlay.module.scss';

interface IOverlayProps {
  onClick?: () => void;
  className?: string;
}

export const Overlay: FC<IOverlayProps> = ({ className, onClick }) => {
  return <div className={getClassNames(styles.overlay, [className ?? ''])} onClick={onClick} />;
};
