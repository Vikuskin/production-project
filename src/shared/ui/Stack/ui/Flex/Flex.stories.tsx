import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Flex } from './Flex';

const divChildren = (
  <>
    <div>Flex 1</div>
    <div>Flex 2</div>
    <div>Flex 3</div>
  </>
);
const meta = {
  title: 'shared/Flex',
  component: Flex,
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RowBetween: Story = {
  args: {
    children: divChildren,
  },
};

export const RowStart: Story = {
  args: {
    children: divChildren,
    justify: 'start',
  },
};

export const RowEnd: Story = {
  args: {
    children: divChildren,
    justify: 'end',
  },
};

export const RowCenter: Story = {
  args: {
    children: divChildren,
    justify: 'center',
  },
};

export const RowCenterGap15: Story = {
  args: {
    children: divChildren,
    justify: 'center',
    gap: 15,
  },
};

export const RowCenterGap20: Story = {
  args: {
    children: divChildren,
    justify: 'center',
    gap: 20,
  },
};

export const ColumnStart: Story = {
  args: {
    children: divChildren,
    direction: 'column',
    align: 'start',
  },
};

export const ColumnCenter: Story = {
  args: {
    children: divChildren,
    direction: 'column',
    align: 'center',
  },
};

export const ColumnEnd: Story = {
  args: {
    children: divChildren,
    direction: 'column',
    align: 'end',
  },
};
