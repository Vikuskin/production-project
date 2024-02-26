import { RouteProps } from 'react-router-dom';

export enum AppRoute {
  Main = 'main',
  About = 'about',
  Profile = 'profile',
  ArticleList = 'article_list',
  Article = 'article',
  ArticleCreate = 'article_create',
  ArticleEdit = 'article_edit',
  NotFound = 'not_found',
}

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};
