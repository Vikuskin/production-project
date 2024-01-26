import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Theme } from 'app/providers/theme';
import { delayCaptureDecorator } from 'shared/lib/storybook/delayCaptureDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    isOpen: true,
    children: <p>Occaecat pariatur ea veniam et ex do ipsum in commodo sunt esse.</p>,
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [themeDecorator(Theme.Light), delayCaptureDecorator()],
};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.Dark), delayCaptureDecorator()],
};
