import type { Meta, StoryObj } from '@storybook/react';

import { Themes } from 'app/providers/theme';
import { routerDecorator } from 'shared/lib/storybook/routerDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { AppLink, AppLinkThemes } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
    children: 'Link',
  },
  decorators: [routerDecorator],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
  decorators: [themeDecorator(Themes.Light)],
};

export const PrimaryDark: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};

export const SecondaryLight: Story = {
  args: { theme: AppLinkThemes.Secondary },
  decorators: [themeDecorator(Themes.Light)],
};

export const SecondaryDark: Story = {
  args: { theme: AppLinkThemes.Secondary },
  decorators: [themeDecorator(Themes.Dark)],
};
