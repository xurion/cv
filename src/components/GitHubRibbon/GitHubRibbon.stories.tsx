import type { Meta, StoryObj } from '@storybook/react';

import { GitHubRibbon } from './GitHubRibbon';

const meta = {
  title: 'Components / GitHub Ribbon',
  component: GitHubRibbon,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof GitHubRibbon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: 'https://example.com',
  },
};
