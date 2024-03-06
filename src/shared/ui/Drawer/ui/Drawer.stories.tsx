import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Themes } from '@/shared/enums/themes';
import { delayCaptureDecorator } from '@/shared/lib/storybook/delayCaptureDecorator';
import { themeDecorator } from '@/shared/lib/storybook/themeDecorator';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { Drawer } from './Drawer';

const meta = {
  title: 'shared/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  args: {
    isOpen: true,
    onClose: () => {},
    children: (
      <VStack align="center">
        <Text text="Occaecat pariatur ea veniam et ex do ipsum in commodo sunt esse." />
        <Text text="Occaecat pariatur ea veniam et ex do ipsum in commodo sunt esse." />
        <Text text="Occaecat pariatur ea veniam et ex do ipsum in commodo sunt esse." />
      </VStack>
    ),
  },
  decorators: [delayCaptureDecorator()],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};
