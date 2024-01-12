import { FC } from "react";
import { Link, LinkProps } from 'react-router-dom';
import { getClassNames } from 'shared/lib/classNames/classNames';
import * as styles from './AppLink.module.scss';

export enum AppLinkThemes {
    Primary = 'primary',
    Secondary = 'secondary',
}

interface AppLinkProps extends LinkProps {
    children: React.ReactNode;
    theme?: AppLinkThemes;
    className?: string;
}

const AppLink:FC<AppLinkProps> = (props: AppLinkProps) => {
    const {className, to, children, theme = AppLinkThemes.Primary, ...otherProps} = props;

   return (
       <Link
            to={to}
            className={getClassNames(styles.link, {}, [className ?? '', styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
   )
}


export default AppLink
