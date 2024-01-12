import { Themes, useTheme } from 'app/providers/theme';
import { FC } from 'react';
import { getClassNames } from 'shared/lib/classNames/classNames';
import { AppButton, ButtonVariants } from 'shared/ui/button';
import DarkThemeIcon from '../../../assets/icons/theme-dark.svg';
import LigntThemeIcon from '../../../assets/icons/theme-light.svg';
import * as styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
   className?: string;
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = ({className}: ThemeSwitcherProps) => {
   const { theme, toggleTheme } = useTheme();

   return (
      <AppButton
         className={getClassNames(styles.themeSwitcher, {}, [className ?? ''])}
         variant={ButtonVariants.Clear}
         onClick={toggleTheme}
      >
         {theme === Themes.Light ? <DarkThemeIcon /> : <LigntThemeIcon/>}
      </AppButton>
   )
}
