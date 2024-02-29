import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Theme } from 'app/providers/theme';
import { Country } from 'entities/Profile';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { ListBox } from './ListBox';

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
  tags: ['autodocs'],
  args: {
    label: 'Country',
    value: Country.USA,
    onChange: () => {},
    enumOptions: Country,
  },
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};
