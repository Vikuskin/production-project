import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Theme } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton';

import { Dropdown } from './Dropdown';

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    trigger: <AppButton variant={AppButtonVariant.Outline}>Trigger button</AppButton>,
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
  decorators: [themeDecorator(Theme.Dark)],
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
    themeDecorator(Theme.Dark),
    (Story) => (
      <div style={{ textAlign: 'left' }}>
        <Story />
      </div>
    ),
  ],
};
