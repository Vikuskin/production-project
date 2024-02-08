import { ArticleType } from 'entities/Article';

import { ArticleOrder } from './articleOrder';
import { ArticleSort } from './articleSort';

export interface IArticleFilters {
  order: ArticleOrder;
  sort: ArticleSort;
  search: string;
  type: ArticleType | null;
}
