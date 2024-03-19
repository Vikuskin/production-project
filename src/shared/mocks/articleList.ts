import { IArticleData, articleDataMock } from '@/entities/Article';

export const getArticleListMock = (count: number): IArticleData[] =>
  new Array(count).fill(articleDataMock).map((item, index) => ({ ...item, id: `${index + 1}` }));
