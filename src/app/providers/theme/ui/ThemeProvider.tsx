import React, { FC, PropsWithChildren, createContext, useMemo, useState } from 'react';

import { DEFAULT_TEAM } from 'shared/lib/hooks/useTheme';

import { Theme } from '../types/Theme';

interface IThemeProviderProps {
  initialTheme?: Theme;
}
interface IThemeContextProps {
  theme?: Theme;
  setTheme?: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<IThemeContextProps>({});

export const ThemeProvider: FC<PropsWithChildren<IThemeProviderProps>> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState(initialTheme || DEFAULT_TEAM);
  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  document.body.className = theme;

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
