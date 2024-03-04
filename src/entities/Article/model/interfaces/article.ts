import { ICustomError } from 'shared/interfaces/customError';

import { IArticleData } from '../types/articleData';

export interface IArticle {
  isLoading: boolean;
  error: ICustomError | null;
  articleData: IArticleData | null;
}
