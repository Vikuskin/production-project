import { FC, createContext, useMemo, useState } from 'react';
import { DEFAULT_TEAM } from '../constants/constants';
import { ThemeContextProps } from '../interfaces/theme/themeContextProps';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>({});

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
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
