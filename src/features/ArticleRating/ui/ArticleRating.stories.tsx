import type { Meta, StoryObj } from '@storybook/react';

import { ROUTES } from '@/shared/api/routes';
import { Themes } from '@/shared/enums/themes';
import { storeDecorator } from '@/shared/lib/storybook/storeDecorator';
import { themeDecorator } from '@/shared/lib/storybook/themeDecorator';

import ArticleRating from './ArticleRating';

const meta = {
  title: 'features/ArticleRating',
  component: ArticleRating,
  parameters: {
    mockData: [
      {
        url: `${API_URL}${ROUTES.articleRatings}?userId=&articleId=`,
        method: 'GET',
        status: 200,
        response: [],
      },
    ],
  },
  tags: ['autodocs'],
  decorators: [storeDecorator({})],
  args: {
    id: '1',
  },
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightWithoutRate: Story = {};

export const DarkWithoutRate: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};

export const LightWithRate: Story = {
  parameters: {
    mockData: [
      {
        url: `${API_URL}${ROUTES.articleRatings}?userId=&articleId=`,
        method: 'GET',
        status: 200,
        response: [{ id: '1', rate: 3, articleId: '1', userId: '1' }],
      },
    ],
  },
};

export const DarkWithRate: Story = {
  parameters: {
    mockData: [
      {
        url: `${API_URL}${ROUTES.articleRatings}?userId=&articleId=`,
        method: 'GET',
        status: 200,
        response: [{ id: '1', rate: 3, articleId: '1', userId: '1' }],
      },
    ],
  },
  decorators: [themeDecorator(Themes.Dark)],
};
