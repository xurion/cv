import { ComponentStory, ComponentMeta } from "@storybook/react";

import Experience from "../components/Experience";
import companyLogo from "./assets/shinra.jpeg";

export default {
  title: "Components / Experience",
  component: Experience,
} as ComponentMeta<typeof Experience>;

const Template: ComponentStory<typeof Experience> = (args) => (
  <Experience {...args} />
);

export const Default = Template.bind({});

Default.args = {
  experience: {
    about: [
      "First class SOLDIER. I lost contact with everyone from Nibelheim during this period. I was among those ordered to protect Professor Rayleigh in Midgar from the insurgency organization AVALANCHE (before joining them post Shinra). Though unsuccessful, our lives were saved by a Turk. During the incident I demonstrated impressive sword skills.",
    ],
    companyLogo: companyLogo,
    companyName: "Shinra Electric Power Company",
    jobTitle: "SOLDIER, First Class",
    startDate: "January 0001",
    endDate: "October 0007",
    aboutReadMore: [
      "My tenure as a SOLDIER ended when I defeated Sephiroth at Mt. Nibel after he had a psychotic break.",
    ],
    formerCompanyName: "Shinra Manufacturing Works",
    otherTitles: ["SOLDIER Infantryman"],
  },
};
