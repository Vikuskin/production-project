import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppLink } from 'shared/ui/AppLink';

import { INavBarLink } from '../../models/navbarLinks';

interface INavbarLinkProps {
  className?: string;
  link: INavBarLink;
}

export const NavbarLink: FC<INavbarLinkProps> = memo(({ className, link }: INavbarLinkProps) => {
  const { t } = useTranslation();

  return (
    <AppLink
      data-testid="navbar-link"
      className={getClassNames('', [className ?? ''])}
      variant={link.variant}
      to={link.path}
    >
      {t(link.text)}
    </AppLink>
  );
});
