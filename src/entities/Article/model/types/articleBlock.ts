enum ArticleBlockType {
  Text = 'text',
  Code = 'code',
  Img = 'img',
}

interface IArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

interface IArticleTextBlock extends IArticleBlockBase {
  type: ArticleBlockType.Text;
  title: string;
  paragraphs: string[];
}

interface IArticleCodeBlock extends IArticleBlockBase {
  type: ArticleBlockType.Code;
  code: string;
}

interface IArticleImgBlock extends IArticleBlockBase {
  type: ArticleBlockType.Img;
  src: string;
  title: string;
}

export type ArticleBlock = IArticleCodeBlock | IArticleImgBlock | IArticleTextBlock;
