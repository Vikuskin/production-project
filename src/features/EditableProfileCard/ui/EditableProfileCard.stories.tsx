import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';
import { profileForm } from 'shared/mocks/profileForm';

import { EditableProfileCard } from './EditableProfileCard';

import { ValidateProfileError } from '../models/types/validateProfileError';

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

export const LightWithValidationError: Story = {
  decorators: [
    storeDecorator({
      profile: {
        validationErrors: [ValidateProfileError.IncorrectAge, ValidateProfileError.IncorrectCity],
        form: profileForm,
      },
    }),
  ],
};

export const DarkWithValidationError: Story = {
  decorators: [
    themeDecorator(Theme.Dark),
    storeDecorator({
      profile: {
        validationErrors: [ValidateProfileError.IncorrectAge, ValidateProfileError.IncorrectCity],
        form: profileForm,
      },
    }),
  ],
};
