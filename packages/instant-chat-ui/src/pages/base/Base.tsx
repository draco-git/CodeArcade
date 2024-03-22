import { Box, Grid } from "@mui/material";
import { ContactsPanel } from "../../components/contactsPanel/ContactsPanel";
import { MessagePanel } from "../../components/messagePanel/MessagePanel";

export const Base = () => {
  return (
    <Grid container columnSpacing={{ md: 1 }} height="100%">
      <Grid item md={3} sx={{ position: "relative", height: "100%" }}>
        <ContactsPanel />
      </Grid>
      <Grid
        item
        md={9}
        sx={{ position: "relative", height: "100%", width: "100%", flex: 1 }}
      >
        <MessagePanel name="abc" />
      </Grid>
    </Grid>
  );
};
