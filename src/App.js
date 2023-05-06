import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./components/css/App.css";
import "./components/css/StyleSheet.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

export default function App() {
  return (
    <Box className="container" width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}
