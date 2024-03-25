import React from 'react';

import { UserRoles } from '@/entities/User';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPage } from '@/pages/AdminPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticleListPage } from '@/pages/ArticleListPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { ErrorPage } from '@/pages/ErrorPage';
import { MainPage } from '@/pages/MainPage';
import { ProfilePage } from '@/pages/ProfilePage';
import {
  getRouteAbout,
  getRouteAdminPanel,
  getRouteArticle,
  getRouteArticleCreate,
  getRouteArticleEdit,
  getRouteArticleList,
  getRouteMain,
  getRouteProfile,
} from '@/shared/constants/routePaths';
import { ErrorStatusCode } from '@/shared/enums/errorStatusCode';

import { AppRouteProps } from '../types/appRouteProps';

export const routeConfig: AppRouteProps[] = [
  {
    path: getRouteMain(),
    element: <MainPage />,
  },
  {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  {
    path: getRouteArticleList(),
    element: <ArticleListPage />,
    authOnly: true,
  },
  {
    path: getRouteArticle(':id'),
    element: <ArticlePage />,
    authOnly: true,
  },
  {
    path: getRouteArticleEdit(':id'),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: getRouteArticleCreate(),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: getRouteAdminPanel(),
    element: <AdminPage />,
    authOnly: true,
    roles: [UserRoles.Manager, UserRoles.Admin],
  },
  {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true,
  },
  {
    path: '*',
    element: <ErrorPage errorCode={ErrorStatusCode.NotFound} text="Page not found" />,
  },
];
