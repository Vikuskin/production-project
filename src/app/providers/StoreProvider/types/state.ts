import { EnhancedStore, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { IArticle } from 'entities/Article';
import { IUser } from 'entities/User';
import { INewComment } from 'features/AddNewComment';
import { IArticleComments } from 'features/ArticleComments';
import { IArticleFilters } from 'features/ArticleFilters';
import { IArticleRecommends } from 'features/ArticleRecommends';
import { ILoginForm } from 'features/AuthByUserName';
import { IProfile } from 'features/EditableProfileCard';
import { IInfiniteScroll } from 'features/ScrollPosition';
import { IArticleList } from 'pages/ArticleListPage';

import { createReducerManager } from '../config/createReducerManager';

export type AppDispatch = ThunkDispatch<IState, IThunkExtraArg, UnknownAction>;
export interface IState {
  user: IUser;
  infiniteScroll: IInfiniteScroll;
  loginForm?: ILoginForm;
  profile?: IProfile;
  article?: IArticle;
  newComment?: INewComment;
  articleList?: IArticleList;
  articleFilters?: IArticleFilters;
  articleComments?: IArticleComments;
  articleRecommends?: IArticleRecommends;
}
export type StateKey = keyof IState;
export type ReducerManager = ReturnType<typeof createReducerManager>;
export interface IStoreWithManager extends EnhancedStore<IState> {
  reducerManager: ReducerManager;
  dispatch: AppDispatch;
}
export interface IThunkExtraArg {
  api: AxiosInstance;
}
export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: IState;
}
