import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { notificationsMock } from '@/entities/Notification';
import { ROUTES } from '@/shared/api/routes';
import { Themes } from '@/shared/enums/themes';
import { storeDecorator } from '@/shared/lib/storybook/storeDecorator';
import { themeDecorator } from '@/shared/lib/storybook/themeDecorator';

import { Navbar } from './Navbar';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
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
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightWithoutAuth: Story = {};

export const DarkWithoutAuth: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};

export const LightWithAuth: Story = {
  decorators: [storeDecorator({ user: { authData: {} } })],
};

export const DarkWithAuth: Story = {
  decorators: [themeDecorator(Themes.Dark), storeDecorator({ user: { authData: {} } })],
};
