import 'app/providers/i18n/i18n';
import { FC, Suspense } from 'react';

import { AppRouter } from 'app/providers/router';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { Navbar } from 'widgets/Navbar';
import { PageLoader } from 'widgets/PageLoader';
import { Sidebar } from 'widgets/Sidebar';

const App: FC = () => {
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
