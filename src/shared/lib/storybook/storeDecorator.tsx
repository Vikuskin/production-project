import type { StoryFn } from '@storybook/react';
import React from 'react';

import { IState, StoreProvider } from 'app/providers/StoreProvider';
import { articleReducer } from 'entities/Article/model/slices/articleSlice';
import { addNewCommentReducer } from 'features/AddNewComment/model/slices/addNewCommentSlice';
import { articleCommentsReducer } from 'features/ArticleComments/model/slices/articleCommentsSlice';
import { loginFormReducer } from 'features/AuthByUserName/model/slices/loginFormSlice';
import { profileReducer } from 'features/EditableProfileCard';
import { ReducersList } from 'shared/lib/components/DynamicReducerLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginFormReducer,
  profile: profileReducer,
  article: articleReducer,
  articleComments: articleCommentsReducer,
  newComment: addNewCommentReducer,
};

export const storeDecorator = (initialState: DeepPartial<IState>, asyncReducers?: ReducersList) => (Story: StoryFn) => (
  <StoreProvider initialState={initialState as IState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
);
