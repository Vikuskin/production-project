import { FC, Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'app/providers/router/lib/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

import { RequireAuth } from './RequireAuth';

import { AppRouteProps } from '../types/AppRoute';

export const AppRouter: FC = memo(() => {
  const renderWithWrapper = useCallback(({ path, element, authOnly }: AppRouteProps) => {
    return <Route key={path} path={path} element={authOnly ? <RequireAuth>{element}</RequireAuth> : element} />;
  }, []);

  return (
    <div className="page-wrapper">
      <Suspense fallback={<PageLoader />}>
        <Routes>{routeConfig.map(renderWithWrapper)}</Routes>
      </Suspense>
    </div>
  );
});
