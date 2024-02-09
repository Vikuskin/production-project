import React, { memo, useCallback, useMemo } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton';
import { Card, CardVariant } from 'shared/ui/Card';

import * as styles from './Tabs.module.scss';

import { ITab } from '../model/types/tab';

interface ITabsProps<T> {
  tabs: ITab<T>[];
  value: T | null;
  onTabClick: (tab: ITab<T>) => void;
  onTabClear?: () => void;
  className?: string;
}

const typedMemo: <T>(c: T) => T = memo;

export const Tabs = typedMemo(<T extends string>(props: ITabsProps<T>) => {
  const { className, tabs, onTabClick, onTabClear, value } = props;
  const onClickHandler = useCallback(
    (tab: ITab<T>) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick],
  );
  const onClearHandler = useCallback(
    (e: React.MouseEvent) => {
      onTabClear && onTabClear();
      e.stopPropagation();
    },
    [onTabClear],
  );
  const renderTabs = useMemo(() => {
    return tabs.map((tab) => (
      <Card
        onClick={onClickHandler(tab)}
        className={styles.tab}
        key={tab.value}
        variant={tab.value === value ? CardVariant.Selected : CardVariant.Outlined}
      >
        {tab.content}
        {tab.value === value && (
          <AppButton className={styles.clearBtn} variant={AppButtonVariant.Clear} onClick={onClearHandler}>
            X
          </AppButton>
        )}
      </Card>
    ));
  }, [onClearHandler, onClickHandler, tabs, value]);

  return <div className={getClassNames(styles.tabsWrapper, [className ?? ''])}>{renderTabs}</div>;
});
