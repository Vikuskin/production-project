export interface IArticleRating {
  id: number;
  rate: number;
  feedback?: string;
  userId: string;
  articleId: string;
}
