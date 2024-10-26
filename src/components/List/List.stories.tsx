import type { Meta, StoryObj } from '@storybook/react';

import { List } from './List';

const meta = {
  title: 'Components / List',
  component: List,
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    points: ['Foo', 'Bar', ['Baz', 'Qux']],
  },
};
