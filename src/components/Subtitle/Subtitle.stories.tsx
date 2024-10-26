import type { Meta, StoryObj } from '@storybook/react';

import { Subtitle } from './Subtitle';

const meta = {
  title: 'Components / Subtitle',
  component: Subtitle,
} satisfies Meta<typeof Subtitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Subtitle',
  },
};
