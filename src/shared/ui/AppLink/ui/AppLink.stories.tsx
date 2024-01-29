import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { AppLink, AppLinkVariant } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
    children: 'Link',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
  decorators: [themeDecorator(Theme.Light)],
};

export const PrimaryDark: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};

export const SecondaryLight: Story = {
  args: { variant: AppLinkVariant.Secondary },
  decorators: [themeDecorator(Theme.Light)],
};

export const SecondaryDark: Story = {
  args: { variant: AppLinkVariant.Secondary },
  decorators: [themeDecorator(Theme.Dark)],
};
