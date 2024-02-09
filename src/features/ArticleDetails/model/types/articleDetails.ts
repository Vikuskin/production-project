import { IArticleComments } from './articleComments';
import { IArticleRecommends } from './articleRecommends';

export interface IArticleDetails {
  articleComments: IArticleComments;
  articleRecommends: IArticleRecommends;
}
