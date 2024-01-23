import React, { FC, PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { getClassNames } from 'shared/lib/classNames/getClassNames';

import * as styles from './AppLink.module.scss';

export enum AppLinkThemes {
  Primary = 'primary',
  Secondary = 'secondary',
}

interface IAppLinkProps extends LinkProps {
  theme?: AppLinkThemes;
  className?: string;
}

export const AppLink: FC<PropsWithChildren<IAppLinkProps>> = (props) => {
  const { className, to, children, theme = AppLinkThemes.Primary, ...otherProps } = props;

  return (
    <Link to={to} className={getClassNames('', [className ?? '', styles[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};
