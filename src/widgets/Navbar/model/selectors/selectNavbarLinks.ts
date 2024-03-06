import { createSelector } from '@reduxjs/toolkit';

import { selectUserAuthData } from '@/entities/User';
import { routePaths } from '@/shared/constants/routePaths';
import { AppLinkVariants } from '@/shared/ui/AppLink';

import { INavbarLink } from '../interfaces/navbarLink';

const mainLinks: INavbarLink[] = [
  {
    path: routePaths.about,
    text: 'About',
    variant: AppLinkVariants.Secondary,
  },
  {
    path: routePaths.main,
    text: 'Main',
    variant: AppLinkVariants.Secondary,
  },
];

export const selectNavbarLinks = createSelector(selectUserAuthData, (authData): INavbarLink[] => {
  const navbarLinks = [...mainLinks];

  authData &&
    navbarLinks.push({
      path: routePaths.article_list,
      text: 'Articles',
      variant: AppLinkVariants.Primary,
    });

  return navbarLinks;
});
