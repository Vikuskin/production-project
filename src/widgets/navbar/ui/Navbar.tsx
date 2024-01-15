import { getClassNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkThemes } from 'shared/ui/appLink/AppLink';
import * as styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={getClassNames(styles.navbar, [className ?? ''])}>
      <div className={styles.links}>
        <AppLink theme={AppLinkThemes.Secondary} to="/">
          Main
        </AppLink>
        <AppLink theme={AppLinkThemes.Secondary} to="/about">
          About
        </AppLink>
      </div>
    </div>
  );
};
