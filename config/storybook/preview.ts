import type { Preview } from '@storybook/react';
import React from 'react';
import '../../src/app/styles/index.scss';
import { themeDecorator } from '../../src/shared/lib/storybook/themeDecorator';
import { routerDecorator } from '../../src/shared/lib/storybook/routerDecorator';
import { Themes } from '../../src/shared/enums/themes';

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
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: ['app', Themes.Light], color: '#9c88ff' },
        { name: 'dark', class: ['app', Themes.Dark], color: '#2c2c2c' },
        { name: 'pink', class: ['app', Themes.Pink], color: '#9b379d' },
      ],
    },
  },
  decorators: [routerDecorator],
};

export default preview;
