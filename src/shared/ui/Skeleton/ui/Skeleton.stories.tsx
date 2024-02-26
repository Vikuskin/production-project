import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { Skeleton } from './Skeleton';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightDefault: Story = {};

export const DarkDefault: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};

export const LightCircle: Story = { args: { border: '50%', width: 100, height: 100 } };

export const DarkCircle: Story = {
  args: { border: '50%', width: 100, height: 100 },
  decorators: [themeDecorator(Theme.Dark)],
};
