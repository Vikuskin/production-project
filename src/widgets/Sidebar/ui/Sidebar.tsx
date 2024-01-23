import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useTheme } from 'app/providers/theme';
import ExpandSvg from 'shared/assets/icons/expand.svg';
import ThemeSvg from 'shared/assets/icons/theme.svg';
import TranslationSvg from 'shared/assets/icons/translation.svg';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppButton, AppButtonVariants } from 'shared/ui/AppButton';
import { SidebarSwitcher } from 'shared/ui/SidebarSwitcher';

import * as styles from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed((prev) => !prev);
  const { toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const toggleTranslate = () => {
    const choosedLanguage = i18n.language === 'ru' ? 'en' : 'ru';

    i18n.changeLanguage(choosedLanguage);
  };

  return (
    <div
      data-testid="sidebar"
      className={getClassNames(styles.sidebar, [className ?? ''], { [styles.collapsed]: collapsed })}
    >
      <div data-testid="sidebar-switchers" className={styles.switchers}>
        <SidebarSwitcher onClick={toggleTheme}>
          <ThemeSvg data-testid="theme-switcher" />
          <span>{t('Theme')}</span>
        </SidebarSwitcher>
        <SidebarSwitcher onClick={toggleTranslate}>
          <TranslationSvg data-testid="lang-switcher" />
          <span>{t('Language')}</span>
        </SidebarSwitcher>
      </div>
      <AppButton
        className={styles.btnCollapse}
        variant={AppButtonVariants.Clear}
        data-testid="sidebar-toggle-btn"
        onClick={toggleCollapsed}
      >
        <ExpandSvg />
      </AppButton>
    </div>
  );
};
