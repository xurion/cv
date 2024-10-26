import type { Meta, StoryObj } from '@storybook/react';

import { ReadMore } from './ReadMore';

const meta = {
  title: 'Components / Read More',
  component: ReadMore,
} satisfies Meta<typeof ReadMore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Extra content',
  },
};
