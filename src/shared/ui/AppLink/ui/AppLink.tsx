import { FC, PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import * as styles from './AppLink.module.scss';

export enum AppLinkThemes {
  Primary = 'primary',
  Secondary = 'secondary',
}

interface AppLinkProps extends LinkProps {
  theme?: AppLinkThemes;
  className?: string;
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
  const { className, to, children, theme = AppLinkThemes.Primary, ...otherProps } = props;

  return (
    <Link to={to} className={getClassNames(styles.link, [className ?? '', styles[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};
