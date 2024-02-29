import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from 'entities/Article';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';
import { getEnumOptions } from 'shared/lib/helpers/getEnumOptions';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { AppInput } from 'shared/ui/AppInput';
import { ListBox } from 'shared/ui/ListBox';
import { HStack } from 'shared/ui/Stack';
import { ITab, Tabs } from 'shared/ui/Tabs';

import * as styles from './ArticleFilters.module.scss';

import {
  selectArticleOrder,
  selectArticleSearch,
  selectArticleSort,
  selectArticleType,
} from '../model/selectors/selectArticleFilter';
import { articleFiltersReducer } from '../model/slices/articleFiltersSlice';
import { ArticleOrder } from '../model/types/articleOrder';
import { ArticleSort } from '../model/types/articleSort';

const articleFiltersReducers: ReducersList = {
  articleFilters: articleFiltersReducer,
};

interface IArticleFiltersProps {
  onChangeOrder: (newOrder: ArticleOrder) => void;
  onChangeSort: (newSort: ArticleSort) => void;
  onChangeSearch: (search: string) => void;
  onChangeType: (tab: ITab<ArticleType>) => void;
  onClearType?: () => void;

  className?: string;
}
const tabs = getEnumOptions(ArticleType);

export const ArticleFilters: FC<IArticleFiltersProps> = memo((props: IArticleFiltersProps) => {
  const { onChangeOrder, onChangeSearch, onChangeSort, onChangeType, onClearType, className } = props;
  const { t } = useTranslation('article');
  const articleOrder = useAppSelector(selectArticleOrder);
  const articleSort = useAppSelector(selectArticleSort);
  const articleSearch = useAppSelector(selectArticleSearch);
  const articleType = useAppSelector(selectArticleType);

  return (
    <DynamicReducerLoader reducers={articleFiltersReducers}>
      <HStack className={getClassNames(styles.filtersWrapper, [className ?? ''])}>
        <div className={styles.filters}>
          <ListBox<ArticleSort>
            className={styles.sortBy}
            label={t('Sort by')}
            onChange={onChangeSort}
            enumOptions={ArticleSort}
            value={articleSort}
          />
          <ListBox<ArticleOrder>
            className={styles.sortBy}
            label={t('By')}
            onChange={onChangeOrder}
            enumOptions={ArticleOrder}
            value={articleOrder}
          />
        </div>
        <AppInput className={styles.search} value={articleSearch} placeholder={t('Search')} onChange={onChangeSearch} />
      </HStack>
      <Tabs
        className={styles.tabs}
        onTabClick={onChangeType}
        onTabClear={onClearType}
        tabs={tabs as ITab<ArticleType>[]}
        value={articleType}
      />
    </DynamicReducerLoader>
  );
});
