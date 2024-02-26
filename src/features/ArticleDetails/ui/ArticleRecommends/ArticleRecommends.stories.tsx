import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';
import { getArticleListMock } from 'shared/mocks/articleList';

import { ArticleRecommends } from './ArticleRecommends';

const articleListMock = getArticleListMock(4);
const articleRecommendsMock = {
  ids: ['1', '2', '3', '4'],
  entities: { '1': articleListMock[0], '2': articleListMock[1], '3': articleListMock[2], '4': articleListMock[3] },
};
const meta = {
  title: 'features/ArticleRecommends',
  component: ArticleRecommends,
  tags: ['autodocs'],
  decorators: [
    storeDecorator({
      articleDetails: { articleRecommends: articleRecommendsMock },
    }),
  ],
} satisfies Meta<typeof ArticleRecommends>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};
