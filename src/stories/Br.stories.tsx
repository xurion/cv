import { ComponentStory, ComponentMeta } from "@storybook/react";

import Br from "../components/Br";

export default {
  component: Br,
} as ComponentMeta<typeof Br>;

const Template: ComponentStory<typeof Br> = () => <Br />;

export const Default = Template.bind({});
