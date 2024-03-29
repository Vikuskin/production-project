import type { StoryFn } from '@storybook/react';
import React from 'react';

import { IState, StoreProvider } from 'app/providers/StoreProvider';
import { articleReducer } from 'entities/Article/model/slices/articleSlice';
import { addNewCommentReducer } from 'features/AddNewComment/model/slices/addNewCommentSlice';
import { articleCommentsReducer } from 'features/ArticleComments/model/slices/articleCommentsSlice';
import { articleFiltersReducer } from 'features/ArticleFilters';
import { loginFormReducer } from 'features/AuthByUserName/model/slices/loginFormSlice';
import { profileReducer } from 'features/EditableProfileCard';
import { articleListReducer } from 'pages/ArticleListPage/model/slices/articleListPageSlice';
import { RTKapi } from 'shared/api/RTKapi';
import { ReducersList } from 'shared/lib/components/DynamicReducerLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginFormReducer,
  profile: profileReducer,
  article: articleReducer,
  articleList: articleListReducer,
  articleFilters: articleFiltersReducer,
  articleComments: articleCommentsReducer,
  newComment: addNewCommentReducer,
  [RTKapi.reducerPath]: RTKapi.reducer,
};

export const storeDecorator = (initialState: DeepPartial<IState>, asyncReducers?: ReducersList) => (Story: StoryFn) => (
  <StoreProvider initialState={initialState as IState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
);
