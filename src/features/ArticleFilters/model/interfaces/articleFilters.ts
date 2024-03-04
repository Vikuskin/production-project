import { ArticleTypes } from 'entities/Article';

import { ArticleOrder } from '../enums/articleOrder';
import { ArticleSort } from '../enums/articleSort';

export interface IArticleFilters {
  order: ArticleOrder;
  sort: ArticleSort;
  search: string;
  type: ArticleTypes | null;
}
