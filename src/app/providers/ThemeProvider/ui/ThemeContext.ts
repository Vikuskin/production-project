import { createContext } from 'react';

import { Themes } from '@/shared/enums/themes';

interface IThemeContextProps {
  theme?: Themes;
  setTheme?: React.Dispatch<React.SetStateAction<Themes>>;
}

export const ThemeContext = createContext<IThemeContextProps>({});
