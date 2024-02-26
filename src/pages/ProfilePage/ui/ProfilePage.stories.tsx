import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/theme';
import { delayCaptureDecorator } from 'shared/lib/storybook/delayCaptureDecorator';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';
import { profileForm } from 'shared/mocks/profileForm';

import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  decorators: [
    storeDecorator({
      profile: { form: profileForm },
      user: {
        authData: { id: profileForm.id },
      },
    }),
    delayCaptureDecorator(),
  ],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};

export const LightLoading: Story = {
  decorators: [storeDecorator({ profile: { isLoading: true } })],
};

export const DarkLoading: Story = {
  decorators: [themeDecorator(Theme.Dark), storeDecorator({ profile: { isLoading: true } })],
};
