import React from "react";
import * as Mui from "@mui/material";

import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

export default function SimilarExercises({ targetMuscleExercises, equipmentExercises }) {
  return (
    <Mui.Box>
      <Mui.Box className="pb-5">
        <h4 className="exercise-extra-title pb-2">
          Similar <span>Target Muscle</span> exercises
        </h4>
        <Mui.Stack>
          {targetMuscleExercises.length !== 0 ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
        </Mui.Stack>
      </Mui.Box>
      <Mui.Box className="pb-5">
        <h4 className="exercise-extra-title pb-2">
          Similar <span>Equipment</span> exercises
        </h4>
        <Mui.Stack>
          {equipmentExercises.length !== 0 ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader />}
        </Mui.Stack>
      </Mui.Box>
    </Mui.Box>
  );
}
