import { Box } from "@mui/material";
import { squareContainerSx } from "../../styles/common/index.styles";

export const CircleSquare = () => {
  return (
    <>
      {/*<Box sx={squareContainerSx}>*/}
      <Box
        sx={{
          height: 100,
          background: "#141301",
          width: 100,
          borderRadius: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: 80,
            background: "white",
            width: 80,
            borderRadius: "100%",
          }}
        ></Box>
      </Box>
      {/*</Box>*/}
    </>
  );
};
