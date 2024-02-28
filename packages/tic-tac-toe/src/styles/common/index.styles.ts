import { styled } from "@mui/material";
import { shouldForwardProp } from "./common.utils";

export const squareContainerSx = {
  height: 150,
  width: 150,
  background: "white",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // border: "1px solid blue",
  cursor: "pointer",
};

export interface BoardCellProps extends Record<string, unknown> {
  active: boolean;
  player: boolean;
}

export const BoardCell = styled("div", {
  shouldForwardProp: (prop) =>
    shouldForwardProp<BoardCellProps>(["active"], prop),
})<BoardCellProps>(({ active, player }) => ({
  ...squareContainerSx,
  ":hover": {
    // boxShadow: active
    //   ? `0 0 2px 4px ${player ? "#020887" : "#A40E4C"}`
    //   : "none",
    transition: "background 0.3s ease-out",
  },
}));

export const sxFlexCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const sxCenterOfScreen = {
  width: "100vw",
  height: "100vh",
  ...sxFlexCenter,
};
