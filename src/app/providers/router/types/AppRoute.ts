import { RouteProps } from 'react-router-dom';

import { UserRoles } from 'entities/User';

export enum AppRoute {
  Main = 'main',
  About = 'about',
  Profile = 'profile',
  ArticleList = 'article_list',
  Article = 'article',
  ArticleCreate = 'article_create',
  ArticleEdit = 'article_edit',
  NotFound = 'not_found',
  AdminPanel = 'admin_panel',
}

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRoles[];
};
