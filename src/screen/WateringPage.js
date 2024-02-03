import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import waterBackground from "../components/waterBackground";

const WateringPage = () => {
  const navigate = useNavigate();

  const moveToHomePage = () => {
    navigate("/");
  };

  // add logic such that the tree image path changes depending on the user
  const treeImagePath = "tree5.png";

  return (
    <div className="">
      <img
        className="h-screen w-full relative"
        src="./wateringbackgroundimage.jpeg"
      ></img>
      <div className="absolute bottom-40 right-80">
        <div className="relative bottom-500 left-10">
          <img src={treeImagePath}></img>
        </div>
      </div>
    </div>
  );
};

export default WateringPage;
