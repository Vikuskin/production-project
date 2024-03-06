import React from 'react';

import { UserRoles } from '@/entities/User';
import { AboutPage } from '@/pages/AboutPage';
import AdminPage from '@/pages/AdminPage/ui/AdminPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticleListPage } from '@/pages/ArticleListPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { ErrorPage } from '@/pages/ErrorPage';
import { MainPage } from '@/pages/MainPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { routePaths } from '@/shared/constants/routePaths';
import { ErrorStatusCode } from '@/shared/enums/errorStatusCode';

import { AppRoutes } from './appRoutes';

import { AppRouteProps } from '../types/appRouteProps';

export const routeConfig: AppRouteProps[] = [
  {
    path: routePaths[AppRoutes.Main],
    element: <MainPage />,
  },
  {
    path: routePaths[AppRoutes.About],
    element: <AboutPage />,
  },
  {
    path: routePaths[AppRoutes.ArticleList],
    element: <ArticleListPage />,
    authOnly: true,
  },
  {
    path: `${routePaths[AppRoutes.Article]}:id`,
    element: <ArticlePage />,
    authOnly: true,
  },
  {
    path: `${routePaths[AppRoutes.ArticleEdit]}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: routePaths[AppRoutes.ArticleCreate],
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: routePaths[AppRoutes.NotFound],
    element: <ErrorPage errorCode={ErrorStatusCode.NotFound} text="Page not found" />,
  },
  {
    path: routePaths[AppRoutes.AdminPanel],
    element: <AdminPage />,
    authOnly: true,
    roles: [UserRoles.Manager, UserRoles.Admin],
  },
  {
    path: `${routePaths[AppRoutes.Profile]}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
];
