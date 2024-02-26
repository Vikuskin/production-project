/* eslint-disable indent */
import type { StoryFn } from '@storybook/react';
import React from 'react';

import { Theme, ThemeProvider } from 'app/providers/theme';

export const themeDecorator =
  (theme: Theme = Theme.Light) =>
  (Story: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
