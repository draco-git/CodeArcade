import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export interface BaseConfig {
  socket: ReturnType<typeof io>;
}

export const Base = ({ socket }: BaseConfig) => {
  const [textValue, setTextValue] = useState("");
  const [messages, setMessages] = useState<Array<string>>([]);

  useEffect(() => {
    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [socket]);

  const Msg = (message: string) => (
    <Box sx={{ p: 2, background: "white" }}>
      <Typography>{message}</Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        width: "400px",
        height: "500px",
        flexDirection: "column",
        gap: 0.5,
        p: 1,
        border: "1px solid black",
      }}
    >
      <Box sx={{ background: "#f3e5e5", flex: 1, overflow: "auto", p: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {messages.length > 0 && messages.map((msg: string) => Msg(msg))}
        </Box>
      </Box>
      <Box
        component="form"
        sx={{ display: "flex", alignItems: "center", gap: 2 }}
      >
        <TextField
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
            console.log(socket.id);
          }}
          placeholder="Message"
          sx={{ flex: 1 }}
        />

        <IconButton
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            socket.emit("sendMessage", textValue);
            setTextValue("");
          }}
        >
          <FontAwesomeIcon icon={faPaperPlane} size="lg" />
        </IconButton>
      </Box>
    </Box>
  );
};
