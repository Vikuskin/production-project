import { useContext } from 'react';

import { LOCAL_STORAGE_KEYS } from 'shared/constants/constants';

import { ThemeContext, Themes } from './ThemeContext';

interface IUseThemeResult {
  theme: Themes;
  toggleTheme: () => void;
}

const getLocalStorageTheme = (): Themes | null => {
  const localStorageTheme: Themes | null = localStorage.getItem(LOCAL_STORAGE_KEYS.Theme) as Themes;

  if (localStorageTheme && Object.values(Themes).includes(localStorageTheme)) {
    return localStorageTheme;
  }

  return null;
};

export const DEFAULT_TEAM: Themes = getLocalStorageTheme() ?? Themes.Light;

export function useTheme(): IUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = (): void => {
    const newTheme = theme === Themes.Light ? Themes.Dark : Themes.Light;

    localStorage.setItem(LOCAL_STORAGE_KEYS.Theme, newTheme);
    setTheme?.(newTheme);
  };

  return {
    theme: theme ?? DEFAULT_TEAM,
    toggleTheme,
  };
}
