import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import waterBackground from "../components/waterBackground";

const WateringPage = () => {
  const navigate = useNavigate();

  const moveToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="">
      <img
        className="h-screen w-full relative"
        src="./naturebackground.jpeg"
      ></img>
      <div className="absolute top-0 left-0">
        <h1>hi</h1>
      </div>
    </div>
  );
};

export default WateringPage;
