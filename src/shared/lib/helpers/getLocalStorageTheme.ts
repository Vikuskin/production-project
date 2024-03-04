import { LOCAL_STORAGE_KEYS } from 'shared/constants/localStorageKeys';
import { Themes } from 'shared/enums/themes';

export const getLocalStorageTheme = (): Themes | null => {
  const localStorageTheme = localStorage.getItem(LOCAL_STORAGE_KEYS.Theme);

  if (localStorageTheme && Object.values(Themes).includes(localStorageTheme as Themes)) {
    return localStorageTheme as Themes;
  }

  return null;
};
