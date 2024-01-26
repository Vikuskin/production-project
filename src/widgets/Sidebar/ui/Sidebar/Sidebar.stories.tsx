import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { Sidebar } from './Sidebar';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  decorators: [storeDecorator({ user: { authData: null } })],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightWithLogin: Story = {
  decorators: [themeDecorator(Theme.Light)],
};

export const DarkWithLogin: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};

export const LightWithLogut: Story = {
  decorators: [themeDecorator(Theme.Light), storeDecorator({ user: { authData: { id: '1', username: 'test' } } })],
};

export const DarkWithLogut: Story = {
  decorators: [themeDecorator(Theme.Dark), storeDecorator({ user: { authData: { id: '1', username: 'test' } } })],
};
