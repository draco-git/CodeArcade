import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export interface BaseConfig {
  socket: ReturnType<typeof io>;
}

export const Base = ({ socket }: BaseConfig) => {
  const [textValue, setTextValue] = useState("");
  const [messages, setMessages] = useState<
    Array<{ msg: string; socketId: string }>
  >([]);
  const msgBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.on("receiveMessage", (obj) => {
      setMessages((prev) => [...prev, obj]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [socket]);

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
      <Box
        ref={msgBoxRef}
        sx={{ background: "#d3d9e3", flex: 1, overflow: "auto", p: 2 }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {messages.length > 0 &&
            messages.map(({ msg, socketId }) => {
              console.log(socketId, socket.id);
              return (
                <Box
                  sx={{
                    p: 1,
                    background: socket.id !== socketId ? "white" : "#a3eca3",
                    borderRadius: "5%",
                    alignSelf: socket.id !== socketId ? "start" : "end",
                    width: "fit-content",
                  }}
                >
                  <Typography sx={{ wordBreak: "break-all" }}>{msg}</Typography>
                </Box>
              );
            })}
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
            if (msgBoxRef.current) {
              msgBoxRef.current.scrollTop = msgBoxRef.current.scrollHeight;
            }
          }}
        >
          <FontAwesomeIcon icon={faPaperPlane} size="lg" />
        </IconButton>
      </Box>
    </Box>
  );
};
