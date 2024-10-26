import type { Meta, StoryObj } from '@storybook/react';

import { Portrait } from './Portrait';
import { cloudStrife } from './assets';

const meta = {
  title: 'Components / Portrait',
  component: Portrait,
} satisfies Meta<typeof Portrait>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: 'Cloud Strife',
    src: cloudStrife,
  },
};
