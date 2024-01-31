import 'app/providers/i18n/i18n';
import { FC, Suspense, useEffect } from 'react';

import { AppRouter } from 'app/providers/router';
import { userActions } from 'entities/User';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Navbar } from 'widgets/Navbar';
import { PageLoader } from 'widgets/PageLoader';
import { Sidebar } from 'widgets/Sidebar';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.init());
  }, [dispatch]);

  return (
    <div className={getClassNames('app')}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
