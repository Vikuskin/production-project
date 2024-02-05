import React, { FC, HTMLAttributes, PropsWithChildren, memo } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';

import * as styles from './Card.module.scss';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card: FC<PropsWithChildren<ICardProps>> = memo((props: PropsWithChildren<ICardProps>) => {
  const { className, children, ...otherProps } = props;

  return (
    <div className={getClassNames(styles.card, [className ?? ''])} {...otherProps}>
      {children}
    </div>
  );
});
