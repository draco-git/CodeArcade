import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { Base } from "./components/base";
import { BackgroundPaper } from "./pages/base/BackgroundPaper";
import "./styles/common.scss";
import { Provider } from "react-redux";
import store from "./services/store";

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
    <Provider store={store}>
      <BrowserRouter>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <BackgroundPaper />
        </Box>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
