import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Theme } from 'app/providers/theme';
import { routerDecorator } from 'shared/lib/storybook/routerDecorator';
import { themeDecorator } from 'shared/lib/storybook/themeDecorator';

import { NavbarLink } from './NavbarLink';

import { navbarLinks } from '../../models/navbarLinks';

const meta = {
  title: 'widgets/NavbarLink',
  component: NavbarLink,
  tags: ['autodocs'],
  args: {
    link: navbarLinks[0],
  },
  decorators: [routerDecorator],
} satisfies Meta<typeof NavbarLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightWithLogin: Story = {
  decorators: [themeDecorator(Theme.Light)],
};

export const DarkWithLogin: Story = {
  decorators: [themeDecorator(Theme.Dark)],
};
