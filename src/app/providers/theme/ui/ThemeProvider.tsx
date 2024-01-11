import { FC, useMemo, useState } from 'react';
import { ThemeContext } from '../lib/ThemeContext';
import { DEFAULT_TEAM } from '../lib/useTheme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
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
