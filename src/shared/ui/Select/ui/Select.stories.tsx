import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { Select } from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    label: 'Test option',
    options: [
      { value: 'Test 1', content: 'Test 1' },
      { value: 'Test 2', content: 'Test 2' },
      { value: 'Test 3', content: 'Test 3' },
    ],
    value: 'Test',
    onChange: () => {},
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};
