import type { Meta, StoryObj } from '@storybook/react';

import { Themes } from 'app/providers/theme';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';
import { delayCaptureDecorator } from 'shared/lib/storybook/delayCaptureDecorator';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';
import { articleDataMock } from 'shared/mocks/articleData';
import { commentsMock } from 'shared/mocks/comments';

import ArticlePage from './ArticlePage';

import { ROUTES } from '../../../shared/api/routes';
import { getArticleListMock } from '../../../shared/mocks/articleList';

const articleRecommendsMock = getArticleListMock(4);
const articleCommentsMock = { ids: ['1', '2'], entities: { '1': commentsMock[0], '2': commentsMock[1] } };
const meta = {
  title: 'pages/ArticlePage',
  component: ArticlePage,
  parameters: {
    mockData: [
      {
        url: `${API_URL}${ROUTES.articles}?_limit=4`,
        method: 'GET',
        status: 200,
        response: [...articleRecommendsMock],
      },
    ],
  },
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
  decorators: [themeDecorator(Themes.Dark)],
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
    themeDecorator(Themes.Dark),
    storeDecorator({
      article: { isLoading: true },
      articleComments: { ...articleCommentsMock, isLoading: true },
      newComment: {},
    }),
  ],
};

export const LightError: Story = { decorators: [storeDecorator({ article: { error: INTERNAL_SERVER_ERROR } })] };

export const DarkError: Story = {
  decorators: [themeDecorator(Themes.Dark), storeDecorator({ article: { error: INTERNAL_SERVER_ERROR } })],
};
