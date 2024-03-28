import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import { ArticleTypes } from '@/entities/Article';
import { ArticleListView } from '@/entities/ArticleList';
import { ArticleFilters, ArticleOrder, ArticleSort, articleFiltersActions } from '@/features/ArticleFilters';
import { ArticleViewSwitcher } from '@/features/ArticleViewSwitcher';
import { getClassNames } from '@/shared/lib/classNames/getClassNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { HStack } from '@/shared/ui/Stack';
import { ITab } from '@/shared/ui/Tabs';
import { Text } from '@/shared/ui/Text';

import * as styles from './ArticleListHeader.module.scss';

import { fetchAllArticles } from '../../model/services/fetchAllArticles';
import { articleListActions } from '../../model/slices/articleListPageSlice';

interface IArticleListHeaderProps {
  articleListView: ArticleListView;
  resultCount: number;
  className?: string;
}

export const ArticleListHeader: FC<IArticleListHeaderProps> = memo(
  ({ className, articleListView, resultCount }: IArticleListHeaderProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const fetchData = useCallback(() => {
      dispatch(articleListActions.setPage(1));
      PROJECT === 'frontend' && dispatch(fetchAllArticles({ replace: true }));
    }, [dispatch]);
    const debouncedFetchData = useDebounce(fetchData, 500);
    const onChangeView = useCallback(
      (newView: ArticleListView) => {
        dispatch(articleListActions.setView(newView));
        fetchData();
      },
      [dispatch, fetchData],
    );
    const onChangeOrder = useCallback(
      (newOrder: ArticleOrder) => {
        dispatch(articleFiltersActions.setOrder(newOrder));
        fetchData();
      },
      [dispatch, fetchData],
    );
    const onChangeSort = useCallback(
      (newSort: ArticleSort) => {
        dispatch(articleFiltersActions.setSort(newSort));
        fetchData();
      },
      [dispatch, fetchData],
    );
    const onChangeSearch = useCallback(
      (search: string) => {
        if (!search) {
          searchParams.delete('search');
          setSearchParams(searchParams);
        }
        dispatch(articleFiltersActions.setSearch(search));
        debouncedFetchData();
      },
      [dispatch, debouncedFetchData, searchParams, setSearchParams],
    );
    const onChangeType = useCallback(
      (tab: ITab<ArticleTypes>) => {
        dispatch(articleFiltersActions.setType(tab.value));
        fetchData();
      },
      [dispatch, fetchData],
    );
    const onClearType = useCallback(() => {
      searchParams.delete('type');
      setSearchParams(searchParams);
      dispatch(articleFiltersActions.setType(null));
    }, [dispatch, searchParams, setSearchParams]);

    return (
      <div className={getClassNames(styles.articleHeader, [className ?? ''])}>
        <ArticleFilters
          onChangeOrder={onChangeOrder}
          onChangeSearch={onChangeSearch}
          onChangeSort={onChangeSort}
          onChangeType={onChangeType}
          onClearType={onClearType}
        />
        <HStack className={styles.bottom}>
          <Text className={styles.results} text={`${resultCount} ${t('results', { ns: 'article' })}`} />
          <ArticleViewSwitcher view={articleListView} onViewClick={onChangeView} />
        </HStack>
      </div>
    );
  },
);
