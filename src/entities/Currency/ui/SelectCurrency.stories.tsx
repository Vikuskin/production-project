import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { SelectCurrency } from './SelectCurrency';

import { Currency } from '../model/types/currency';

const meta = {
  title: 'entities/SelectCurrency',
  component: SelectCurrency,
  tags: ['autodocs'],
  args: {
    value: Currency.USD,
    onChange: () => {},
  },
} satisfies Meta<typeof SelectCurrency>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};
