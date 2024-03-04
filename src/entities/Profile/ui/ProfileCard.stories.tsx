import type { Meta, StoryObj } from '@storybook/react';

import { Themes } from 'shared/enums/themes';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { ProfileCard } from './ProfileCard';

import { Country } from '../model/enums/country';
import { Currency } from '../model/enums/currency';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  args: {
    onChangeAge: () => {},
    onChangeAvatar: () => {},
    onChangeCity: () => {},
    onChangeCountry: () => {},
    onChangeCurrency: () => {},
    onChangeFirstName: () => {},
    onChangeLastName: () => {},
    onChangeUsername: () => {},
    profileForm: {
      age: '24',
      avatar: 'https://test.ico',
      city: 'City',
      country: Country.Canada,
      currency: Currency.EUR,
      firstName: 'First name',
      lastName: 'Last name',
      username: 'Username',
    },
  },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};

export const LightReadonly: Story = { args: { readonly: true } };

export const DarkReadonly: Story = { args: { readonly: true }, decorators: [themeDecorator(Themes.Dark)] };
