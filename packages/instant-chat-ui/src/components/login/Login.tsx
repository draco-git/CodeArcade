import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextFieldController } from "../textFieldController";
import { useLogin } from "../../services/login";
import { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export interface LoginFormFields {
  readonly phoneNumber: string;
  readonly password: string;
}

export const Login = () => {
  const { control, handleSubmit } = useForm<LoginFormFields>();
  const {
    login,
    result: { data },
  } = useLogin();
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.response) {
      setError(false);
      navigate("/dashboard");
    } else if (data?.response === false) {
      setError(true);
    }
  }, [data]);

  const onSubmitHandler = ((data) => {
    //     api logic
    login({ password: data.password, phoneNumber: data.phoneNumber });
  }) satisfies SubmitHandler<LoginFormFields>;
  return (
    <Box className="flex-center" sx={{ width: "100%", height: "100%" }}>
      <Box
        sx={{
          width: "450px",
          height: "400px",
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
            textFieldProps={{
              variant: "outlined",
              type: showPassword ? "text" : "password",
              label: "Password",
              error,
              helperText: error ? "Enter correct credentials" : "",
              InputProps: {
                // <-- This is where the toggle button is added.
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            controllerProps={{ control }}
          />

          <Button
            variant="contained"
            sx={{ background: "#011936", textTransform: "none" }}
            type="submit"
          >
            <Typography sx={{ color: "white" }}>Login</Typography>
          </Button>
        </form>
        <Typography sx={{ justifySelf: "start" }}>Forgot password</Typography>
      </Box>
    </Box>
  );
};
