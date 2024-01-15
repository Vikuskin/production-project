import 'app/providers/i18n/i18n';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/theme';
import 'app/styles/index.scss';
import { FC, Suspense } from 'react';
import { getClassNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={getClassNames('app', [theme])}>
      <Suspense fallback="">
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
