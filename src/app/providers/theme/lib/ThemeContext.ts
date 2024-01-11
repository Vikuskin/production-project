import { createContext } from "react";

export enum Themes {
  Dark = 'dark',
  Light = 'light',
}

export interface ThemeContextProps {
  theme?: Themes;
  setTheme?: React.Dispatch<React.SetStateAction<Themes>>;
}

export const ThemeContext = createContext<ThemeContextProps>({});
