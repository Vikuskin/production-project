import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { Themes } from '@/shared/enums/themes';
import { themeDecorator } from '@/shared/lib/storybook/themeDecorator';

import { Tabs } from './Tabs';

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    onTabClick: action('onTabClick'),
    tabs: [
      { value: '1', content: 'Tab 1' },
      { value: '2', content: 'Tab 2' },
      { value: '3', content: 'Tab 3' },
    ],
    value: '1',
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};
