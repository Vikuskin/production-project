import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { AppRoutes, routePaths } from 'app/providers/router';
import { selectUserAuthData, userActions } from 'entities/User';
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
  const userAuthData = useSelector(selectUserAuthData);
  const dispatch = useDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const onCloseModal = useCallback(() => setIsAuthModal(false), []);
  const onShowModal = useCallback(() => setIsAuthModal(true), []);
  const onLogout = useCallback(() => dispatch(userActions.logout()), [dispatch]);

  return (
    <div data-testid="navbar" className={getClassNames(styles.navbar, [className ?? ''])}>
      <div className={styles.links}>
        <AppLink data-testid="about-link" theme={AppLinkThemes.Secondary} to={routePaths[AppRoutes.About]}>
          {t('About')}
        </AppLink>
        <AppLink data-testid="main-link" theme={AppLinkThemes.Primary} to={routePaths[AppRoutes.Main]}>
          {t('Main')}
        </AppLink>
        {userAuthData ? (
          <AppButton
            data-testid="logout-btn"
            className={styles.loginBtn}
            variant={AppButtonVariants.Clear}
            onClick={onLogout}
          >
            {t('Logout')}
          </AppButton>
        ) : (
          <AppButton
            data-testid="login-btn"
            className={styles.loginBtn}
            variant={AppButtonVariants.Clear}
            onClick={onShowModal}
          >
            {t('Login')}
          </AppButton>
        )}
        <LoginModal data-testid="login-modal" isOpen={isAuthModal} onClose={onCloseModal} />
      </div>
    </div>
  );
};
