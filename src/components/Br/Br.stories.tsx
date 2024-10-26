import type { Meta, StoryObj } from '@storybook/react';

import { Br } from './Br';

const meta = {
  title: 'Components / Br',
  component: Br,
} satisfies Meta<typeof Br>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
