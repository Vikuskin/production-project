import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Themes } from 'shared/enums/themes';
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
  decorators: [delayCaptureDecorator()],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Themes.Dark)],
};
