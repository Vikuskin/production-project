import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/theme';
import 'app/styles/index.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { getClassNames } from 'shared/lib/classNames/classNames';

const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={getClassNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <AppRouter/>
    </div>
  );
};

export default App;
