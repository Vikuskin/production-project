import type { Meta, StoryObj } from '@storybook/react';

import { Themes } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { AppButton, AppButtonSizes, AppButtonVariants } from './AppButton';

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
    variant: AppButtonVariants.Clear,
  },
  decorators: [themeDecorator(Themes.Light)],
};

export const ClearDark: Story = {
  args: {
    variant: AppButtonVariants.Clear,
  },
  decorators: [themeDecorator(Themes.Dark)],
};

export const OutlineLight: Story = {
  args: {
    variant: AppButtonVariants.Outline,
  },
  decorators: [themeDecorator(Themes.Light)],
};

export const OutlineDark: Story = {
  args: {
    variant: AppButtonVariants.Outline,
  },
  decorators: [themeDecorator(Themes.Dark)],
};

export const OutlineSizeM: Story = {
  args: {
    variant: AppButtonVariants.Outline,
    size: AppButtonSizes.SizeM,
  },
  decorators: [themeDecorator(Themes.Dark)],
};

export const OutlineSizeL: Story = {
  args: {
    variant: AppButtonVariants.Outline,
    size: AppButtonSizes.SizeL,
  },
  decorators: [themeDecorator(Themes.Dark)],
};

export const OutlineSizeXl: Story = {
  args: {
    variant: AppButtonVariants.Outline,
    size: AppButtonSizes.SizeXl,
  },
  decorators: [themeDecorator(Themes.Dark)],
};
