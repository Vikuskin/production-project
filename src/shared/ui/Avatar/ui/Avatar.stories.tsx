import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import AvatarImg from './storybook-avatar.jpeg';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: AvatarImg,
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSize: Story = {};

export const BigSize: Story = {
  args: {
    size: 200,
  },
};
