import type { Meta, StoryObj } from '@storybook/react';

import { Themes } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { AppInput } from './AppInput';

const meta = {
  title: 'shared/AppInput',
  component: AppInput,
  tags: ['autodocs'],
  args: {
    value: 'test value',
    placeholder: 'Test input',
  },
} satisfies Meta<typeof AppInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};
