import { FC, PropsWithChildren, useMemo, useState } from 'react';
import { ThemeContext } from '../lib/ThemeContext';
import { DEFAULT_TEAM } from '../lib/useTheme';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(DEFAULT_TEAM);
  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
