import type { Meta, StoryObj } from '@storybook/react';

import { ROUTES } from 'shared/api/routes';
import { Themes } from 'shared/enums/themes';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { NotificationList } from './NotificationList';

import { notificationsMock } from '../../models/mocks/notifications';

const meta = {
  title: 'entities/NotificationList',
  component: NotificationList,
  parameters: {
    mockData: [
      {
        url: `${API_URL}${ROUTES.notifications}`,
        method: 'GET',
        status: 200,
        response: [...notificationsMock],
      },
    ],
  },
  tags: ['autodocs'],
  decorators: [storeDecorator({})],
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};
