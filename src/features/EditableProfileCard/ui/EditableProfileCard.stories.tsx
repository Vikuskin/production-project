import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';
import AvatarImg from 'shared/ui/Avatar/ui/storybook-avatar.jpeg';

import { EditableProfileCard } from './EditableProfileCard';

const profileForm = {
  age: '24',
  avatar: AvatarImg,
  city: 'City',
  country: Country.Canada,
  currency: Currency.EUR,
  firstName: 'First name',
  lastName: 'Last name',
  username: 'Username',
};
const meta = {
  title: 'entities/EditableProfileCard',
  component: EditableProfileCard,
  tags: ['autodocs'],
  decorators: [
    storeDecorator({
      profile: {
        form: profileForm,
      },
    }),
  ],
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};

export const LightReadonly: Story = {
  decorators: [storeDecorator({ profile: { readonly: true, form: profileForm } })],
};

export const DarkReadonly: Story = {
  decorators: [themeDecorator(Theme.Dark), storeDecorator({ profile: { readonly: true, form: profileForm } })],
};
