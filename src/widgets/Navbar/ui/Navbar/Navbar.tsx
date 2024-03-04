/* eslint-disable indent */
import React, { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { selectUserAuthData, selectUserIsAdmin, selectUserIsManager, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import DefaultAvatar from 'shared/assets/images/default-avatar.png';
import { routePaths } from 'shared/constants/routePaths';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { Avatar } from 'shared/ui/Avatar';
import { Dropdown, IDropdownItem } from 'shared/ui/Dropdown';
import { HStack } from 'shared/ui/Stack';

import * as styles from './Navbar.module.scss';

import { selectNavbarLinks } from '../../model/selectors/selectNavbarLinks';
import { NavbarLink } from '../NavbarLink/NavbarLink';

interface INavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: INavbarProps) => {
  const { t } = useTranslation();
  const navbarLinks = useAppSelector(selectNavbarLinks);
  const renderNavbarLinks = useMemo(
    () => navbarLinks.map((link) => <NavbarLink data-testid="navbar-link" key={link.path} link={link} />),
    [navbarLinks],
  );
  const [isAuthModal, setIsAuthModal] = useState(false);
  const userData = useAppSelector(selectUserAuthData);
  const isUserAdmin = useAppSelector(selectUserIsAdmin);
  const isUserManager = useAppSelector(selectUserIsManager);
  const isAdminPanelAvailable = isUserAdmin || isUserManager;
  const dispatch = useAppDispatch();
  const onCloseModal = useCallback(() => setIsAuthModal(false), []);
  const onShowModal = useCallback(() => setIsAuthModal(true), []);
  const onLogout = useCallback(() => dispatch(userActions.logout()), [dispatch]);
  const dropdownLoggedInItems: IDropdownItem[] = [
    ...(isAdminPanelAvailable
      ? [
          {
            content: <li>{t('Admin panel')}</li>,
            href: routePaths.admin_panel,
          },
        ]
      : []),
    {
      content: <li>{t('Profile')}</li>,
      href: `${routePaths.profile}${userData?.id}`,
    },
    {
      content: <li>{t('Create article')}</li>,
      href: routePaths.article_create,
    },
    { content: <li>{t('Logout')}</li>, onClick: onLogout },
  ];
  const dropdownDefaultItems: IDropdownItem[] = [
    {
      content: <li>{t('Login')}</li>,
      onClick: onShowModal,
    },
  ];
  const triggerDropdown = <Avatar src={userData?.avatar || DefaultAvatar} size={30} />;

  return (
    <header data-testid="navbar" className={getClassNames(styles.navbar, [className ?? ''])}>
      <HStack align="center" gap={15} className={styles.links} component="nav">
        {renderNavbarLinks}
      </HStack>
      <Dropdown
        direction="topRight"
        className={styles.profileMenu}
        items={userData ? dropdownLoggedInItems : dropdownDefaultItems}
        trigger={triggerDropdown}
      />
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
});
