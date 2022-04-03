import { ComponentStory, ComponentMeta } from "@storybook/react";

import Portrait from "../components/Portrait";
import cloudStrife from "./assets/cloud-strife.jpg";

export default {
  component: Portrait,
} as ComponentMeta<typeof Portrait>;

const Template: ComponentStory<typeof Portrait> = (args) => (
  <Portrait {...args} />
);

export const Default = Template.bind({});

Default.args = {
  name: "Cloud Strife",
  src: cloudStrife,
};
