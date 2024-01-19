import React from 'react';
import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { ErrorPage } from 'pages/ErrorPage';
import { MainPage } from 'pages/MainPage';

export enum AppRoutes {
  Main = 'main',
  About = 'about',
  NotFound = 'not_found',
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.About]: '/about',
  [AppRoutes.NotFound]: '*',
};

export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRoutes.Main],
    element: <MainPage />,
  },
  {
    path: routePaths[AppRoutes.About],
    element: <AboutPage />,
  },
  {
    path: routePaths[AppRoutes.NotFound],
    element: <ErrorPage text="Page not found" />,
  },
];
