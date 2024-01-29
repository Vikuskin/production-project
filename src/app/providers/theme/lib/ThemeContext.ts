import { createContext } from 'react';

import { Theme } from '../types/Theme';

interface IThemeContextProps {
  theme?: Theme;
  setTheme?: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<IThemeContextProps>({});
