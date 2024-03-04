import { IArticleBlockBase } from './articleBlockBase';

import { ArticleBlocks } from '../enums/articleBlocks';

export interface IArticleCodeBlock extends IArticleBlockBase {
  type: ArticleBlocks.Code;
  code: string;
}
