import React, { memo } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';

import * as styles from './Navbar.module.scss';

import { navbarLinks } from '../../model/navbarLinks';
import { NavbarLink } from '../NavbarLink/NavbarLink';

interface INavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: INavbarProps) => {
  return (
    <div data-testid="navbar" className={getClassNames(styles.navbar, [className ?? ''])}>
      <div className={styles.links}>
        {navbarLinks.map((link) => (
          <NavbarLink data-testid="navbar-link" key={link.path} link={link} />
        ))}
      </div>
    </div>
  );
});
