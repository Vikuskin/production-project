import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Themes } from 'app/providers/theme';
import TranslationSvg from 'shared/assets/icons/translation.svg';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { SidebarItem } from './SidebarItem';

const meta = {
  title: 'widgets/SidebarItem',
  component: SidebarItem,
  tags: ['autodocs'],
  args: {
    collapsed: false,
    item: {
      text: 'Language',
      Icon: TranslationSvg,
      onClick: () => {},
    },
  },
} satisfies Meta<typeof SidebarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};

export const LightCollapsed: Story = {
  args: { collapsed: true },
};

export const DarkCollapsed: Story = {
  args: { collapsed: true },
  decorators: [themeDecorator(Themes.Dark)],
};
