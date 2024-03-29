import { useNavigate } from "react-router-dom";
import Typewriter from "../components/TypeWriter";
// import './styles.css';

const HomePage = () => {
  const navigate = useNavigate();

  const moveToLandPage1 = () => {
    navigate("/landpage1");
  };

  return (
    <div className="MainPage overscroll-none">
      <img
        className="h-screen w-full relative overscroll-none"
        src="./naturebackground.jpeg"
      ></img>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
        <div className="flex flex-row justify-center align-center mt-[20vh]">
          <div className="flex flex-col justify-center align-center items-center w-4/5 p-5 md:p-10 border-4 border-black bg-white rounded-lg ">
            <h1 className="text-4xl md:text-9xl text-black font-bold mb-5">
              <span className="text-green-700">Sproutful</span> AI
            </h1>
            <Typewriter
              className=""
              text="Cuultivate wellness with every breath"
            ></Typewriter>
          </div>
        </div>
        <div
          className="flex justify-center mb-[15vh]"
          onClick={moveToLandPage1}
        >
          <div className="py-[3vh] px-[8%] border-4 border-black rounded-md shadow-lg bg-white">
            <button className="text-2xl text-black font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
