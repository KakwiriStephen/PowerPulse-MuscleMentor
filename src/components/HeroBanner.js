import React from "react";
import { Box, Typography, Button } from "@mui/material";

import heroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600px" fontSize="26px" mt={-9}>
        Fitness Club
      </Typography>

      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "40px",
          },
        }}
        mb="0px"
        mt="30px"
      >
        Sweat , Smile <br /> And Repeat
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        CheckOut the most effective excercises
      </Typography>

      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>

      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "100px",
        }}
        mt={-1}
      >
        Exercise
      </Typography>
      <img src={heroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
