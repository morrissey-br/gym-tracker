import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "./Text";

export default {} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args}></Text>;

export const Default = Template.bind({});
Default.args = {
  children: "Hello World!",
};

export const Display = Template.bind({});
Display.args = {
  ...Default.args,
  style: "display",
  tag: "h1",
};

export const Subdisplay = Template.bind({});
Subdisplay.args = {
  ...Default.args,
  style: "subdisplay",
  tag: "h2",
};

export const Title = Template.bind({});
Title.args = {
  ...Default.args,
  style: "title",
  tag: "h1",
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  ...Default.args,
  style: "subtitle",
  tag: "h2",
};

export const Caption = Template.bind({});
Caption.args = {
  ...Default.args,
  style: "caption",
  tag: "span",
};
