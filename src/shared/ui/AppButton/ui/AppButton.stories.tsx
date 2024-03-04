import type { Meta, StoryObj } from '@storybook/react';

import { Themes } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { AppButton } from './AppButton';

import { AppButtonSizes } from '../enums/appButtonSizes';
import { AppButtonVariants } from '../enums/appButtonVariants';

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
};

export const OutlineDanger: Story = {
  args: {
    variant: AppButtonVariants.OutlineDanger,
  },
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

export const OutlineLightDisabled: Story = {
  args: {
    variant: AppButtonVariants.Outline,
    disabled: true,
  },
};

export const OutlineDarkDisabled: Story = {
  args: {
    variant: AppButtonVariants.Outline,
    disabled: true,
  },
  decorators: [themeDecorator(Themes.Dark)],
};
