import { useContext } from 'react';

import { ThemeContext } from '@/app/providers/ThemeProvider';
import { DEFAULT_THEME } from '@/shared/constants/defaultTheme';
import { LOCAL_STORAGE_KEYS } from '@/shared/constants/localStorageKeys';
import { Themes } from '@/shared/enums/themes';

interface IUseThemeResult {
  theme: Themes;
  toggleTheme: () => void;
}

export const useTheme = (): IUseThemeResult => {
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
    theme: theme ?? DEFAULT_THEME,
    toggleTheme,
  };
};
