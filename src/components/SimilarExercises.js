import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExcercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5} textAlign="center">
        Exercises That Target Similar Muscle Group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExcercises.length ? (
          <HorizontalScrollbar data={targetMuscleExcercises} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography variant="h3" mb={5} textAlign="center">
        Exercises That Use Similar Equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
