import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Themes } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';
import { AppButton, AppButtonVariants } from 'shared/ui/AppButton';

import { Dropdown } from './Dropdown';

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    trigger: <AppButton variant={AppButtonVariants.Outline}>Trigger button</AppButton>,
    items: [
      { content: <span>Dropdown item 1</span> },
      { content: <span>Dropdown item 2</span> },
      { content: <span>Dropdown item 3</span> },
    ],
    direction: 'topRight',
  },
  decorators: [
    (Story) => (
      <div style={{ textAlign: 'right' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTopRight: Story = {};

export const DarkTopRight: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};

export const LightTopLeft: Story = {
  args: { direction: 'topLeft' },
  decorators: [
    (Story) => (
      <div style={{ textAlign: 'left' }}>
        <Story />
      </div>
    ),
  ],
};

export const DarkTopLeft: Story = {
  args: { direction: 'topLeft' },
  decorators: [
    themeDecorator(Themes.Dark),
    (Story) => (
      <div style={{ textAlign: 'left' }}>
        <Story />
      </div>
    ),
  ],
};
