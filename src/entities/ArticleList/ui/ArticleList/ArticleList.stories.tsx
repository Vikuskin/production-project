import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { delayCaptureDecorator } from 'shared/lib/storybook/delayCaptureDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';
import { articleListMock } from 'shared/mocks/articleList';

import { ArticleList } from './ArticleList';

import { ArticleListView } from '../../model/types/articleListView';

const meta = {
  title: 'entities/ArticleList',
  component: ArticleList,
  tags: ['autodocs'],
  args: {
    articleList: articleListMock,
    isLoading: false,
    view: ArticleListView.Tile,
  },
  decorators: [delayCaptureDecorator()],
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTile: Story = {};

export const DarkTile: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};

export const LightList: Story = {
  args: { articleList: articleListMock, view: ArticleListView.List, isLoading: false },
};

export const DarkList: Story = {
  args: { articleList: articleListMock, view: ArticleListView.List, isLoading: false },
  decorators: [themeDecorator(Theme.Dark)],
};

export const LightTileLoading: Story = {
  args: { articleList: articleListMock, isLoading: true },
};

export const DarkTileLoading: Story = {
  args: { articleList: articleListMock, isLoading: true },
  decorators: [themeDecorator(Theme.Dark)],
};

export const LightListLoading: Story = {
  args: { articleList: articleListMock, isLoading: true, view: ArticleListView.List },
};

export const DarkListLoading: Story = {
  args: { articleList: articleListMock, isLoading: true, view: ArticleListView.List },
  decorators: [themeDecorator(Theme.Dark)],
};
