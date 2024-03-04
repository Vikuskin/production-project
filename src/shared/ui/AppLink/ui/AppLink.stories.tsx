import type { Meta, StoryObj } from '@storybook/react';

import { Themes } from 'shared/enums/themes';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { AppLink } from './AppLink';

import { AppLinkVariants } from '../enums/appLinkVariants';

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

export const PrimaryLight: Story = {};

export const PrimaryDark: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};

export const SecondaryLight: Story = {
  args: { variant: AppLinkVariants.Secondary },
};

export const SecondaryDark: Story = {
  args: { variant: AppLinkVariants.Secondary },
  decorators: [themeDecorator(Themes.Dark)],
};
