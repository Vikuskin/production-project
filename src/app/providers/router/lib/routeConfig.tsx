import React from 'react';

import { UserRoles } from 'entities/User';
import { AboutPage } from 'pages/AboutPage';
import AdminPage from 'pages/AdminPage/ui/AdminPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { ArticleListPage } from 'pages/ArticleListPage';
import { ArticlePage } from 'pages/ArticlePage';
import { ErrorPage } from 'pages/ErrorPage';
import { MainPage } from 'pages/MainPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';

import { AppRoute, AppRouteProps } from '../types/AppRoute';

export const routePaths: Record<AppRoute, string> = {
  [AppRoute.Main]: '/',
  [AppRoute.About]: '/about',
  [AppRoute.Profile]: '/profile/', // + id
  [AppRoute.ArticleList]: '/article',
  [AppRoute.Article]: '/article/', // + id
  [AppRoute.ArticleCreate]: '/article/create',
  [AppRoute.ArticleEdit]: '/article/:id/edit',
  [AppRoute.AdminPanel]: '/admin',
  [AppRoute.NotFound]: '*',
};

export const routeConfig: AppRouteProps[] = [
  {
    path: routePaths[AppRoute.Main],
    element: <MainPage />,
  },
  {
    path: routePaths[AppRoute.About],
    element: <AboutPage />,
  },
  {
    path: routePaths[AppRoute.ArticleList],
    element: <ArticleListPage />,
    authOnly: true,
  },
  {
    path: `${routePaths[AppRoute.Article]}:id`,
    element: <ArticlePage />,
    authOnly: true,
  },
  {
    path: `${routePaths[AppRoute.ArticleEdit]}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: routePaths[AppRoute.ArticleCreate],
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: routePaths[AppRoute.NotFound],
    element: <ErrorPage errorCode={ErrorStatusCode.NotFound} text="Page not found" />,
  },
  {
    path: routePaths[AppRoute.AdminPanel],
    element: <AdminPage />,
    authOnly: true,
    roles: [UserRoles.Manager, UserRoles.Admin],
  },
  {
    path: `${routePaths[AppRoute.Profile]}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
];
