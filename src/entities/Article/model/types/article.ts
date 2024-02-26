import { ICustomError } from 'shared/types/customError';

import { IArticleData } from './articleData';

export interface IArticle {
  isLoading: boolean;
  error: ICustomError | null;
  articleData: IArticleData | null;
}
