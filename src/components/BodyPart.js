import { Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import Icon from "../assets/icons/gym.png";

import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

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
