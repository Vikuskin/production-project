import type { StoryFn } from '@storybook/react';
import React from 'react';

import { IState, StoreProvider } from 'app/providers/StoreProvider';

export const storeDecorator = (initialState: Partial<IState>) => (Story: StoryFn) => (
  <StoreProvider initialState={initialState as IState}>
    <Story />
  </StoreProvider>
);
