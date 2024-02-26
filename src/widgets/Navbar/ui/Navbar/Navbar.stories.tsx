import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Theme } from 'app/providers/theme';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { Navbar } from './Navbar';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  decorators: [storeDecorator({})],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightWithoutAuth: Story = {};

export const DarkWithoutAuth: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};

export const LightWithAuth: Story = {
  decorators: [storeDecorator({ user: { authData: {} } })],
};

export const DarkWithAuth: Story = {
  decorators: [themeDecorator(Theme.Dark), storeDecorator({ user: { authData: {} } })],
};
