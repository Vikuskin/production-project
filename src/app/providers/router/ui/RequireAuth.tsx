import { FC, PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { selectUserAuthData } from 'entities/User';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';

import { routePaths } from '../lib/routeConfig';

export const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
  const userAuth = useAppSelector(selectUserAuthData);
  const location = useLocation();

  if (!userAuth) {
    return <Navigate to={routePaths.main} state={{ from: location }} replace />;
  }

  return children;
};
