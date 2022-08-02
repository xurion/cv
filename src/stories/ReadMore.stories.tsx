import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ReadMore } from "../components/ReadMore";

export default {
  title: "Components / ReadMore",
  component: ReadMore,
} as ComponentMeta<typeof ReadMore>;

const Template: ComponentStory<typeof ReadMore> = (args) => (
  <ReadMore {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: "Read more",
};
