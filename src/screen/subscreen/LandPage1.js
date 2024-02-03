import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Typewriter from "../../components/TypeWriter";

const LandPage1 = () => {
  const navigate = useNavigate();

  const moveToMeditationPage = () => {
    navigate("/meditation");
  };

  return (
    <div className="MainPage overscroll-none">
      <img
        className="h-screen w-full relative"
        src="./naturebackground.jpeg"
      ></img>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
        <div className="flex flex-row justify-center mt-[10vh]">
          <div className="w-[80vw] px-7 py-2  border-4 border-black rounded-md shadow-lg bg-white">
            <Typewriter text="Weelcome to Sproutful AI. This app is designed for you to practice mindfulness through AI-guided breathing exercises. As you progress, watch your very own mental tree grow. 😃" />
          </div>
        </div>
        <img className="w-[50wh] mx-auto" src="tree4.png"></img>
        <div
          className="flex justify-center mb-[10vh]"
          onClick={moveToMeditationPage}
        >
          <div className="py-[3vh] px-[10%] border-4 border-black rounded-md shadow-lg bg-white">
            <button className="text-2xl text-black font-bold">
              Start your journey now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandPage1;
