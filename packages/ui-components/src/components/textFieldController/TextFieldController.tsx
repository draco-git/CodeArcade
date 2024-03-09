import { TextField, TextFieldProps } from "@mui/material";
import {
  Controller,
  ControllerProps,
  FieldValues,
  Path,
} from "react-hook-form";

export interface TextFieldControllerConfig<
  Inputs extends FieldValues = FieldValues
> {
  readonly name: Path<Inputs>;
  readonly textFieldProps: TextFieldProps;
  readonly controllerProps: Omit<ControllerProps<Inputs>, "render" | "name">;
}

export const TextFieldController = <Inputs extends FieldValues = FieldValues>({
  name,
  textFieldProps,
  controllerProps,
}: TextFieldControllerConfig<Inputs>) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...textFieldProps}
            {...field}
            helperText={textFieldProps.helperText || error?.message}
          />
        )}
        {...controllerProps}
      />
    </>
  );
};
