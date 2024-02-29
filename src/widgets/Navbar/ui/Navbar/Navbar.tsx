import React, { memo, useMemo } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
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

  return (
    <header data-testid="navbar" className={getClassNames(styles.navbar, [className ?? ''])}>
      <HStack align="center" gap={15} className={styles.links} component="nav">
        {renderNavbarLinks}
      </HStack>
    </header>
  );
});
