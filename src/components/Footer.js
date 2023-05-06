import React from "react";
import * as Mui from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

export default function Footer() {
  return (
    <Mui.Box className="footer pt-5 pb-1">
      <Mui.Stack className="footer-logo">
        <img src={Logo} alt="logo" />
      </Mui.Stack>
      <Mui.Typography>Made with ❤️ by Vishal</Mui.Typography>
    </Mui.Box>
  );
}
