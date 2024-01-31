import { FC, Suspense, memo, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'app/providers/router/lib/routeConfig';
import { selectUserAuthData } from 'entities/User';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter: FC = memo(() => {
  const isAuth = !!useAppSelector(selectUserAuthData);
  const routes = useMemo(() => routeConfig.filter((route) => (route.authOnly && !isAuth ? false : true)), [isAuth]);

  return (
    <div className="page-wrapper">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
});
