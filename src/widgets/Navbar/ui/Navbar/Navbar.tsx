import React, { memo, useCallback, useMemo, useState } from 'react';

import { NotificationList } from 'entities/Notification';
import { selectUserAuthData } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { UserMenu } from 'features/UserMenu';
import NotificationSvg from 'shared/assets/icons/notification.svg';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { AppButton } from 'shared/ui/AppButton';
import { Popover } from 'shared/ui/Popover';
import { HStack } from 'shared/ui/Stack';

import * as styles from './Navbar.module.scss';

import { selectNavbarLinks } from '../../model/selectors/selectNavbarLinks';
import { NavbarLink } from '../NavbarLink/NavbarLink';

interface INavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: INavbarProps) => {
  const navbarLinks = useAppSelector(selectNavbarLinks);
  const renderNavbarLinks = useMemo(
    () => navbarLinks.map((link) => <NavbarLink data-testid="navbar-link" key={link.path} link={link} />),
    [navbarLinks],
  );
  const [isAuthModal, setIsAuthModal] = useState(false);
  const onCloseModal = useCallback(() => setIsAuthModal(false), []);
  const onShowModal = useCallback(() => setIsAuthModal(true), []);
  const userData = useAppSelector(selectUserAuthData);
  const triggerPopover = (
    <AppButton component="div">
      <NotificationSvg className={styles.icon} />
    </AppButton>
  );

  return (
    <header data-testid="navbar" className={getClassNames(styles.navbar, [className ?? ''])}>
      <HStack align="center" gap={15} className={styles.links} component="nav">
        {renderNavbarLinks}
        {userData && (
          <Popover direction={'topRight'} trigger={triggerPopover}>
            <NotificationList className={styles.notifications} />
          </Popover>
        )}
        <UserMenu onShowModal={onShowModal} />
      </HStack>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
});
