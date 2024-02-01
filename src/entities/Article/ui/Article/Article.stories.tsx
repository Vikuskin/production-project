import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';
import { articleDataMock } from 'shared/mocks/articleData';

import { Article } from './Article';

const meta = {
  title: 'entities/Article',
  component: Article,
  tags: ['autodocs'],
  args: {
    id: '1',
  },
  decorators: [storeDecorator({ article: { articleData: articleDataMock } })],
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};

export const LightLoading: Story = { decorators: [storeDecorator({ article: { isLoading: true } })] };

export const DarkLoading: Story = {
  decorators: [themeDecorator(Theme.Dark), storeDecorator({ article: { isLoading: true } })],
};

export const LightError: Story = { decorators: [storeDecorator({ article: { error: INTERNAL_SERVER_ERROR } })] };

export const DarkError: Story = {
  decorators: [themeDecorator(Theme.Dark), storeDecorator({ article: { error: INTERNAL_SERVER_ERROR } })],
};
