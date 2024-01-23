import type { Meta, StoryObj } from '@storybook/react';

import { Themes } from 'app/providers/theme';
import { delayCaptureDecorator } from 'shared/lib/storybook/delayCaptureDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { LoginForm } from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [themeDecorator(Themes.Light), delayCaptureDecorator()],
};

export const Dark: Story = {
  decorators: [themeDecorator(Themes.Dark), delayCaptureDecorator()],
};
