import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { selectUserAuthData } from 'entities/User';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { AppLink } from 'shared/ui/AppLink';

import { INavbarLink } from '../../model/types/navbarLink';

interface INavbarLinkProps {
  className?: string;
  link: INavbarLink;
}

export const NavbarLink: FC<INavbarLinkProps> = memo(({ className, link }: INavbarLinkProps) => {
  const { t } = useTranslation();
  const userAuth = useAppSelector(selectUserAuthData);

  if (!userAuth && link.authOnly) {
    return null;
  }

  return (
    <AppLink
      data-testid="navbar-link"
      className={getClassNames('', [className ?? ''])}
      variant={link.variant}
      to={link.path.endsWith('/') ? `${link.path}${userAuth?.id}` : link.path}
    >
      {t(link.text)}
    </AppLink>
  );
});
