import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Themes } from 'app/providers/theme';
import { userInitialState } from 'entities/User/model/slice/userSlice';
import { routerDecorator } from 'shared/lib/storybook/routerDecorator';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { Navbar } from './Navbar';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  decorators: [routerDecorator, storeDecorator({ user: userInitialState })],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightWithLogin: Story = {
  decorators: [themeDecorator(Themes.Light)],
};

export const DarkWithLogin: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};

export const LightWithLogut: Story = {
  decorators: [themeDecorator(Themes.Light), storeDecorator({ user: { authData: { id: '1', username: 'test' } } })],
};

export const DarkWithLogut: Story = {
  decorators: [themeDecorator(Themes.Dark), storeDecorator({ user: { authData: { id: '1', username: 'test' } } })],
};
