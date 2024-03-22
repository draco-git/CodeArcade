import { ContactsList } from "../contactsList";
import { Box } from "@mui/material";

export const ContactsPanel = () => {
  return (
    <Box sx={{ height: "100%", overflow: "auto", background: "#fafafa" }}>
      <ContactsList />
    </Box>
  );
};
