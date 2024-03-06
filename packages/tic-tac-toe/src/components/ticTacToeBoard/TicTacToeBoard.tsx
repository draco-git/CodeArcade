import { Box, Button, Typography } from "@mui/material";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  BoardCell,
  squareContainerSx,
  sxCenterOfScreen,
  sxFlexCenter,
} from "../../styles/common/index.styles";
import { CircleSquare } from "../circleSquare";
import { XSquare } from "../xSquare";

export interface TicTacToeBoardConfig {
  winner: "A" | "B" | "Draw" | undefined;
  start: boolean;
  setWinner: Dispatch<SetStateAction<"A" | "B" | "Draw" | undefined>>;
  setStart: Dispatch<SetStateAction<boolean>>;
}
export const TicTacToeBoard = ({
  winner,
  setStart,
  setWinner,
  start,
}: TicTacToeBoardConfig) => {
  const initialBoardState = [...Array(9).fill(0)];
  const [boardState, setBoardState] = useState(initialBoardState);
  const [player, setPlayer] = useState<boolean>(true);
  const boardRef = useRef<HTMLDivElement | null>(null);

  const cleanBoardState = () => {
    setBoardState(initialBoardState);
    setStart(false);
  };

  const disableBoard = () => {
    if (boardRef.current) boardRef.current.style.pointerEvents = "none";
  };

  const checkWinner = () => {
    for (let j = 0; j < 9; j = j + 3) {
      const rowSum = boardState[j] + boardState[j + 1] + boardState[j + 2];
      if (Math.abs(rowSum) === 3) return rowSum < 0 ? "B" : "A";
    }

    for (let j = 0; j < 3; j = j + 1) {
      const columnSum = boardState[j] + boardState[j + 3] + boardState[j + 6];
      if (Math.abs(columnSum) === 3) return columnSum < 0 ? "B" : "A";
    }

    const diagonal1 = boardState[0] + boardState[4] + boardState[8];
    const diagonal2 = boardState[2] + boardState[4] + boardState[6];

    if (Math.abs(diagonal1) === 3) return diagonal1 < 0 ? "B" : "A";
    if (Math.abs(diagonal2) === 3) return diagonal2 < 0 ? "B" : "A";

    let count = 0;
    for (let i = 0; i < 9; i++) {
      if (Math.abs(boardState[i])) count++;
    }
    if (count === 9) return "Draw";
  };

  useEffect(() => {
    const ans = checkWinner();
    if (ans) {
      setWinner(ans);
      cleanBoardState();
    }
  }, [player]);
  return (
    <Box
      sx={{
        background: player ? "#020887" : "#A40E4C",
        height: "75%",
        width: "50%",
        ...sxFlexCenter,
        flexDirection: "column",
        borderRadius: "8px",
        gap: 2,
      }}
    >
      <Box sx={{ ...sxFlexCenter, mt: 0, gap: "100px" }}>
        <Box sx={{ border: player ? "2px solid white" : "none", p: 1 }}>
          <Typography
            sx={{ fontSize: "24px", color: player ? "white" : "black" }}
          >
            Player A
          </Typography>
        </Box>
        <Box sx={{ border: !player ? "2px solid white" : "none", p: 1 }}>
          <Typography
            sx={{ fontSize: "24px", color: !player ? "white" : "black" }}
          >
            Player B
          </Typography>
        </Box>
      </Box>
      <Box
        ref={boardRef}
        sx={{
          height: 450,
          width: 450,
          background: player ? "#020887" : "#A40E4C",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr",
          position: "relative",
          gap: "3px",
        }}
      >
        {boardState.map((cellValue, index) => (
          <BoardCell
            active={start && !cellValue}
            player={!cellValue && player}
            onClick={() => {
              if (!cellValue) {
                setBoardState((prev) => {
                  prev[index] = player ? 1 : -1;
                  return prev;
                });
                setPlayer(!player);
              }
            }}
          >
            {cellValue != 0 ? (
              cellValue === 1 ? (
                <CircleSquare />
              ) : (
                <XSquare />
              )
            ) : (
              <></>
            )}
          </BoardCell>
        ))}
      </Box>
    </Box>
  );
};
