import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';

import * as styles from './Card.module.scss';

import { CardVariant } from '../model/types/cardVariant';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: CardVariant;
}

export const Card: FC<PropsWithChildren<ICardProps>> = (props: PropsWithChildren<ICardProps>) => {
  const { className, children, variant = CardVariant.Normal, ...otherProps } = props;

  return (
    <div className={getClassNames(styles.card, [styles[variant], className ?? ''])} {...otherProps}>
      {children}
    </div>
  );
};
