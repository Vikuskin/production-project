import { createContext } from 'react';

export enum Themes {
  Dark = 'app-dark-theme',
  Light = 'app-light-theme',
}

export interface IThemeContextProps {
  theme?: Themes;
  setTheme?: React.Dispatch<React.SetStateAction<Themes>>;
}

export const ThemeContext = createContext<IThemeContextProps>({});
