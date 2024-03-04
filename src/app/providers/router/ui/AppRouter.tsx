import { FC, Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'app/providers/router/constants/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

import { RequireAuth } from './RequireAuth';

import { AppRouteProps } from '../types/appRouteProps';

export const AppRouter: FC = memo(() => {
  const renderWithWrapper = useCallback(({ path, element, authOnly, roles }: AppRouteProps) => {
    return (
      <Route
        key={path}
        path={path}
        element={authOnly ? <RequireAuth roles={roles || null}>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{routeConfig.map(renderWithWrapper)}</Routes>
    </Suspense>
  );
});
