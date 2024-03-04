import type { Meta, StoryObj } from '@storybook/react';

import { Themes } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { Text } from './Text';

import { TextSizes } from '../enums/textSizes';
import { TextVariants } from '../enums/textVariants';

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
  decorators: [themeDecorator(Themes.Dark)],
};

export const NormalLightWithTitle: Story = {
  args: { title: 'Title' },
};

export const NormalDarkWithTitle: Story = {
  args: { title: 'Title' },
  decorators: [themeDecorator(Themes.Dark)],
};

export const ErrorLightOnlyText: Story = {
  args: { variant: TextVariants.Error },
};

export const ErrorDarkOnlyText: Story = {
  args: { variant: TextVariants.Error },
  decorators: [themeDecorator(Themes.Dark)],
};

export const ErrorLightWithTitle: Story = {
  args: { title: 'Title', variant: TextVariants.Error },
};

export const ErrorDarkWithTitle: Story = {
  args: { title: 'Title', variant: TextVariants.Error },
  decorators: [themeDecorator(Themes.Dark)],
};

export const SizeSLight: Story = {
  args: { title: 'Title', size: TextSizes.SizeS },
};

export const SizeMLight: Story = {
  args: { title: 'Title', size: TextSizes.SizeM },
};

export const SizeLLight: Story = {
  args: { title: 'Title', size: TextSizes.SizeL },
};
