import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { SelectCountry } from './SelectCountry';

import { Country } from '../model/types/country';

const meta = {
  title: 'entities/SelectCountry',
  component: SelectCountry,
  tags: ['autodocs'],
  args: {
    value: Country.USA,
    onChange: () => {},
  },
} satisfies Meta<typeof SelectCountry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};
