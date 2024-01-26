import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import MainPage from './MainPage';

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  tags: ['autodocs'],
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [themeDecorator(Theme.Light)],
};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};
