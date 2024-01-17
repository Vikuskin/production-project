import React, { FC } from 'react';

import { Themes, useTheme } from 'app/providers/theme';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppButton, ButtonVariants } from 'shared/ui/AppButton';

import DarkThemeIcon from '../../../assets/icons/theme-dark.svg';
import LigntThemeIcon from '../../../assets/icons/theme-light.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton
      data-testid="theme-switcher"
      className={getClassNames('', [className ?? ''])}
      variant={ButtonVariants.Clear}
      onClick={toggleTheme}
    >
      {theme === Themes.Light ? <LigntThemeIcon data-testid="light-icon" /> : <DarkThemeIcon data-testid="dark-icon" />}
    </AppButton>
  );
};
