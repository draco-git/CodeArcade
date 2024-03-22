import { Grid } from "@mui/material";
import { ContactsList } from "../../components/contactsList";

export const Base = () => {
  return (
    <>
      <Grid container columnGap={2}>
        <Grid item md={3}>
          <ContactsList />
        </Grid>
        <Grid item md={7}>
          Right side
        </Grid>
      </Grid>
    </>
  );
};
