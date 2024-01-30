import { RouteProps } from 'react-router-dom';

export enum AppRoute {
  Main = 'main',
  About = 'about',
  Profile = 'profile',
  NotFound = 'not_found',
}

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};
