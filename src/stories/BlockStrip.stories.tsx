import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BlockStrip } from "../components/BlockStrip";

export default {
  title: "Components / BlockStrip",
  component: BlockStrip,
} as ComponentMeta<typeof BlockStrip>;

const Template: ComponentStory<typeof BlockStrip> = () => <BlockStrip />;

export const Default = Template.bind({});
