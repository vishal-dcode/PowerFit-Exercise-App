import React, { useState, useEffect } from "react";
import * as Mui from "@mui/material";

import { exerciseOptions, fetchData } from "../utility/fetchData";

import HorizontalScrollBar from "./HorizontalScrollBar";

export default function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    async function fetchExercisesData() {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    }
    fetchExercisesData();
  }, []);

  async function handleSearch() {
    if (search) {
      const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  }

  return (
    <Mui.Stack display="flex" alignItem="center" textAlign="center" justifyContent="center" mt="6.5rem" p="20px">
      <h2>
        Amazing Workout Techniques <br /> That You Need to Try
      </h2>
      <Mui.Box className="search-exercises" position="relative" mt="3rem" mb="4rem">
        <Mui.TextField
          className="search-text_field"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises..."
          sx={{
            width: "80%",
            input: { fontWeight: "700", border: "none", borderRadius: "8px" },
          }}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </Mui.Box>
      <Mui.Box>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyParts={setBodyPart} isBodyParts />
      </Mui.Box>
    </Mui.Stack>
  );
}
