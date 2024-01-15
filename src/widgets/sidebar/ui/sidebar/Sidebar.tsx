import { FC, useState } from 'react';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { LangSwitcher } from 'shared/ui/langSwitcher';
import { ThemeSwitcher } from 'shared/ui/themeSwitcher';
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
    <div className={getClassNames(styles.sidebar, [className ?? ''], { [styles.collapsed]: collapsed })}>
      <button onClick={toggleCollapsed}>{t('Sidebar')}</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
