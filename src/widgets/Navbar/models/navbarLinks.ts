import { routePaths } from 'app/providers/router';
import { AppLinkVariant } from 'shared/ui/AppLink/ui/AppLink';

export interface INavBarLink {
  path: string;
  text: string;
  variant: AppLinkVariant;
}

export const navbarLinks: INavBarLink[] = [
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
  },
];
