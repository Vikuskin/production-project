import 'app/providers/i18n/i18n';
import { FC, Suspense, useEffect } from 'react';

import { AppRouter } from 'app/providers/router';
import { selectUserMounted, userActions } from 'entities/User';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { Navbar } from 'widgets/Navbar';
import { PageLoader } from 'widgets/PageLoader';
import { Sidebar } from 'widgets/Sidebar';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const userMounted = useAppSelector(selectUserMounted);

  useEffect(() => {
    dispatch(userActions.init());
  }, [dispatch]);

  return (
    <div className={getClassNames('app')}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {userMounted && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
