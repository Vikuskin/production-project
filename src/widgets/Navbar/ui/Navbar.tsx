import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AppRoutes, routePaths } from 'app/providers/router';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppButton, AppButtonVariants } from 'shared/ui/AppButton';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/ui/AppLink';
import { Modal } from 'shared/ui/Modal';

import * as styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const onToggleModal = () => setIsAuthModal((prev) => !prev);

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
          onClick={onToggleModal}
        >
          {t('Login')}
        </AppButton>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Modal data-testid="login-modal" isOpen={isAuthModal} onClose={onToggleModal}>
          Qui duis sit ex dolor cillum nulla pariatur.
        </Modal>
      </div>
    </div>
  );
};
