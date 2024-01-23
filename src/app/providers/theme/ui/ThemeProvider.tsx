import React, { FC, PropsWithChildren, useMemo, useState } from 'react';

import { ThemeContext, Themes } from '../lib/ThemeContext';
import { DEFAULT_TEAM } from '../lib/useTheme';

interface IThemeProviderProps {
  initialTheme?: Themes;
}

const ThemeProvider: FC<PropsWithChildren<IThemeProviderProps>> = ({ children, initialTheme }) => {
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

export default ThemeProvider;
