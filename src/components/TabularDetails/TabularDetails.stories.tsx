import type { Meta, StoryObj } from '@storybook/react';

import {
  TabularDetail,
  TabularDetailLink,
  TabularDetails,
} from './TabularDetails';

const meta = {
  title: 'Components / Tabular Details',
  component: TabularDetails,
} satisfies Meta<typeof TabularDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <TabularDetails>
        <TabularDetail label="Key">Value</TabularDetail>
        <TabularDetail label="Key">Value</TabularDetail>
      </TabularDetails>
    ),
  },
};

export const Links: Story = {
  args: {
    children: (
      <TabularDetails>
        <TabularDetailLink label="Key" url="http://www.example.com">
          Link
        </TabularDetailLink>
        <TabularDetailLink label="Key" url="http://www.example.com">
          Link
        </TabularDetailLink>
      </TabularDetails>
    ),
  },
};
