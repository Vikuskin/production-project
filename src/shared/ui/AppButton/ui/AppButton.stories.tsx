import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { AppButton, AppButtonSize, AppButtonVariant } from './AppButton';

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
    variant: AppButtonVariant.Clear,
  },
  decorators: [themeDecorator(Theme.Light)],
};

export const ClearDark: Story = {
  args: {
    variant: AppButtonVariant.Clear,
  },
  decorators: [themeDecorator(Theme.Dark)],
};

export const OutlineLight: Story = {
  args: {
    variant: AppButtonVariant.Outline,
  },
  decorators: [themeDecorator(Theme.Light)],
};

export const OutlineDark: Story = {
  args: {
    variant: AppButtonVariant.Outline,
  },
  decorators: [themeDecorator(Theme.Dark)],
};

export const OutlineSizeM: Story = {
  args: {
    variant: AppButtonVariant.Outline,
    size: AppButtonSize.SizeM,
  },
  decorators: [themeDecorator(Theme.Dark)],
};

export const OutlineSizeL: Story = {
  args: {
    variant: AppButtonVariant.Outline,
    size: AppButtonSize.SizeL,
  },
  decorators: [themeDecorator(Theme.Dark)],
};

export const OutlineSizeXl: Story = {
  args: {
    variant: AppButtonVariant.Outline,
    size: AppButtonSize.SizeXl,
  },
  decorators: [themeDecorator(Theme.Dark)],
};

export const OutlineDisabled: Story = {
  args: {
    variant: AppButtonVariant.Outline,
    disabled: true,
  },
  decorators: [themeDecorator(Theme.Dark)],
};
