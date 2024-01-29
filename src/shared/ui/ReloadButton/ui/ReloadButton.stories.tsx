import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { ReloadButton } from './ReloadButton';

const meta = {
  title: 'shared/ReloadButton',
  component: ReloadButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ReloadButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};
