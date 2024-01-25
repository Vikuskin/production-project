import { ReducersMapObject } from '@reduxjs/toolkit';
import type { StoryFn } from '@storybook/react';
import React from 'react';

import { IState, StoreProvider } from 'app/providers/StoreProvider';
import { loginFormReducer } from 'features/AuthByUserName/model/slices/loginFormSlice';

const defaultAsyncReducers: ReducersMapObject<IState> = {
  loginForm: loginFormReducer,
} as ReducersMapObject<IState>;

export const storeDecorator =
  (initialState: Partial<IState>, asyncReducers?: ReducersMapObject<IState>) => (Story: StoryFn) => (
    <StoreProvider initialState={initialState as IState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <Story />
    </StoreProvider>
  );
