import { Avatar, Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";

export const ContactsList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        alignItems: "center",
        p: 1,
        borderRadius: "8px",
        background: "#864313",
      }}
    >
      <Box>
        <Avatar variant="circular" />
      </Box>
      <Box sx={{ flex: 1, ml: 1 }}>
        <Typography fontSize={18}>madjav</Typography>
        <Typography fontSize={14}>madjav</Typography>
      </Box>
      <Box>
        <FontAwesomeIcon icon={faCaretDown} />
      </Box>
    </Box>
  );
};
