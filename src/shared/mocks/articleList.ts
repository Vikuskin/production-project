import { IArticleData } from 'entities/Article';

import { articleDataMock } from './articleData';

export const articleListMock: IArticleData[] = new Array(3)
  .fill(articleDataMock)
  .map((item, index) => ({ ...item, id: `${index + 1}` }));
