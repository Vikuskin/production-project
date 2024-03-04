/* eslint-disable indent */
import type { StoryFn } from '@storybook/react';
import React from 'react';

import { ThemeProvider } from 'app/providers/theme';
import { Themes } from 'shared/enums/themes';

export const themeDecorator =
  (theme: Themes = Themes.Light) =>
  (Story: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
