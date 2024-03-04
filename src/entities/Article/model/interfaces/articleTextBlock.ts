import { IArticleBlockBase } from './articleBlockBase';

import { ArticleBlocks } from '../enums/articleBlocks';

export interface IArticleTextBlock extends IArticleBlockBase {
  type: ArticleBlocks.Text;
  title: string;
  paragraphs: string[];
}
