import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { delayCaptureDecorator } from 'shared/lib/storybook/delayCaptureDecorator';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';
import { articleListMock } from 'shared/mocks/articleList';

import ArticleListPage from './ArticleListPage';

const meta = {
  title: 'pages/ArticleListPage',
  component: ArticleListPage,
  tags: ['autodocs'],
  decorators: [
    storeDecorator({
      articleList: { articleList: articleListMock },
    }),
    delayCaptureDecorator(),
  ],
} satisfies Meta<typeof ArticleListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};

export const LightLoading: Story = {
  decorators: [
    storeDecorator({
      articleList: { articleList: articleListMock, isLoading: true },
    }),
  ],
};

export const DarkLoading: Story = {
  decorators: [
    themeDecorator(Theme.Dark),
    storeDecorator({
      articleList: { articleList: articleListMock, isLoading: true },
    }),
  ],
};
