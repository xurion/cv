import { ComponentStory, ComponentMeta } from "@storybook/react";

import List from "../components/List";

export default {
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});

Default.args = {
  points: ["Point 1", "Point 2"],
};

export const Nested = Template.bind({});

Nested.args = {
  points: ["Point 1", ["Point 1.1", "Point 1.2"], "Point 2"],
};
