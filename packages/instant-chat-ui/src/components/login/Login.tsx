import { Box, TextField, Typography } from "@mui/material";

export const Login = () => {
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
        <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <TextField fullWidth label="Phone number" />
          <TextField fullWidth label="Phone number" />
          <TextField fullWidth label="Phone number" />
        </form>
      </Box>
    </Box>
  );
};
