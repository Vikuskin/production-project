import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';
import { delayCaptureDecorator } from 'shared/lib/storybook/delayCaptureDecorator';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';
import { articleDataMock } from 'shared/mocks/articleData';
import { commentsMock } from 'shared/mocks/comments';

import ArticlePage from './ArticlePage';

const articleCommentsMock = { ids: ['1', '2'], entities: { '1': commentsMock[0], '2': commentsMock[1] } };
const meta = {
  title: 'pages/ArticlePage',
  component: ArticlePage,
  tags: ['autodocs'],
  decorators: [
    storeDecorator({
      article: { articleData: articleDataMock },
      articleComments: { ...articleCommentsMock, isLoading: false },
      newComment: {},
    }),
    delayCaptureDecorator(),
  ],
} satisfies Meta<typeof ArticlePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};

export const LightLoading: Story = {
  decorators: [
    storeDecorator({
      article: { isLoading: true },
      articleComments: { ...articleCommentsMock, isLoading: true },
      newComment: {},
    }),
  ],
};

export const DarkLoading: Story = {
  decorators: [
    themeDecorator(Theme.Dark),
    storeDecorator({
      article: { isLoading: true },
      articleComments: { ...articleCommentsMock, isLoading: true },
      newComment: {},
    }),
  ],
};

export const LightError: Story = { decorators: [storeDecorator({ article: { error: INTERNAL_SERVER_ERROR } })] };

export const DarkError: Story = {
  decorators: [themeDecorator(Theme.Dark), storeDecorator({ article: { error: INTERNAL_SERVER_ERROR } })],
};
