import React, { useContext } from "react";
import * as Mui from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import ExerciseCard from "./ExerciseCard";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Mui.Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Mui.Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Mui.Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Mui.Typography>
  );
};

export default function HorizontalScrollBar({ data, bodyPart, setBodyPart, isBodyParts }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} className="horizontal-scroll-bar">
      {data.map((item) => (
        <Mui.Box key={item.id || item} itemId={item.id || item} title={item.id || item}>
          {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> : <ExerciseCard exercise={item} />}
        </Mui.Box>
      ))}
    </ScrollMenu>
  );
}
