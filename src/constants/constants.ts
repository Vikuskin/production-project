import { Themes } from '../enums/themes';

export const LOCAL_STORAGE_THEME_KEY = 'theme';
export const DEFAULT_TEAM =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) || Themes.Light;
