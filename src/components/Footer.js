import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="4px" pt="24px">
        <img src={Logo} alt="" />
        <Typography>kakwiri</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
