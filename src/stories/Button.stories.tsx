import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/Button';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    children: {
      control: "text",
      description: "Button content."
    },
    variant: {
      control: "select",
      description: "Button variants.",
      options: ["solid", "outline", "ghost"]
    }
  },
  args: {
    children: "Button",
    variant: "solid"
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const _Button: Story = {};