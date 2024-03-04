import type { Meta, StoryObj } from '@storybook/react';

import { Themes } from 'app/providers/theme';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';
import { profileForm } from 'shared/mocks/profileForm';

import { EditableProfileCard } from './EditableProfileCard';

import { ValidateProfileError } from '../../models/enums/validateProfileError';

const meta = {
  title: 'entities/EditableProfileCard',
  component: EditableProfileCard,
  tags: ['autodocs'],
  args: {
    profileForm,
  },
  decorators: [
    storeDecorator({
      profile: {
        form: profileForm,
      },
      user: {
        authData: { id: profileForm.id },
      },
    }),
  ],
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};

export const LightReadonly: Story = {
  decorators: [
    storeDecorator({
      profile: { readonly: true, form: profileForm },
      user: {
        authData: { id: 'readonly' },
      },
    }),
  ],
};

export const DarkReadonly: Story = {
  decorators: [
    themeDecorator(Themes.Dark),
    storeDecorator({
      profile: { readonly: true, form: profileForm },
      user: {
        authData: { id: 'readonly' },
      },
    }),
  ],
};

export const LightWithValidationError: Story = {
  decorators: [
    storeDecorator({
      profile: {
        validationErrors: [ValidateProfileError.IncorrectAge, ValidateProfileError.IncorrectCity],
        form: profileForm,
      },
      user: {
        authData: { id: profileForm.id },
      },
    }),
  ],
};

export const DarkWithValidationError: Story = {
  decorators: [
    themeDecorator(Themes.Dark),
    storeDecorator({
      profile: {
        validationErrors: [ValidateProfileError.IncorrectAge, ValidateProfileError.IncorrectCity],
        form: profileForm,
      },
      user: {
        authData: { id: profileForm.id },
      },
    }),
  ],
};
