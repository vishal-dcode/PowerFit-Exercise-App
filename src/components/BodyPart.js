import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";

export default function BodyPart({ item, bodyPart, setBodyPart }) {
  const handleClick = () => {
    setBodyPart(item);
    window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
  };

  return (
    <Stack
      component="button"
      sx={{
        border: bodyPart === item && "1px solid hsl(359, 59%, 50%)",
      }}
      onClick={handleClick}
      className="horizontal-scroll-bar_icons bodyPart-card"
    >
      <img height="48" width="48" src={Icon} alt="dumbbell" />
      <Typography className="bodyPart-card_text">{item}</Typography>
    </Stack>
  );
}
