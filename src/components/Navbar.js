import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

export default function Navbar() {
  return (
    <Stack sx={{ gap: { sm: "20rem", xs: "5rem" }, justifyContent: "none" }} className="header py-3">
      <Stack className="header-left">
        <Link to="/">
          <img className="header-logo" src={Logo} alt="logo" />
        </Link>
        <Stack className="nav-wrapper">
          <Link to="/">Home</Link>
          <a href="#exercises">Exercises</a>
        </Stack>
      </Stack>
      <Stack className="header-right"></Stack>
    </Stack>
  );
}
