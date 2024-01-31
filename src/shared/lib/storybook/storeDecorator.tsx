import type { StoryFn } from '@storybook/react';
import React from 'react';

import { IState, StoreProvider } from 'app/providers/StoreProvider';
import { articleReducer } from 'entities/Article/model/slices/articleSlice';
import { loginFormReducer } from 'features/AuthByUserName/model/slices/loginFormSlice';
import { profileReducer } from 'features/EditableProfileCard';
import { ReducersList } from 'shared/lib/components/DynamicReducerLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginFormReducer,
  profile: profileReducer,
  article: articleReducer,
};

export const storeDecorator = (initialState: DeepPartial<IState>, asyncReducers?: ReducersList) => (Story: StoryFn) => (
  <StoreProvider initialState={initialState as IState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
);
