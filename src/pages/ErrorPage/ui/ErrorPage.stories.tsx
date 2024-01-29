import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import ErrorPage from './ErrorPage';

const meta = {
  title: 'pages/ErrorPage',
  component: ErrorPage,
  tags: ['autodocs'],
  args: {
    errorCode: 500,
    text: 'Error page',
  },
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};
