import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import { LOCAL_STORAGE_THEME_KEY } from '../constants/constants';
import { Themes } from '../enums/themes';

interface UseThemeResult {
  theme: Themes;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === Themes.Light ? Themes.Dark : Themes.Light;

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme?.(newTheme);
  };

  return {
    theme: theme ?? (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) ?? Themes.Light,
    toggleTheme,
  };
}
