import type { Meta, StoryObj } from '@storybook/react';

import { Themes } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { Text, TextVariants } from './Text';

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

export const NormalLightOnlyText: Story = {
  decorators: [themeDecorator(Themes.Light)],
};

export const NormalDarkOnlyText: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};

export const NormalLightWithTitle: Story = {
  args: { title: 'Title' },
  decorators: [themeDecorator(Themes.Light)],
};

export const NormalDarkWithTitle: Story = {
  args: { title: 'Title' },
  decorators: [themeDecorator(Themes.Dark)],
};

export const ErrorLightOnlyText: Story = {
  args: { variant: TextVariants.Error },
  decorators: [themeDecorator(Themes.Light)],
};

export const ErrorDarkOnlyText: Story = {
  args: { variant: TextVariants.Error },
  decorators: [themeDecorator(Themes.Dark)],
};

export const ErrorLightWithTitle: Story = {
  args: { title: 'Title', variant: TextVariants.Error },
  decorators: [themeDecorator(Themes.Light)],
};

export const ErrorDarkWithTitle: Story = {
  args: { title: 'Title', variant: TextVariants.Error },
  decorators: [themeDecorator(Themes.Dark)],
};
