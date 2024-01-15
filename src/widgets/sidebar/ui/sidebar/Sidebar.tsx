import { FC, useState } from 'react';
import { getClassNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'shared/ui/langSwitcher';
import { ThemeSwitcher } from 'shared/ui/themeSwitcher';
import * as styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <div className={getClassNames(styles.sidebar, [className ?? ''], { [styles.collapsed]: collapsed })}>
      <button onClick={toggleCollapsed}>Sidebar</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
