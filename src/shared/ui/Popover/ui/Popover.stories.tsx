import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Themes } from '@/shared/enums/themes';
import { themeDecorator } from '@/shared/lib/storybook/themeDecorator';
import { AppButton, AppButtonVariants } from '@/shared/ui/AppButton';

import { Popover } from './Popover';

import { VStack } from '../../Stack';

const meta = {
  title: 'shared/Popover',
  component: Popover,
  tags: ['autodocs'],
  args: {
    trigger: (
      <AppButton component="div" variant={AppButtonVariants.Outline}>
        Trigger button
      </AppButton>
    ),
    direction: 'topLeft',
    children: (
      <VStack align="center">
        <span>Popover item 1</span>
        <span>Popover item 2</span>
        <span>Popover item 3</span>
      </VStack>
    ),
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTopLeft: Story = {};

export const DarkTopLeft: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};

export const LightTopRight: Story = {
  args: { direction: 'topRight' },
  decorators: [
    (Story) => (
      <div style={{ textAlign: 'right' }}>
        <Story />
      </div>
    ),
  ],
};

export const DarkTopRight: Story = {
  args: { direction: 'topRight' },
  decorators: [
    themeDecorator(Themes.Dark),
    (Story) => (
      <div style={{ textAlign: 'right' }}>
        <Story />
      </div>
    ),
  ],
};
