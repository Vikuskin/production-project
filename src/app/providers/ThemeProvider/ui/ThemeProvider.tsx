import React, { FC, PropsWithChildren, useMemo, useState } from 'react';

import { DEFAULT_THEME } from '@/shared/constants/defaultTheme';
import { Themes } from '@/shared/enums/themes';

import { ThemeContext } from './ThemeContext';

interface IThemeProviderProps {
  initialTheme?: Themes;
}

export const ThemeProvider: FC<PropsWithChildren<IThemeProviderProps>> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState(initialTheme || DEFAULT_THEME);
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
