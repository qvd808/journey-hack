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
    <div className="WateringPage overflow-hidden">
      <img className="h-screen w-full relative" src={WaterBackground}></img>

      <div className="absolute top-[5vh] flex flex-col w-full">
        <div
          className="self-start ml-10 font-bold text-black border-2 border-black rounded-lg shadow-xl p-4 bg-white text-sm md:text-md"
          onClick={moveToMeditationPage}
        >
          {str}
        </div>
        <div className="grid grid-rows-2">
          <div className="row-span-6 self-start">
            {showAnimation && (
              <div className="absolute flex flex-row w-full justify-start md:justify-center">
                {" "}
                {/* Adjust these values */}
                <div
                  ref={container}
                  id="animation-container "
                  className="w-64 h-64 md:ml-[10%]"
                  style={{ transform: "scaleX(1)" }}
                ></div>
              </div>
            )}

            {showButton ? (
              indexTree === 6 ? (
                <div
                  className="flex w-full justify-center md:ml-[10%]"
                  onClick={growTree}
                >
                  <button
                    className="font-bold text-white text-center border-2 border-black rounded-lg shadow-xl p-4 bg-rose-700 self-center mt-[20%] text-sm md:text-md"
                    onClick={growTree}
                  >
                    Rebirth Tree
                  </button>
                </div>
              ) : (
                <div
                  className="flex w-full justify-center md:ml-[10%]"
                  onClick={growTree}
                >
                  <button
                    className="font-bold text-white text-center border-2 border-black rounded-lg shadow-xl p-4  bg-blue-500 self-start mt-[20%] text-sm md:text-md "
                    onClick={growTree}
                  >
                    Water Tree
                  </button>
                </div>
              )
            ) : (
              <div
                className="invisible font-bold text-white border-2 border-black rounded-lg shadow-xl p-4 bg-blue-500 self-center mt-[20%] text-sm md:text-md"
                onClick={growTree}
              >
                <button onClick={growTree}>{`Water Tree`}</button>
              </div>
            )}
            <div className="grid grid-cols-2">
              <div>
                {" "}
                <div className="hidden md:block row-span-1">
                  <div className="font-bold text-black border-2 border-black rounded-lg shadow-xl p-4 bg-white self-center mx-[10%] mt-[5%] text-sm md:text-md md:mb-10">
                    <h1>Congratulations!</h1>
                    <h1>We hope you feel refreshed</h1>
                    <h1>with every breath.</h1>
                  </div>
                </div>
              </div>
              <div>
                {/* Keep the tree image at its original position */}
                <div className="grid grid-rows-2 w-full justify-center">
                  <img className="row-span-2 w-52" src={treeImagePath}></img>
                  <p className="row-span-1 font-bold text-amber-800 text-center text-xl text-sm md:text-lg">
                    {treeName[indexTree]}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden row-span-1">
            <div className="font-bold text-black border-2 border-black rounded-lg shadow-xl p-4 bg-white self-center mx-[10%] mt-[5%] text-sm md:text-md md:mb-10">
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
