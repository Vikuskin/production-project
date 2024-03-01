import type { StoryFn } from '@storybook/react';
import React from 'react';

import { IState, StoreProvider } from 'app/providers/StoreProvider';
import { articleReducer } from 'entities/Article/model/slices/articleSlice';
import { articleCommentsReducer } from 'features/ArticleComments/model/slices/articleCommentsSlice';
import { articleFiltersReducer } from 'features/ArticleFilters';
import { articleRecommendsReducer } from 'features/ArticleRecommends/models/slices/articleRecommendsSlice';
import { loginFormReducer } from 'features/AuthByUserName/model/slices/loginFormSlice';
import { profileReducer } from 'features/EditableProfileCard';
import { articleListReducer } from 'pages/ArticleListPage/model/slices/articleListPageSlice';
import { ReducersList } from 'shared/lib/components/DynamicReducerLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginFormReducer,
  profile: profileReducer,
  article: articleReducer,
  articleList: articleListReducer,
  articleFilters: articleFiltersReducer,
  articleComments: articleCommentsReducer,
  articleRecommends: articleRecommendsReducer,
};

export const storeDecorator = (initialState: DeepPartial<IState>, asyncReducers?: ReducersList) => (Story: StoryFn) => (
  <StoreProvider initialState={initialState as IState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
);
