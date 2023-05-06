import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import * as Mui from "@mui/material";

import { exerciseOptions, fetchData } from "../utility/fetchData";
import ExerciseCard from "./ExerciseCard";

export default function Exercises({ exercises, setExercises, bodyPart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 10;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1550, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart, setExercises]);

  return (
    <Mui.Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <h3 className="pb-3">Showing Results</h3>
      <Mui.Stack className="exercise-card_wrapper" direction="row" flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Mui.Stack>
      <Mui.Stack className="pagination">{exercises.length > 2 && <Pagination defaultPage={1} count={Math.ceil(exercises.length / exercisesPerPage)} page={currentPage} onChange={paginate} shape="rounded" />}</Mui.Stack>
    </Mui.Box>
  );
}
