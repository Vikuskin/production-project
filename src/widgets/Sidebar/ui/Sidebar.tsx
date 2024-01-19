import React, { FC, useState } from 'react';

import ExpandSvg from 'shared/assets/icons/expand.svg';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppButton, AppButtonVariants } from 'shared/ui/AppButton';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import * as styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={getClassNames(styles.sidebar, [className ?? ''], { [styles.collapsed]: collapsed })}
    >
      <div data-testid="sidebar-switchers" className={styles.switchers}>
        <ThemeSwitcher className={getClassNames(styles.switcher)} />
        <LangSwitcher className={getClassNames(styles.switcher)} />
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
