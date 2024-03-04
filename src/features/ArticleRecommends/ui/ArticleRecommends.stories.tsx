import type { Meta, StoryObj } from '@storybook/react';

import { ROUTES } from 'shared/api/routes';
import { Themes } from 'shared/enums/themes';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';
import { getArticleListMock } from 'shared/mocks/articleList';

import { ArticleRecommends } from './ArticleRecommends';

const articleRecommendsMock = getArticleListMock(4);
const meta = {
  title: 'features/ArticleRecommends',
  component: ArticleRecommends,
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
  decorators: [storeDecorator({})],
} satisfies Meta<typeof ArticleRecommends>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightNormal: Story = {};

export const DarkNormal: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};
