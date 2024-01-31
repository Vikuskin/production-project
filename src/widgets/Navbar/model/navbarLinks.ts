import { routePaths } from 'app/providers/router';
import { AppLinkVariant } from 'shared/ui/AppLink/ui/AppLink';

import { INavbarLink } from './types/navbarLink';

export const navbarLinks: INavbarLink[] = [
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
  {
    path: routePaths.profile,
    text: 'Profile',
    variant: AppLinkVariant.Primary,
    authOnly: true,
  },
];
