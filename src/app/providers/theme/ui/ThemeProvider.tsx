import React, { FC, PropsWithChildren, useMemo, useState } from 'react';

import { ThemeContext } from '../lib/ThemeContext';
import { DEFAULT_TEAM } from '../lib/useTheme';
import { Theme } from '../types/Theme';

interface IThemeProviderProps {
  initialTheme?: Theme;
}

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
