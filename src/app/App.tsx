import 'app/providers/i18n/i18n';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/theme';
import 'app/styles/index.scss';
import { FC, Suspense } from 'react';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

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
