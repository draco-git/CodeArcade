import { Box } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { routes } from "../../routes";

export const BackgroundPaper = () => {
  const content = useRoutes(routes);
  return (
    <Box
      sx={{
        height: "90%",
        width: "90%",
        background: "#011936", //secondary color
        borderRadius: "8px",
        p: 3,
      }}
    >
      {content}
    </Box>
  );
};

//App -> Background........
