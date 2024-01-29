import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Theme } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { Navbar } from './Navbar';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightWithLogin: Story = {
  decorators: [themeDecorator(Theme.Light)],
};

export const DarkWithLogin: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};
