import { IAuthData } from 'entities/User';

import { ArticleBlock } from './articleBlock';
import { ArticleType } from './articleType';

export interface IArticleData {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: string;
  createdAt: string;
  user: IAuthData;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
