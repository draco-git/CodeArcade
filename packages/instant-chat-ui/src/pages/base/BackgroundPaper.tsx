import { Box } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { routes } from "../../routes";

export const BackgroundPaper = () => {
  const content = useRoutes(routes);
  return (
    <Box
      sx={{
        height: "75%",
        width: "75%",
        background: "#011936",
        borderRadius: "8px",
        p: 3,
      }}
    >
      {content}
    </Box>
  );
};
