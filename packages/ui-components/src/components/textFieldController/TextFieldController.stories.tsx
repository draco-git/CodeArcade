import { Meta, StoryObj } from "@storybook/react";
import { TextFieldController } from "./TextFieldController";

const meta = {
  title: "Components/TextFieldController",
  component: TextFieldController,
} satisfies Meta<typeof TextFieldController>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { name: "password", controllerProps: {}, textFieldProps: {} },
};
