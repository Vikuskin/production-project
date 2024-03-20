import { IArticleData } from '@/entities/Article';
import { articleDataMock } from '@/entities/Article/model/mocks/articleData';

export const getArticleListMock = (count: number): IArticleData[] =>
  new Array(count).fill(articleDataMock).map((item, index) => ({ ...item, id: `${index + 1}` }));
