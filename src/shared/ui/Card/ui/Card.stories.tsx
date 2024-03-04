import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Themes } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';
import { Text } from 'shared/ui/Text';

import { Card } from './Card';

import { CardVariant } from '../enums/cardVariant';

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

export const LightNormal: Story = {};

export const DarkNormal: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};

export const LightOutlined: Story = { args: { variant: CardVariant.Outlined } };

export const DarkOutlined: Story = {
  args: { variant: CardVariant.Outlined },
  decorators: [themeDecorator(Themes.Dark)],
};

export const LightSelected: Story = { args: { variant: CardVariant.Selected } };

export const DarkSelected: Story = {
  args: { variant: CardVariant.Selected },
  decorators: [themeDecorator(Themes.Dark)],
};
