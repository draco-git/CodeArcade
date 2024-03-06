import { faRefresh } from "@fortawesome/free-solid-svg-icons/faRefresh";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { TicTacToeBoard } from "./components/ticTacToeBoard";
import { sxCenterOfScreen, sxFlexCenter } from "./styles/common/index.styles";
import { createTheme, ThemeProvider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Luckiest Guy, cursive",
    },
  });
  const [winner, setWinner] = useState<"A" | "B" | "Draw">();
  const [start, setStart] = useState(false);

  const restartGame = () => {
    setWinner(undefined);
    setStart(true);
  };
  const showWinner = () => {
    if (winner) {
      return (
        <Box
          sx={{
            height: 400,
            width: "60%",
            textAlign: "center",
            background: "#4FB286",
            ...sxFlexCenter,
            flexDirection: "column",
            borderRadius: "8px",
            gap: 2,
          }}
        >
          {winner != "Draw" ? (
            <Typography variant="h3" color="white">
              Winner is
              <Typography
                component="span"
                variant="h1"
                sx={{ pl: 2 }}
              >{`${winner === "A" ? "Player A" : "Player B"}`}</Typography>
            </Typography>
          ) : (
            <Typography variant="h3" color="white">
              No Winner
            </Typography>
          )}

          <Button
            variant="text"
            onClick={restartGame}
            sx={{ color: "Black", fontSize: 24 }}
            endIcon={
              <FontAwesomeIcon
                icon={faRefresh}
                style={{ transform: "translateY(-4px)" }}
                size="lg"
              />
            }
          >
            Restart
          </Button>
        </Box>
      );
    }
    return (
      <Box
        sx={{
          ...sxFlexCenter,
          flexDirection: "column",
          width: "500px",
          border: "2px solid grey",
          ":hover": {
            background: "#364156",
            "& > *": {
              color: "white",
            },
          },
        }}
      >
        <Button
          variant="text"
          onClick={() => setStart(true)}
          sx={{ fontSize: 54, transform: "translateY(8px)", color: "#364156" }}
        >
          Start
        </Button>
      </Box>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ ...sxCenterOfScreen }}>
        {start ? (
          <TicTacToeBoard
            setStart={setStart}
            setWinner={setWinner}
            start={start}
            winner={winner}
          />
        ) : (
          showWinner()
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
