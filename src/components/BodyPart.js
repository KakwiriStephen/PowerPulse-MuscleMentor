import { Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <div>
      <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
          borderTop: bodyPart === item ? "4px solid #ff2625" : "",
          backgroundColor: "#fff",
          borderBottomLeftRadius: "20px",
          width: "270px",
          height: "280px",
          cursor: "pointer",
          gap: "47px",
        }}
      >
        <img
          src={Icon}
          alt="dumbell"
          style={{ width: "40px", height: "40px" }}
        />
      </Stack>
    </div>
  );
};

export default BodyPart;
