import { Box, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextFieldController } from "../textFieldController";
import { useLogin } from "../../services/login";
import { useEffect } from "react";

export interface LoginFormFields {
  readonly phoneNumber: string;
  readonly password: string;
}

export const Login = () => {
  const { control, handleSubmit } = useForm<LoginFormFields>();
  const { login, result } = useLogin();
  // const navigate = useNavigate();

  useEffect(() => {
    if (result.data) {
      console.log(result);
    }
  }, [result]);

  const onSubmitHandler = ((data) => {
    //     api logic
    login({ password: data.password, phoneNumber: data.phoneNumber });
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
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography variant="h3" sx={{ mb: 5 }}>
          Login
        </Typography>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            width: "350px",
          }}
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
          <Box
            component="button"
            sx={{
              p: 1,
              px: 2,
              background: "#011936",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            <Typography sx={{ color: "white" }}>Login</Typography>
          </Box>
        </form>
        <Typography sx={{ justifySelf: "start" }}>Forgot password</Typography>
      </Box>
    </Box>
  );
};
