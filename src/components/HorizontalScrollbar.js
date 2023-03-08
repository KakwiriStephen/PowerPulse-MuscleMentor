import { Box } from "@mui/material";
import React from "react";
import BodyParts from "./BodyParts";

const HorizontalScrollbar = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyParts {item}/>
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
