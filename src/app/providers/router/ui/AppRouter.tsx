import { routeConfig } from 'app/providers/router/lib/routeConfig';
import { FC, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';

const AppRouter: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="page-wrapper">
      <Suspense fallback={<div>{t('Loading')}</div>}>
        <Routes>
          {routeConfig.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRouter;
