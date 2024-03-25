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
import { routes } from '@/shared/constants/routePaths';
import { ErrorStatusCode } from '@/shared/enums/errorStatusCode';

import { AppRouteProps } from '../types/appRouteProps';

export const routeConfig: AppRouteProps[] = [
  {
    path: routes.main,
    element: <MainPage />,
  },
  {
    path: routes.about,
    element: <AboutPage />,
  },
  {
    path: routes.articleList,
    element: <ArticleListPage />,
    authOnly: true,
  },
  {
    path: routes.article(':id'),
    element: <ArticlePage />,
    authOnly: true,
  },
  {
    path: routes.articleEdit(':id'),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: routes.articleCreate,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  {
    path: routes.adminPanel,
    element: <AdminPage />,
    authOnly: true,
    roles: [UserRoles.Manager, UserRoles.Admin],
  },
  {
    path: routes.profile(':id'),
    element: <ProfilePage />,
    authOnly: true,
  },
  {
    path: '*',
    element: <ErrorPage errorCode={ErrorStatusCode.NotFound} text="Page not found" />,
  },
];
