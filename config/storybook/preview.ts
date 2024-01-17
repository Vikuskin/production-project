import type { Preview } from '@storybook/react';
import React from 'react';
import '../../src/app/styles/index.scss';
import { themeDecorator } from '../../src/shared/lib/storybook/themeDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
  },
  decorators: [themeDecorator()],
};

export default preview;
