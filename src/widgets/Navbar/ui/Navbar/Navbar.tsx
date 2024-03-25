import React, { memo, useCallback, useMemo, useState } from 'react';

import { LoginModal } from '@/features/AuthByUserName';
import { OpenNotifications } from '@/features/OpenNotifications';
import { getClassNames } from '@/shared/lib/classNames/getClassNames';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';
import { HStack } from '@/shared/ui/Stack';

import * as styles from './Navbar.module.scss';

import { selectNavbarLinks } from '../../model/selectors/selectNavbarLinks';
import { DropdownUserMenu } from '../DropdownUserMenu/DropdownUserMenu';
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

  return (
    <header data-testid="navbar" className={getClassNames(styles.navbar, [className ?? ''])}>
      <HStack align="center" gap={15} className={styles.links} component="nav">
        {renderNavbarLinks}
        <OpenNotifications />
        <DropdownUserMenu onShowModal={onShowModal} />
      </HStack>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </header>
  );
});
