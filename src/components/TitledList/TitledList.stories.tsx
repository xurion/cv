import type { Meta, StoryObj } from '@storybook/react';

import { TitledList } from './TitledList';

const meta = {
  title: 'Components / TitledList',
  component: TitledList,
} satisfies Meta<typeof TitledList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    points: ['Foo', 'Bar', ['Baz', 'Qux']],
    title: 'Titled list:',
  },
};
