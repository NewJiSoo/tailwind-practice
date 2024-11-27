import type { Meta, StoryObj } from "@storybook/react";
import { MyButton } from "./MyButton";

const meta = {
  title: "MyButton/Button",
  component: MyButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: ["more", "register", "cancel"],
      control: { type: "select" },
    },
    shape: {
      options: ["square", "primary", "full"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    weight: {
      options: ["normal", "medium", "semibold", "bold"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const More: Story = {
  args: {
    variant: "more",
    shape: "square",
    size: "small",
    weight: "bold",
    children: "more >",
  },
};

export const Register: Story = {
  args: {
    variant: "register",
    shape: "primary",
    size: "medium",
    weight: "bold",
    children: "등록하기",
  },
};

export const Cancel: Story = {
  args: {
    variant: "cancel",
    shape: "full",
    size: "medium",
    weight: "medium",
    children: "취소하기",
  },
};

export const CancelorNot: Story = {
  args: {
    variant: "register",
    shape: "full",
    size: "large",
    weight: "medium",
    children: "취소할까말까"
  }
};
