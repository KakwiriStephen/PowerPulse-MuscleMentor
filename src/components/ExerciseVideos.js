import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ name, excerciseVideos }) => {
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }}>
      <Typography variant="h3" mb={"33px"}>
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalise" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
    </Box>
  );
};

export default ExerciseVideos;
