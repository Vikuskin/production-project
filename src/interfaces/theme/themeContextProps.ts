import { Themes } from '../../enums/themes';

export interface ThemeContextProps {
  theme?: Themes;
  setTheme?: React.Dispatch<React.SetStateAction<Themes>>;
}
