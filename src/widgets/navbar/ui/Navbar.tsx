import { getClassNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkThemes } from 'shared/ui/appLink/AppLink';
import { useTranslation } from 'react-i18next';
import * as styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={getClassNames(styles.navbar, [className ?? ''])}>
      <div className={styles.links}>
        <AppLink theme={AppLinkThemes.Secondary} to="/">
          {t('Main')}
        </AppLink>
        <AppLink theme={AppLinkThemes.Secondary} to="/about">
          {t('About')}
        </AppLink>
      </div>
    </div>
  );
};
