import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Typewriter from "../../components/TypeWriter";

const LandPage1 = () => {
  const navigate = useNavigate();

  const moveToMeditationPage = () => {
    navigate("/meditation");
  };

  return (
    <div className="MainPage">
      <img
        className="h-screen w-full relative"
        src="./naturebackground.jpeg"
      ></img>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between mt-10">
        <div className="flex flex-row justify-center">
          <div className="w-[80vw] px-7 py-2  border-4 border-black rounded-md shadow-lg bg-white">
            <Typewriter text="Weelcome to Sproutful. This app is designed for you to practice mindfulness breathing exercises each day. As you progress, watch your very own mental tree grow. 😃" />
          </div>
        </div>
        <img className="w-[50%] mx-auto" src="logo512.png"></img>
        <div className="flex justify-center mb-[10vh]">
          <div className="py-[3vh] px-[10%] border-4 border-black rounded-md shadow-lg bg-white">
            <button
              className="text-2xl text-black font-bold"
              onClick={moveToMeditationPage}
            >
              Start your journey now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandPage1;
