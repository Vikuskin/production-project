import { createSelector } from '@reduxjs/toolkit';

import { routePaths } from 'app/providers/router';
import { selectUserAuthData } from 'entities/User';
import { AppLinkVariant } from 'shared/ui/AppLink/ui/AppLink';

import { INavbarLink } from '../types/navbarLink';

export const selectNavbarLinks = createSelector(selectUserAuthData, (authData): INavbarLink[] => {
  const navbarLinks: INavbarLink[] = [
    {
      path: routePaths.about,
      text: 'About',
      variant: AppLinkVariant.Secondary,
    },
    {
      path: routePaths.main,
      text: 'Main',
      variant: AppLinkVariant.Primary,
    },
  ];

  if (authData)
    navbarLinks.push(
      {
        path: `${routePaths.profile}${authData?.id}`,
        text: 'Profile',
        variant: AppLinkVariant.Primary,
      },
      {
        path: routePaths.article_list,
        text: 'Articles',
        variant: AppLinkVariant.Primary,
      },
    );

  return navbarLinks;
});
