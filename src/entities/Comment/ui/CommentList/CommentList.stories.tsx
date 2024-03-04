import type { Meta, StoryObj } from '@storybook/react';

import { Themes } from 'app/providers/theme';
import { delayCaptureDecorator } from 'shared/lib/storybook/delayCaptureDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';
import { commentsMock } from 'shared/mocks/comments';

import { CommentList } from './CommentList';

const meta = {
  title: 'entities/CommentsList',
  component: CommentList,
  tags: ['autodocs'],
  args: {
    isLoading: false,
    comments: commentsMock,
  },
  decorators: [delayCaptureDecorator()],
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};

export const LightLoading: Story = {
  args: {
    isLoading: true,
    comments: commentsMock,
  },
};

export const DarkLoading: Story = {
  args: {
    isLoading: true,
    comments: commentsMock,
  },
  decorators: [themeDecorator(Themes.Dark)],
};
