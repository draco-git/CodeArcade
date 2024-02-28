import { Box } from "@mui/material";
import { squareContainerSx } from "../../styles/common/index.styles";

export const XSquare = () => {
  return (
    <>
      {/*<Box sx={squareContainerSx}>*/}
      <Box sx={{ position: "relative", transform: "rotate(45deg)" }}>
        <Box
          sx={{
            height: 100,
            background: "#141301",
            width: 10,
            borderRadius: "10px",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></Box>
        <Box
          sx={{
            height: 10,
            background: "#141301",
            width: 100,
            borderRadius: "10px",
          }}
        ></Box>
      </Box>
      {/*</Box>*/}
    </>
  );
};
