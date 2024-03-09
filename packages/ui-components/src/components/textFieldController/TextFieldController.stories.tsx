import { Meta, StoryObj } from "@storybook/react";
import {
  TextFieldController,
  TextFieldControllerConfig,
} from "./TextFieldController";
import { useForm } from "react-hook-form";

const meta = {
  title: "Components/TextFieldController",
  component: TextFieldController,
} satisfies Meta<typeof TextFieldController>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    name: "password",
    textFieldProps: {},
    controllerProps: {},
  },
  render: (args: TextFieldControllerConfig) => {
    const { control } = useForm();
    return <TextFieldController {...args} controllerProps={{ control }} />;
  },
};
