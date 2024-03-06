import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { Base } from "./components/base";

const CreateClient = () => {
  const socket = io("http://localhost:8080", { autoConnect: false });

  useEffect(() => {
    socket.connect();

    return () => {
      console.log("cleanup");
      socket.disconnect();
    };
  }, []);
  return (
    <>
      <Base socket={socket} />
    </>
  );
};

function App() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",

        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <CreateClient />
      <CreateClient />
      <CreateClient />
    </Box>
  );
}

export default App;
