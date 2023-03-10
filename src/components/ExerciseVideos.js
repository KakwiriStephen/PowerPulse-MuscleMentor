import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ name, exerciseVideos }) => {
  //   if (!exerciseVideos.length) return "Loading...";

  console.log(exerciseVideos);
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }}>
      <Typography textAlign="center" variant="h3" mb={"33px"}>
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalise" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        align="center"
        display="flex"
        flexWrap="wrap"
        flexBasis="auto"
        sx={{
          flexDirection: { lg: "row", md: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {exerciseVideos?.slice(0, 6)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ borderTopLeftRadius: "20px" }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography
                sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                fontWeight={600}
                color="#000"
                textAlign="center"
              >
                {item.video.title}
              </Typography>
              <Typography textAlign="center" variant="h5" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
////////////
