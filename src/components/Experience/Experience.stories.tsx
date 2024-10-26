import type { Meta, StoryObj } from '@storybook/react';

import { Experience } from './Experience';
import { shinraLogo } from './assets';

const meta = {
  title: 'Components / Experience',
  component: Experience,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Experience>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    about: [
      'First class SOLDIER. I lost contact with everyone from Nibelheim during this period. I was among those ordered to protect Professor Rayleigh in Midgar from the insurgency organization AVALANCHE (before joining them post Shinra). Though unsuccessful, our lives were saved by a Turk. During the incident I demonstrated impressive sword skills.',
    ],
    companyLogo: shinraLogo,
    companyName: 'Shinra Electric Power Company',
    jobTitle: 'SOLDIER, First Class',
    startDate: 'January 0001',
    endDate: 'October 0007',
    aboutReadMore: [
      'My tenure as a SOLDIER ended when I defeated Sephiroth at Mt. Nibel after he had a psychotic break.',
    ],
    formerCompanyName: 'Shinra Manufacturing Works',
    otherTitles: ['SOLDIER Infantryman'],
  },
};
