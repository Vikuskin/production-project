import React, { ForwardedRef, PropsWithChildren, forwardRef } from 'react';
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
export const AppLink = forwardRef((props: PropsWithChildren<IAppLinkProps>, ref: ForwardedRef<HTMLAnchorElement>) => {
  const { className, to, children, variant = AppLinkVariant.Primary, ...otherProps } = props;

  return (
    <Link ref={ref} to={to} className={getClassNames(styles.link, [className ?? '', styles[variant]])} {...otherProps}>
      {children}
    </Link>
  );
});
