import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons/faEllipsisVertical";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons/faFaceSmile";
import { SendRounded } from "@mui/icons-material";

export interface MessagePanelConfig {
  readonly name: string;
}
export const MessagePanel = ({ name }: MessagePanelConfig) => {
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "whitesmoke",
        // position: "relative",
        display: "flex",
        flexDirection: "column",
        overFlow: "auto",
      }}
    >
      <AppBar position="sticky" color="default">
        <Toolbar>
          {/*<IconButton color="inherit" aria-label="open drawer">*/}
          {/*  <MenuIcon />*/}
          {/*</IconButton>*/}
          <IconButton>
            <Avatar />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }}>Abc</Typography>
          <IconButton>
            <FontAwesomeIcon icon={faSearch} />
          </IconButton>
          <IconButton>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          flex: 1,
          backgroundColor: "#c8e1ff",
          overflow: "scroll",
        }}
      >
        {[...Array(1)].map(() => (
          <Typography>content</Typography>
        ))}
      </Box>
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          top: "auto",
          backgroundColor: "whitesmoke",
          display: "flex",
          alignItems: "center",
          p: 1,
        }}
      >
        <IconButton>
          <FontAwesomeIcon icon={faFaceSmile} />
        </IconButton>
        <TextField
          variant="outlined"
          maxRows={3}
          multiline
          InputProps={{
            sx: {
              background: "rgba(155,149,149,0.9)",
              color: "white",
              minHeight: "40px",
              py: "10px",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
            flexGrow: 1,
          }}
        />
        <IconButton>
          <SendRounded />
        </IconButton>
      </Box>
    </Box>
  );
};
