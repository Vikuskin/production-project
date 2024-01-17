import { FC, useState } from 'react';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import * as styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed((prev) => !prev);
  const { t } = useTranslation();

  return (
    <div
      data-testid="sidebar"
      className={getClassNames(styles.sidebar, [className ?? ''], { [styles.collapsed]: collapsed })}
    >
      <button data-testid="sideber-toggle-btn" onClick={toggleCollapsed}>
        {t('Sidebar')}
      </button>
      <div data-testid="sidebar-switchers" className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
