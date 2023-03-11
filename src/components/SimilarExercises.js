import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SimilarExercises = ({ targetMuscleExcercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3">
        Exercises That Target Similar Muscle Group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExcercises.length && (
          <HorizontalScrollbar data={targetMuscleExcercises} />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
