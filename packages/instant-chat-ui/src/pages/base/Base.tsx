import { Box, Grid } from "@mui/material";

export const Base = () => {
  return (
    <>
      <Grid container columnGap={2}>
        <Grid item md={3} sx={{ background: "#864313" }}>
          Left side
        </Grid>
        <Grid item md={7}>
          Right side
        </Grid>
      </Grid>
    </>
  );
};
