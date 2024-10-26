import type { Meta, StoryObj } from '@storybook/react';

import { BlockStrip } from './BlockStrip';

const meta = {
  title: 'Components / Block Strip',
  component: BlockStrip,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BlockStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
