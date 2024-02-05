import { IArticleData } from 'entities/Article';
import { ICustomError } from 'shared/types/customError';

export interface IArticleList {
  error: ICustomError | null;
  articleList: IArticleData[];
  isLoading: boolean;
}
