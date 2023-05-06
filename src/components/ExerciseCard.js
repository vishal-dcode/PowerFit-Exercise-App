import React from "react";
import { Link } from "react-router-dom";
import * as Mui from "@mui/material";

export default function ExerciseCard({ exercise }) {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <div className="exercise-card-details">
        <Mui.Stack className="exercise-tag-wrapper">
          <button className="exercise-tag">{exercise.bodyPart}</button>
          <button className="exercise-tag">{exercise.target}</button>
        </Mui.Stack>
        <p className="exercise-name">{exercise.name}</p>
      </div>
    </Link>
  );
}
