import { IArticleCodeBlock } from '../interfaces/articleCodeBlock';
import { IArticleImgBlock } from '../interfaces/articleImgBlock';
import { IArticleTextBlock } from '../interfaces/articleTextBlock';

export type ArticleBlock = IArticleCodeBlock | IArticleImgBlock | IArticleTextBlock;
