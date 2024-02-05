import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Theme } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';
import { Text } from 'shared/ui/Text';

import { Card } from './Card';

const meta = {
  title: 'shared/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: <Text title="Title" text="Text" />,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};
