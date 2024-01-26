import { useContext } from 'react';

import { LOCAL_STORAGE_KEYS } from 'shared/constants/constants';

import { Theme, ThemeContext } from './ThemeContext';

interface IUseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

const getLocalStorageTheme = (): Theme | null => {
  const localStorageTheme: Theme | null = localStorage.getItem(LOCAL_STORAGE_KEYS.Theme) as Theme;

  if (localStorageTheme && Object.values(Theme).includes(localStorageTheme)) {
    return localStorageTheme;
  }

  return null;
};

export const DEFAULT_TEAM: Theme = getLocalStorageTheme() ?? Theme.Light;

export function useTheme(): IUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = (): void => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;

    localStorage.setItem(LOCAL_STORAGE_KEYS.Theme, newTheme);
    setTheme?.(newTheme);
  };

  return {
    theme: theme ?? DEFAULT_TEAM,
    toggleTheme,
  };
}
