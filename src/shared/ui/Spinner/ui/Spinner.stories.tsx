import type { Meta, StoryObj } from '@storybook/react';

import { Themes } from '@/shared/enums/themes';
import { themeDecorator } from '@/shared/lib/storybook/themeDecorator';

import { Spinner } from './Spinner';

const meta = {
  title: 'shared/Spinner',
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};
