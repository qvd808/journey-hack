import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import lottie from "lottie-web";
import { indexTree, setIndexTree, treeName } from "../data/data";
import WaterBackground from "./backgroundWaterpage.jpeg";

const WateringPage = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const container = useRef(null);

  const navigate = useNavigate();
  const list_of_tree = [
    "tree1.png",
    "tree2.png",
    "tree3.png",
    "tree4.png",
    "tree5.png",
    "tree6.png",
    "tree7.png",
  ];

  const moveToMeditationPage = (e) => {
    navigate("/meditation");
    e.preventDefault();
  };

  const growTree = () => {
    setShowAnimation(true);
    setShowButton(false);
  };

  useEffect(() => {
    const instance = lottie.loadAnimation({
      animationData: require("./watering-animation.json"),
      autoplay: true,
      container: container.current,
      loop: false,
      renderer: "svg",
    });
    // Cleanup function

    instance.addEventListener("complete", () => {
      setShowAnimation(false);
      setIndexTree();
    });
    return () => {
      instance.destroy();
    };
  }, [showAnimation]);

  // add logic such that the tree image path changes depending on the user
  const treeImagePath = list_of_tree[indexTree];
  var str = "< Go back to meditation";

  return (
    <div className="">
      <img className="absolute h-screen w-full" src={WaterBackground}></img>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center md:relative md:flex-col">
        <div
          className="md:relative md:left-10 my-10 self-start font-bold text-black border-2 border-black rounded-lg shadow-xl p-4 bg-white text-sm md:text-md"
          onClick={moveToMeditationPage}
        >
          {str}
        </div>
        <div className="absolute md:relative md:flex md:flex-row-reverse md:justify-around md:w-3/4">
          <div className="grid grid-cols-2 items-center">
            {showAnimation ? (
              <div className="relative left-20 flex flex-row w-full justify-start ">
                {" "}
                {/* Adjust these values */}
                <div
                  ref={container}
                  id="animation-container "
                  className="w-64 h-64 md:ml-[10%] overflow-hidden md:w-72 md:h-72"
                  style={{ transform: "scaleX(1)", zIndex: 1 }}
                ></div>
              </div>
            ) : (
              <span
                className="flex w-full justify-center md:ml-[10%]"
                onClick={growTree}
              >
                {indexTree === 6 ? (
                  <button
                    className="font-bold text-white text-center border-2 border-black rounded-lg shadow-xl p-4 bg-rose-700 self-center mt-[20%] text-sm md:text-md"
                    onClick={growTree}
                    style={{ display: showButton ? "flex" : "none" }}
                  >
                    Rebirth Tree
                  </button>
                ) : (
                  <button
                    className="font-bold text-white text-center border-2 border-black rounded-lg shadow-xl p-4  bg-blue-500 self-start mt-[20%] text-sm md:text-md "
                    onClick={growTree}
                    style={{ display: showButton ? "flex" : "none" }}
                  >
                    Water Tree
                  </button>
                )}
              </span>
            )}
            <div className="relative grid grid-rows-2 w-full justify-center ">
              <img
                className="row-span-2 w-56 md:w-72"
                src={treeImagePath}
              ></img>
              <p className="row-span-1 font-bold text-amber-800 text-center text-xl md:text-lg">
                {treeName[indexTree]}
              </p>
            </div>
          </div>
          <div className="absolute left-0 right-0 bottom-[-60%] flex justify-center items-center md:relative">
            <div className="font-bold text-black border-2 border-black rounded-lg shadow-xl p-4 bg-white self-center mx-[10%] mt-[5%] text-sm md:text-xl md:mb-10">
              <h1>Congratulations!</h1>
              <h1>We hope you feel refreshed</h1>
              <h1>with every breath.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WateringPage;
