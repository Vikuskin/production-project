import type { StoryFn } from '@storybook/react';
import React from 'react';

import { Themes } from 'app/providers/theme';

export const themeDecorator =
  (theme: Themes = Themes.Light) =>
  (Story: StoryFn) => (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
