import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { Text } from './Text';

import { TextVariant } from '../types/TextVariant';

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    text: 'Sit ex excepteur velit incididunt duis eiusmod non sint.',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalLightOnlyText: Story = {};

export const NormalDarkOnlyText: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};

export const NormalLightWithTitle: Story = {
  args: { title: 'Title' },
};

export const NormalDarkWithTitle: Story = {
  args: { title: 'Title' },
  decorators: [themeDecorator(Theme.Dark)],
};

export const ErrorLightOnlyText: Story = {
  args: { variant: TextVariant.Error },
};

export const ErrorDarkOnlyText: Story = {
  args: { variant: TextVariant.Error },
  decorators: [themeDecorator(Theme.Dark)],
};

export const ErrorLightWithTitle: Story = {
  args: { title: 'Title', variant: TextVariant.Error },
};

export const ErrorDarkWithTitle: Story = {
  args: { title: 'Title', variant: TextVariant.Error },
  decorators: [themeDecorator(Theme.Dark)],
};
