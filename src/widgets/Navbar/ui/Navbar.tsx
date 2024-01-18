import React from 'react';
import { useTranslation } from 'react-i18next';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/ui/AppLink';

import * as styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div data-testid="navbar" className={getClassNames(styles.navbar, [className ?? ''])}>
      <div className={styles.links}>
        <AppLink data-testid="main-link" theme={AppLinkThemes.Secondary} to="/">
          {t('Main')}
        </AppLink>
        <AppLink data-testid="about-link" theme={AppLinkThemes.Secondary} to="/about">
          {t('About')}
        </AppLink>
      </div>
    </div>
  );
};
