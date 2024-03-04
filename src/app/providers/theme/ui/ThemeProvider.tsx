import React, { FC, PropsWithChildren, createContext, useMemo, useState } from 'react';

import { DEFAULT_TEAM } from 'shared/lib/hooks/useTheme';

import { Themes } from '../enums/themes';

interface IThemeProviderProps {
  initialTheme?: Themes;
}
interface IThemeContextProps {
  theme?: Themes;
  setTheme?: React.Dispatch<React.SetStateAction<Themes>>;
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
