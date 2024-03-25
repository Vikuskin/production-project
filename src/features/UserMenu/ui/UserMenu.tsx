/* eslint-disable indent */
import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { selectUserAuthData, selectUserIsAdmin, selectUserIsManager, userActions } from '@/entities/User';
import DefaultAvatar from '@/shared/assets/images/default-avatar.png';
import { getRouteAdminPanel, getRouteArticleCreate, getRouteProfile } from '@/shared/constants/routePaths';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown, IDropdownItem } from '@/shared/ui/Dropdown';

interface IUserMenuProps {
  onShowModal: () => void;
  className?: string;
}

export const UserMenu: FC<IUserMenuProps> = ({ className, onShowModal }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectUserAuthData);
  const isUserAdmin = useAppSelector(selectUserIsAdmin);
  const isUserManager = useAppSelector(selectUserIsManager);
  const isAdminPanelAvailable = isUserAdmin || isUserManager;
  const onLogout = useCallback(() => dispatch(userActions.logout()), [dispatch]);
  const dropdownLoggedInItems: IDropdownItem[] = [
    ...(isAdminPanelAvailable
      ? [
          {
            content: <li>{t('Admin panel')}</li>,
            href: getRouteAdminPanel(),
          },
        ]
      : []),
    {
      content: <li>{t('Profile')}</li>,
      href: getRouteProfile(userData?.id ?? ''),
    },
    {
      content: <li>{t('Create article')}</li>,
      href: getRouteArticleCreate(),
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
    <Dropdown
      direction="topRight"
      className={className}
      items={userData ? dropdownLoggedInItems : dropdownDefaultItems}
      trigger={triggerDropdown}
    />
  );
};
