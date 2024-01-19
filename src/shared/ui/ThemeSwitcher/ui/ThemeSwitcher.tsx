import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useTheme } from 'app/providers/theme';
import ThemeSvg from 'shared/assets/icons/theme.svg';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppButton, AppButtonVariants } from 'shared/ui/AppButton';

import * as styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <AppButton
      data-testid="theme-switcher"
      className={getClassNames(styles.themeSwitcher, [className ?? ''])}
      variant={AppButtonVariants.Clear}
      onClick={toggleTheme}
    >
      <ThemeSvg className={styles.themeIcon} />
      <span>{t('Theme')}</span>
    </AppButton>
  );
};
