import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GithubRibbon } from "../components/GithubRibbon";

export default {
  title: "Components / GithubRibbon",
  component: GithubRibbon,
} as ComponentMeta<typeof GithubRibbon>;

const Template: ComponentStory<typeof GithubRibbon> = (args) => (
  <GithubRibbon {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  url: "https://github.com/xurion/cv",
};
