import React, { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { selectUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import ExpandSvg from 'shared/assets/icons/expand.svg';
import LoginSvg from 'shared/assets/icons/login.svg';
import LogoutSvg from 'shared/assets/icons/logout.svg';
import Themevg from 'shared/assets/icons/theme.svg';
import TranslationSvg from 'shared/assets/icons/translation.svg';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { useTheme } from 'shared/lib/hooks/useTheme';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton';

import * as styles from './Sidebar.module.scss';

import { ISidebarItem } from '../../models/types/sidebarItem';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = memo(({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed((prev) => !prev);
  const { toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const toggleTranslate = useCallback(() => {
    const choosedLanguage = i18n.language === 'ru' ? 'en' : 'ru';

    i18n.changeLanguage(choosedLanguage);
  }, [i18n]);
  const [isAuthModal, setIsAuthModal] = useState(false);
  const userAuthData = useAppSelector(selectUserAuthData);
  const dispatch = useAppDispatch();
  const onCloseModal = useCallback(() => setIsAuthModal(false), []);
  const onShowModal = useCallback(() => setIsAuthModal(true), []);
  const onLogout = useCallback(() => dispatch(userActions.logout()), [dispatch]);
  const sidebarSwitchers: ISidebarItem[] = [
    {
      onClick: toggleTheme,
      Icon: Themevg,
      text: t('Theme'),
    },
    {
      onClick: toggleTranslate,
      Icon: TranslationSvg,
      text: t('Language'),
    },
  ];

  return (
    <div
      data-testid="sidebar"
      className={getClassNames(styles.sidebar, [className ?? ''], { [styles.collapsed]: collapsed })}
    >
      <div className={styles.itemsBlock}>
        {sidebarSwitchers.map((item) => (
          <SidebarItem key={item.text} item={item} collapsed={collapsed} />
        ))}
      </div>
      <hr />
      <div className={styles.itemsBlock}>
        {userAuthData ? (
          <SidebarItem
            className={styles.logout}
            collapsed={collapsed}
            item={{ text: t('Logout'), Icon: LogoutSvg, onClick: onLogout }}
          />
        ) : (
          <SidebarItem collapsed={collapsed} item={{ text: t('Login'), Icon: LoginSvg, onClick: onShowModal }} />
        )}
      </div>
      <AppButton
        className={styles.collapseBtn}
        variant={AppButtonVariant.Clear}
        data-testid="sidebar-collapse-btn"
        onClick={toggleCollapsed}
      >
        <ExpandSvg />
      </AppButton>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </div>
  );
});
