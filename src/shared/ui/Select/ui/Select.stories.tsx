import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { Country } from 'entities/Country';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { Select } from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    label: 'Test option',
    enumOptions: Country,
    value: 'Test',
    onChange: action('onChange'),
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};
