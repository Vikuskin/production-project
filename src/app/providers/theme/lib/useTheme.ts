import { useContext } from 'react';

import { ThemeContext, Themes } from './ThemeContext';

interface UseThemeResult {
  theme: Themes;
  toggleTheme: () => void;
}

const LOCAL_STORAGE_THEME_KEY = 'theme';

export const DEFAULT_TEAM: Themes = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) ?? Themes.Light;

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = (): void => {
    const newTheme = theme === Themes.Light ? Themes.Dark : Themes.Light;

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme?.(newTheme);
  };

  return {
    theme: theme ?? DEFAULT_TEAM,
    toggleTheme,
  };
}
