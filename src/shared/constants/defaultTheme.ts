import { Themes } from 'shared/enums/themes';
import { getLocalStorageTheme } from 'shared/lib/helpers/getLocalStorageTheme';

export const DEFAULT_THEME: Themes = getLocalStorageTheme() ?? Themes.Light;
