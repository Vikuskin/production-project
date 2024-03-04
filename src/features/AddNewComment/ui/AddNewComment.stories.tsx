import type { Meta, StoryObj } from '@storybook/react';

import { Themes } from 'app/providers/theme';
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
        text: 'Anim aute aliqua minim',
      },
    }),
  ],
} satisfies Meta<typeof AddNewComment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightNormal: Story = {};

export const DarkNormal: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};

export const LightError: Story = {
  decorators: [
    storeDecorator({
      newComment: { error: 'Something went wrong' },
    }),
  ],
};

export const DarkError: Story = {
  decorators: [
    themeDecorator(Themes.Dark),
    storeDecorator({
      newComment: { error: 'Something went wrong' },
    }),
  ],
};
