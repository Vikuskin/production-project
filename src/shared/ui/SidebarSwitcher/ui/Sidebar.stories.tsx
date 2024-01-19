import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Themes } from 'app/providers/theme';
import TranslationSvg from 'shared/assets/icons/translation.svg';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { SidebarSwitcher } from './SidebarSwitcher';

const meta = {
  title: 'shared/SidebarSwitcher',
  component: SidebarSwitcher,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <TranslationSvg />
        <span>Text</span>
      </>
    ),
  },
} satisfies Meta<typeof SidebarSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [themeDecorator(Themes.Light)],
};

export const Dark: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};
