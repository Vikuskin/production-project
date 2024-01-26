import React, { FC, PropsWithChildren, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { getClassNames } from 'shared/lib/classNames/getClassNames';

import * as styles from './AppLink.module.scss';

export enum AppLinkVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

interface IAppLinkProps extends LinkProps {
  variant?: AppLinkVariant;
  className?: string;
}

export const AppLink: FC<PropsWithChildren<IAppLinkProps>> = memo((props: PropsWithChildren<IAppLinkProps>) => {
  const { className, to, children, variant = AppLinkVariant.Primary, ...otherProps } = props;

  return (
    <Link to={to} className={getClassNames('', [className ?? '', styles[variant]])} {...otherProps}>
      {children}
    </Link>
  );
});
