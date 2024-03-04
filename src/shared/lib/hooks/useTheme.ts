import { useContext } from 'react';

import { ThemeContext, Themes } from 'app/providers/theme';
import { LOCAL_STORAGE_KEYS } from 'shared/constants/constants';

interface IUseThemeResult {
  theme: Themes;
  toggleTheme: () => void;
}

const getLocalStorageTheme = (): Themes | null => {
  const localStorageTheme = localStorage.getItem(LOCAL_STORAGE_KEYS.Theme);

  if (localStorageTheme && Object.values(Themes).includes(localStorageTheme as Themes)) {
    return localStorageTheme as Themes;
  }

  return null;
};

export const DEFAULT_TEAM: Themes = getLocalStorageTheme() ?? Themes.Light;

export function useTheme(): IUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = (): void => {
    let newTheme;

    switch (theme) {
      case Themes.Dark:
        newTheme = Themes.Light;
        break;
      case Themes.Light:
        newTheme = Themes.Pink;
        break;
      case Themes.Pink:
        newTheme = Themes.Dark;
        break;
      default:
        newTheme = Themes.Light;
    }

    localStorage.setItem(LOCAL_STORAGE_KEYS.Theme, newTheme);
    setTheme?.(newTheme);
  };

  return {
    theme: theme ?? DEFAULT_TEAM,
    toggleTheme,
  };
}
