import type { Meta, StoryObj } from '@storybook/react';

import { Themes } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { AppButton, ButtonVariants } from './AppButton';

const meta = {
  title: 'shared/AppButton',
  component: AppButton,
  tags: ['autodocs'],
  args: {
    children: 'Text',
  },
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClearLight: Story = {
  args: {
    variant: ButtonVariants.Clear,
  },
  decorators: [themeDecorator(Themes.Light)],
};

export const ClearDark: Story = {
  args: {
    variant: ButtonVariants.Clear,
  },
  decorators: [themeDecorator(Themes.Dark)],
};

export const OutlineLight: Story = {
  args: {
    variant: ButtonVariants.Outline,
  },
  decorators: [themeDecorator(Themes.Light)],
};

export const OutlineDark: Story = {
  args: {
    variant: ButtonVariants.Outline,
  },
  decorators: [themeDecorator(Themes.Dark)],
};
