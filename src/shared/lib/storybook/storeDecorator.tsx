import type { StoryFn } from '@storybook/react';
import React from 'react';

import { IState, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginFormReducer } from 'features/AuthByUserName/model/slices/loginFormSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginFormReducer,
  profile: profileReducer,
};

export const storeDecorator = (initialState: DeepPartial<IState>, asyncReducers?: ReducersList) => (Story: StoryFn) => (
  <StoreProvider initialState={initialState as IState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
);
