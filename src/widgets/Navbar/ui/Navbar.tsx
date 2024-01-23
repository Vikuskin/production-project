import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AppRoutes, routePaths } from 'app/providers/router';
import { LoginModal } from 'features/AuthByUserName';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppButton, AppButtonVariants } from 'shared/ui/AppButton';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/ui/AppLink';

import * as styles from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const onCloseModal = () => setIsAuthModal(false);
  const onShowModal = () => setIsAuthModal(true);

  return (
    <div data-testid="navbar" className={getClassNames(styles.navbar, [className ?? ''])}>
      <div className={styles.links}>
        <AppLink data-testid="about-link" theme={AppLinkThemes.Secondary} to={routePaths[AppRoutes.About]}>
          {t('About')}
        </AppLink>
        <AppLink data-testid="main-link" theme={AppLinkThemes.Primary} to={routePaths[AppRoutes.Main]}>
          {t('Main')}
        </AppLink>
        <AppButton
          data-testid="login-btn"
          className={styles.loginBtn}
          variant={AppButtonVariants.Clear}
          onClick={onShowModal}
        >
          {t('Login')}
        </AppButton>
        <LoginModal data-testid="login-modal" isOpen={isAuthModal} onClose={onCloseModal} />
      </div>
    </div>
  );
};
