import { createContext } from 'react';

export enum Theme {
  Dark = 'app-dark-theme',
  Light = 'app-light-theme',
}

export interface IThemeContextProps {
  theme?: Theme;
  setTheme?: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<IThemeContextProps>({});
