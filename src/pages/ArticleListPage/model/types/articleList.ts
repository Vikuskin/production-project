import { EntityState } from '@reduxjs/toolkit';

import { IArticleData } from 'entities/Article';
import { ArticleListView } from 'entities/ArticleList';

export interface IArticleList extends EntityState<IArticleData, string> {
  isLoading: boolean;
  page: number;
  limit: number;
  hasMore: boolean;
  view: ArticleListView | null;
}
