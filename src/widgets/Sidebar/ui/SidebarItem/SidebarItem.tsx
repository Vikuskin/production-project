import React, { FC, memo } from 'react';

import { getClassNames } from '@/shared/lib/classNames/getClassNames';
import { AppButton } from '@/shared/ui/AppButton';
import { HStack } from '@/shared/ui/Stack';

import * as styles from './SidebarItem.module.scss';

import { ISidebarItem } from '../../models/interfaces/sidebarItem';

interface ISidebarItemProps {
  item: ISidebarItem;
  collapsed: boolean;
  className?: string;
}

export const SidebarItem: FC<ISidebarItemProps> = memo((props: ISidebarItemProps) => {
  const { className, item, collapsed } = props;

  return (
    <AppButton
      data-testid="sidebar-item"
      className={getClassNames(styles.item, [className ?? ''], { [styles.collapsed]: collapsed })}
      onClick={item.onClick}
    >
      <HStack justify="center" align="center">
        <p>
          <item.Icon />
        </p>
        <span>{item.text}</span>
      </HStack>
    </AppButton>
  );
});
