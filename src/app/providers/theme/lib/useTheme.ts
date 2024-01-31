import { useContext } from 'react';

import { LOCAL_STORAGE_KEYS } from 'shared/constants/constants';

import { ThemeContext } from './ThemeContext';

import { Theme } from '../types/Theme';

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
    let newTheme;

    switch (theme) {
      case Theme.Dark:
        newTheme = Theme.Light;
        break;
      case Theme.Light:
        newTheme = Theme.Pink;
        break;
      case Theme.Pink:
        newTheme = Theme.Dark;
        break;
      default:
        newTheme = Theme.Light;
    }

    localStorage.setItem(LOCAL_STORAGE_KEYS.Theme, newTheme);
    setTheme?.(newTheme);
  };

  return {
    theme: theme ?? DEFAULT_TEAM,
    toggleTheme,
  };
}
