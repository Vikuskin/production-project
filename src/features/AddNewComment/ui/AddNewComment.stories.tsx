import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import AddNewComment from './AddNewComment';

const meta = {
  title: 'features/AddNewComment',
  component: AddNewComment,
  tags: ['autodocs'],
  decorators: [
    storeDecorator({
      newComment: {
        text: 'Anim aute aliqua minim sint qui quis esse laborum deserunt nostrud cillum amet',
      },
    }),
  ],
} satisfies Meta<typeof AddNewComment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightNormal: Story = {};

export const DarkNormal: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};

export const LightError: Story = {
  decorators: [
    storeDecorator({
      newComment: { error: 'No data' },
    }),
  ],
};

export const DarkError: Story = {
  decorators: [
    themeDecorator(Theme.Dark),
    storeDecorator({
      newComment: { error: 'No data' },
    }),
  ],
};
