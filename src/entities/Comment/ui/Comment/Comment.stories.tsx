import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { delayCaptureDecorator } from 'shared/lib/storybook/delayCaptureDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';
import { commentsMock } from 'shared/mocks/comments';

import { Comment } from './Comment';

const meta = {
  title: 'entities/Comment',
  component: Comment,
  tags: ['autodocs'],
  args: {
    isLoading: false,
    comment: commentsMock[0],
  },
  decorators: [delayCaptureDecorator()],
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};

export const LightLoading: Story = { args: { isLoading: true, comment: commentsMock[0] } };

export const DarkLoading: Story = {
  args: { isLoading: true, comment: commentsMock[0] },
  decorators: [themeDecorator(Theme.Dark)],
};