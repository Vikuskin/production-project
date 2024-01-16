import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';
import { ErrorPage } from 'pages/ErrorPage';

enum AppRoutes {
  Main = 'main',
  About = 'about',
  NotFound = 'not_found',
}

const routePaths: Record<AppRoutes, string> = {
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
