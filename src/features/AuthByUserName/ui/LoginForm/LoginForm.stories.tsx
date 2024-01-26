import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { delayCaptureDecorator } from 'shared/lib/storybook/delayCaptureDecorator';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import LoginForm from './LoginForm';

import { loginFormInitialState } from '../../model/slices/loginFormSlice';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  decorators: [delayCaptureDecorator(), storeDecorator({ loginForm: loginFormInitialState })],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightNormal: Story = {
  decorators: [themeDecorator(Theme.Light)],
};

export const DarkNormal: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};

export const LightError: Story = {
  decorators: [
    themeDecorator(Theme.Light),
    storeDecorator({
      loginForm: { ...loginFormInitialState, error: { status: 500, message: 'Internal server error' } },
    }),
  ],
};

export const DarkError: Story = {
  decorators: [
    themeDecorator(Theme.Dark),
    storeDecorator({
      loginForm: { ...loginFormInitialState, error: { status: 500, message: 'Internal server error' } },
    }),
  ],
};

export const LightLoading: Story = {
  decorators: [
    themeDecorator(Theme.Light),
    storeDecorator({ loginForm: { ...loginFormInitialState, isLoading: true } }),
  ],
};

export const DarkLoading: Story = {
  decorators: [
    themeDecorator(Theme.Dark),
    storeDecorator({ loginForm: { ...loginFormInitialState, isLoading: true } }),
  ],
};
