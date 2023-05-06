import React from "react";
import * as Mui from "@mui/material";

import HeroBannerImg from "../assets/images/banner.png";

export default function HeroBanner() {
  return (
    <Mui.Box className="hero-banner flow">
      <div>
        <Mui.Typography className="hero-banner--text">Fitness Club</Mui.Typography>
        <h1>
          Sweat, Smile <br /> and Repeat.
        </h1>
        <p className="ch-small">
          Check out our most effective exercises! We offer a wide range of workouts suitable for all fitness levels,
          including high-intensity interval training, strength training, and yoga. Our exercises are designed to target
          different muscle groups and help you achieve your fitness goals. Join us on our website to start your fitness
          journey today!
        </p>
        <button>Explore Exercises</button>
      </div>
      <div>
        <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
      </div>
      <Mui.Typography className="hero-banner--bg_text">Exercises</Mui.Typography>
    </Mui.Box>
  );
}
