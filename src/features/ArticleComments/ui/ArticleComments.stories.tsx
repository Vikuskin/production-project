import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';
import { commentsMock } from 'shared/mocks/comments';

import { ArticleComments } from './ArticleComments';

const articleCommentsMock = { ids: ['1', '2'], entities: { '1': commentsMock[0], '2': commentsMock[1] } };
const meta = {
  title: 'features/ArticleComments',
  component: ArticleComments,
  tags: ['autodocs'],
  args: {
    articleId: '1',
  },
  decorators: [
    storeDecorator({
      articleComments: articleCommentsMock,
      newComment: { text: 'text' },
    }),
  ],
} satisfies Meta<typeof ArticleComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightNormal: Story = {};

export const DarkNormal: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};

export const LightWithNoComments: Story = {
  decorators: [storeDecorator({})],
};

export const DarkWithNoComments: Story = {
  decorators: [themeDecorator(Theme.Dark), storeDecorator({})],
};

export const LightLoading: Story = {
  decorators: [storeDecorator({ articleComments: { ...articleCommentsMock, isLoading: true } })],
};

export const DarkLoading: Story = {
  decorators: [
    themeDecorator(Theme.Dark),
    storeDecorator({ articleComments: { ...articleCommentsMock, isLoading: true } }),
  ],
};
