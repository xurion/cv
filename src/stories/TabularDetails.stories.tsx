import { ComponentStory, ComponentMeta } from "@storybook/react";

import TabularDetails, {
  TabularDetail,
  TabularDetailLink,
} from "../components/TabularDetails";

export default {
  component: TabularDetails,
} as ComponentMeta<typeof TabularDetails>;

const Template: ComponentStory<typeof TabularDetails> = (args) => (
  <TabularDetails {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <TabularDetail label="Key">Value</TabularDetail>
      <TabularDetail label="Key">Value</TabularDetail>
    </>
  ),
};

export const Links = Template.bind({});

Links.args = {
  children: (
    <>
      <TabularDetailLink label="Key" url="http://www.example.com">
        Link
      </TabularDetailLink>
      <TabularDetailLink label="Key" url="http://www.example.com">
        Link
      </TabularDetailLink>
    </>
  ),
};
