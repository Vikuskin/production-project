import React, { ForwardedRef, PropsWithChildren, forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { getClassNames } from 'shared/lib/classNames/getClassNames';

import * as styles from './AppLink.module.scss';

import { AppLinkVariants } from '../enums/appLinkVariants';

interface IAppLinkProps extends LinkProps {
  variant?: AppLinkVariants;
  className?: string;
}
export const AppLink = forwardRef((props: PropsWithChildren<IAppLinkProps>, ref: ForwardedRef<HTMLAnchorElement>) => {
  const { className, to, children, variant = AppLinkVariants.Primary, ...otherProps } = props;

  return (
    <Link ref={ref} to={to} className={getClassNames(styles.link, [className ?? '', styles[variant]])} {...otherProps}>
      {children}
    </Link>
  );
});
