import { createSelector } from '@reduxjs/toolkit';

import { routePaths } from 'app/providers/router';
import { selectUserAuthData } from 'entities/User';
import { AppLinkVariant } from 'shared/ui/AppLink/ui/AppLink';

import { INavbarLink } from '../types/navbarLink';

const mainLinks: INavbarLink[] = [
  {
    path: routePaths.about,
    text: 'About',
    variant: AppLinkVariant.Secondary,
  },
  {
    path: routePaths.main,
    text: 'Main',
    variant: AppLinkVariant.Secondary,
  },
];

export const selectNavbarLinks = createSelector(selectUserAuthData, (authData): INavbarLink[] => {
  const navbarLinks = [...mainLinks];

  authData &&
    navbarLinks.push(
      {
        path: routePaths.article_list,
        text: 'Articles',
        variant: AppLinkVariant.Primary,
      },
      {
        path: routePaths.article_create,
        text: 'Create article',
        variant: AppLinkVariant.Primary,
      },
    );

  return navbarLinks;
});
