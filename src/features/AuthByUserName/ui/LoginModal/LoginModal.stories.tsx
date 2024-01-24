import type { Meta, StoryObj } from '@storybook/react';

import { Themes } from 'app/providers/theme';
import { delayCaptureDecorator } from 'shared/lib/storybook/delayCaptureDecorator';
import { storeDecorator } from 'shared/lib/storybook/storeDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { LoginModal } from './LoginModal';

const meta = {
  title: 'features/LoginModal',
  component: LoginModal,
  tags: ['autodocs'],
  args: {
    isOpen: true,
    onClose: () => {},
  },
  decorators: [delayCaptureDecorator(), storeDecorator({})],
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [themeDecorator(Themes.Light)],
};

export const Dark: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};
