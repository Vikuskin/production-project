import type { Meta, StoryObj } from '@storybook/react';

import { Themes } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import AboutPage from './AboutPage';

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
  tags: ['autodocs'],
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [themeDecorator(Themes.Light)],
};

export const Dark: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};