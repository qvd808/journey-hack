import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";

const WateringPage = () => {
  const navigate = useNavigate();

  const moveToMeditationPage = () => {
    navigate("/meditation");
  };

  useEffect(() => {
    const instance = lottie.loadAnimation({
      animationData: require("./watering-animation.json"),
      autoplay: true,
      container: container.current,
      loop: true,
      renderer: "svg",
    });
    // Cleanup function
    return () => {
      instance.destroy();
    };
  }, []);

  // add logic such that the tree image path changes depending on the user
  const treeImagePath = "tree1.png";
  const container = useRef(null);
  var str = "< Go back to meditation";

  return (
    <div className="">
      <img
        className="h-screen w-full relative"
        src="./wateringbackgroundimage.jpeg"
      ></img>

      <div className="absolute top-[5vh]">
        <div
          className="ml-10 text-3xl font-bold text-black border-2 border-black rounded-lg shadow-xl p-4 bg-white"
          onClick={moveToMeditationPage}
        >
          {str}
        </div>
      </div>

      <div className="absolute top-[300px] left-[200px] text-3xl font-bold text-black border-2 border-black rounded-lg shadow-xl p-4 bg-white ">
        <h1>Congratulations!</h1>
        <h1>We hope you feel refreshed</h1>
        <h1>with every breath.</h1>
      </div>

      {/* Position the Lottie animation */}
      <div className="absolute bottom-[200px] right-[20px]">
        {" "}
        {/* Adjust these values */}
        <div
          ref={container}
          id="animation-container"
          className="w-64 h-64"
          style={{ transform: "scaleX(-1)" }}
        ></div>
      </div>

      {/* Keep the tree image at its original position */}
      <div className="absolute bottom-40 right-60">
        <div className="relative bottom-500 left-10">
          <img src={treeImagePath}></img>
        </div>
      </div>
    </div>
  );
};

export default WateringPage;
