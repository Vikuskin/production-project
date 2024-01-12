import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/theme';
import 'app/styles/index.scss';
import { FC } from 'react';
import { getClassNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/navbar';

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={getClassNames('app', {}, [theme])}>
      <Navbar/>
      <AppRouter/>
    </div>
  );
};

export default App;
