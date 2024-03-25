import { createSelector } from '@reduxjs/toolkit';

import { selectUserAuthData } from '@/entities/User';
import { getRouteAbout, getRouteArticleList, getRouteMain } from '@/shared/constants/routePaths';
import { AppLinkVariants } from '@/shared/ui/AppLink';

import { INavbarLink } from '../interfaces/navbarLink';

const mainLinks: INavbarLink[] = [
  {
    path: getRouteAbout(),
    text: 'About',
    variant: AppLinkVariants.Secondary,
  },
  {
    path: getRouteMain(),
    text: 'Main',
    variant: AppLinkVariants.Secondary,
  },
];

export const selectNavbarLinks = createSelector(selectUserAuthData, (authData): INavbarLink[] => {
  const navbarLinks = [...mainLinks];

  authData &&
    navbarLinks.push({
      path: getRouteArticleList(),
      text: 'Articles',
      variant: AppLinkVariants.Primary,
    });

  return navbarLinks;
});
