import type { Meta, StoryObj } from '@storybook/react';

import { Themes } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { LangSwitcher } from './LangSwitcher';

const meta = {
  title: 'shared/LangSwitcher',
  component: LangSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [themeDecorator(Themes.Light)],
};

export const Dark: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};
