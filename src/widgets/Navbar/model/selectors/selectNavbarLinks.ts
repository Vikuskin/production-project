import { createSelector } from '@reduxjs/toolkit';

import { selectUserAuthData } from '@/entities/User';
import { routes } from '@/shared/constants/routePaths';
import { AppLinkVariants } from '@/shared/ui/AppLink';

import { INavbarLink } from '../interfaces/navbarLink';

const mainLinks: INavbarLink[] = [
  {
    path: routes.about,
    text: 'About',
    variant: AppLinkVariants.Secondary,
  },
  {
    path: routes.main,
    text: 'Main',
    variant: AppLinkVariants.Secondary,
  },
];

export const selectNavbarLinks = createSelector(selectUserAuthData, (authData): INavbarLink[] => {
  const navbarLinks = [...mainLinks];

  authData &&
    navbarLinks.push({
      path: routes.articleList,
      text: 'Articles',
      variant: AppLinkVariants.Primary,
    });

  return navbarLinks;
});
