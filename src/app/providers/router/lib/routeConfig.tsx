import React from 'react';

import { AboutPage } from 'pages/AboutPage';
import { ErrorPage } from 'pages/ErrorPage';
import { MainPage } from 'pages/MainPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';

import { AppRoute, AppRouteProps } from '../types/AppRoute';

export const routePaths: Record<AppRoute, string> = {
  [AppRoute.Main]: '/',
  [AppRoute.About]: '/about',
  [AppRoute.Profile]: '/profile',
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
    path: routePaths[AppRoute.NotFound],
    element: <ErrorPage errorCode={ErrorStatusCode.NotFound} text="Page not found" />,
  },
  {
    path: routePaths[AppRoute.Profile],
    element: <ProfilePage />,
    authOnly: true,
  },
];
