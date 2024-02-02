export enum ArticleBlockType {
  Text = 'text',
  Code = 'code',
  Img = 'img',
}

interface IArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface IArticleTextBlock extends IArticleBlockBase {
  type: ArticleBlockType.Text;
  title: string;
  paragraphs: string[];
}

export interface IArticleCodeBlock extends IArticleBlockBase {
  type: ArticleBlockType.Code;
  code: string;
}

export interface IArticleImgBlock extends IArticleBlockBase {
  type: ArticleBlockType.Img;
  src: string;
  title: string;
}

export type ArticleBlock = IArticleCodeBlock | IArticleImgBlock | IArticleTextBlock;
