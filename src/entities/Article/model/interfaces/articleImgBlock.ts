import { IArticleBlockBase } from './articleBlockBase';

import { ArticleBlocks } from '../enums/articleBlocks';

export interface IArticleImgBlock extends IArticleBlockBase {
  type: ArticleBlocks.Img;
  src: string;
  title: string;
}
