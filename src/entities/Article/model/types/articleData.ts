import { IAuthData } from 'entities/User';

import { ArticleBlock } from './articleBlock';

import { ArticleTypes } from '../enums/articleTypes';

export interface IArticleData {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: string;
  createdAt: string;
  user: IAuthData;
  type: ArticleTypes[];
  blocks: ArticleBlock[];
}
