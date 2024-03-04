import { FC, PropsWithChildren, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useLocation } from 'react-router-dom';

import { UserRoles, selectUserAuthData, selectUserRoles } from 'entities/User';
import { ErrorPage } from 'pages/ErrorPage';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';

import { routePaths } from '../lib/routeConfig';

interface IRequireAuth {
  roles: UserRoles[] | null;
}

export const RequireAuth: FC<PropsWithChildren<IRequireAuth>> = ({ children, roles }) => {
  const { t } = useTranslation();
  const userAuth = useAppSelector(selectUserAuthData);
  const location = useLocation();
  const userRoles = useAppSelector(selectUserRoles);
  const hasRequiredRole = useMemo(
    () => (roles ? roles.some((requiredRole) => userRoles.includes(requiredRole)) : true),
    [roles, userRoles],
  );

  if (!userAuth) {
    return <Navigate to={routePaths.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRole) {
    return <ErrorPage errorCode={ErrorStatusCode.Forbidden} text={t('Access denied')} />;
  }

  return children;
};
