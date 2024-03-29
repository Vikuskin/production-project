import { IArticle } from 'entities/Article';
import { IUser } from 'entities/User';
import { INewComment } from 'features/AddNewComment';
import { IArticleComments } from 'features/ArticleComments';
import { IArticleFilters } from 'features/ArticleFilters';
import { ILoginForm } from 'features/AuthByUserName';
import { IProfile } from 'features/EditableProfileCard';
import { IInfiniteScroll } from 'features/ScrollPosition';
import { IArticleList } from 'pages/ArticleListPage';
import { RTKapi } from 'shared/api/RTKapi';

export interface IState {
  user: IUser;
  infiniteScroll: IInfiniteScroll;
  [RTKapi.reducerPath]: ReturnType<typeof RTKapi.reducer>;
  loginForm?: ILoginForm;
  profile?: IProfile;
  article?: IArticle;
  newComment?: INewComment;
  articleList?: IArticleList;
  articleFilters?: IArticleFilters;
  articleComments?: IArticleComments;
}
export type StateKey = keyof IState;
