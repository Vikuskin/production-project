import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { BackButton } from './BackButton';

const meta = {
  title: 'shared/BackButton',
  component: BackButton,
  tags: ['autodocs'],
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [themeDecorator(Theme.Light)],
};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};
