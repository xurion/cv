import { ComponentStory, ComponentMeta } from "@storybook/react";

import TitledList from "../components/TitledList";

export default {
  title: "Components / TitledList",
  component: TitledList,
} as ComponentMeta<typeof TitledList>;

const Template: ComponentStory<typeof TitledList> = (args) => (
  <TitledList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  points: ["Point 1", "Point 2"],
  title: "Title",
};

export const Nested = Template.bind({});

Nested.args = {
  points: ["Point 1", ["point 1.1", "Point 1.2"], "Point 2"],
  title: "Title",
};
