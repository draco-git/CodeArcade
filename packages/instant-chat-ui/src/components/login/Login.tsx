import { Box, Button, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextFieldController } from "../textFieldController";

export interface LoginFormFields {
  readonly phoneNumber: string;
  readonly password: string;
}

export const Login = () => {
  const { control, handleSubmit } = useForm<LoginFormFields>();
  const onSubmitHandler = ((data) => {
    //     api logic
  }) satisfies SubmitHandler<LoginFormFields>;
  return (
    <Box className="flex-center" sx={{ width: "100%", height: "100%" }}>
      <Box
        sx={{
          width: "500px",
          height: "500px",
          background: "#E1E5EE",
          borderRadius: "8px",
          textAlign: "center",
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "initial",
          gap: 2,
        }}
      >
        <Typography variant="h3">Login</Typography>
        <form
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <TextFieldController
            name="phoneNumber"
            textFieldProps={{ label: "Enter Phone number" }}
            controllerProps={{ control }}
          />
          <TextFieldController
            name="password"
            textFieldProps={{ label: "Enter password", type: "password" }}
            controllerProps={{ control }}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Box>
    </Box>
  );
};
