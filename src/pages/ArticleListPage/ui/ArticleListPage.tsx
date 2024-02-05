import React, { FC, memo } from 'react';

import { ArticleList } from 'entities/ArticleList';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';

import { selectArticleList, selectArticleListLoading } from '../model/selectors/selectArticleList';
import { fetchAllArticles } from '../model/services/fetchAllArticles';
import { articleListReducer } from '../model/slices/articleListPageSlice';

const articleListReducers: ReducersList = {
  articleList: articleListReducer,
};
const ArticleListPage: FC = () => {
  const dispatch = useAppDispatch();
  const articleList = useAppSelector(selectArticleList);
  const articleListLoading = useAppSelector(selectArticleListLoading);

  useInitialEffect(() => dispatch(fetchAllArticles()));

  return (
    <DynamicReducerLoader reducers={articleListReducers} removeAfterUnmount>
      {<ArticleList articleList={articleList} isLoading={articleListLoading} />}
    </DynamicReducerLoader>
  );
};

export default memo(ArticleListPage);
