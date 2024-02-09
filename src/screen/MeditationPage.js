import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OpenAI from "openai";
import { list_of_exercises } from "../api/listExercise";
import { indexTree, treeName } from "../data/data";

const MeditationPage = () => {
  const [exercise, setExercise] = useState(() => {
    const saved = localStorage.getItem("exercise");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const client = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const list_of_tree = [
    "tree1.png",
    "tree2.png",
    "tree3.png",
    "tree4.png",
    "tree5.png",
    "tree6.png",
    "tree7.png",
  ];
  const treeImagePath = list_of_tree[indexTree];

  const navigate = useNavigate();

  const moveToWateringPage = (e) => {
    navigate("/watering");
    e.preventDefault();
  };

  function get_random(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  useEffect(() => {
    async function main() {
      try {
        const stream = await client.chat.completions.create({
          model: "gpt-3.5-turbo-0125",
          messages: [
            {
              role: "user",
              content:
                "Can you help me generate one mediation exercise. Absolutely do not output over 40 words for the answer. ",
            },
          ],
          stream: true,
        });
        for await (const chunk of stream) {
          if (chunk.choices[0]?.delta?.content) {
            setExercise(
              (exercise) => exercise + chunk.choices[0]?.delta?.content || ""
            );
          }
          localStorage.setItem("exercise", JSON.stringify(exercise));
        }
      } catch (error) {
        setExercise(get_random(list_of_exercises));
      }
    }

    if (exercise === "") {
      main();
    }
  }, []);

  const welcome = `
  Welcome to your breathing journey! Follow the directions below to nurture mindfulness.
  `;

  return (
    <div className="MeditationPage overflow-hidden">
      <img
        className="h-screen w-full relative"
        src="./wateringbackgroundImage.jpeg"
      ></img>
      <div className="absolute top-0 left-0 w-screen">
        <div className="flex flex-row justify-center">
          <div className="border-2 border-black rounded-lg shadow-2xl w-4/5 bg-white p-2 my-5 font-bold text-center">
            <p className="text-welcomeMeditate text-sm md:text-md">{welcome}</p>
            <p className="text-welcomeMeditate text-sm md:text-md">
              After completing an exercise, take a moment to{" "}
              <span className="text-green-700">sprout</span> your tree in the
              watering page.
            </p>
          </div>
        </div>

        <div className="grid grid-rows-2">
          <div className="row-span-6">
            <div className="flex flex-col items-center">
              <div className="justify-self-center">
                <img
                  className="justify-self-center w-32 md:w-52"
                  src={treeImagePath}
                ></img>
                <p className="justify-self-center font-bold text-amber-800 text-center text-xl">
                  {treeName[indexTree]}
                </p>
              </div>
              <div className="w-96 border-2 border-black rounded-lg shadow-2xl bg-white p-2 my-5 font-bold justify-self-center align-self-center">
                <p className="text-welcomeMeditate p-3 text-sm md:text-md">
                  {exercise}
                </p>
              </div>
            </div>
          </div>
          <div className="row-span-1">
            <div className="flex flex-row justify-center mt-[5%] md:mt-[2%]">
              <button
                className="text-white border-2 border-black rounded-lg shadow-2xl bg-blue-500 font-bold p-3 text-sm md:text-md"
                onClick={moveToWateringPage}
              >
                Go to the watering page
              </button>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col items-center">
          <div className="justify-self-center">
            <img className="justify-self-center" src={treeImagePath}></img>
            <p className="justify-self-center font-bold text-amber-800 text-center text-xl">
              {treeName[indexTree]}
            </p>
          </div>
          <div className="w-96 border-2 border-black rounded-lg shadow-2xl bg-white p-2 my-5 font-bold justify-self-center align-self-center">
            <p className="text-welcomeMeditate p-3">{exercise}</p>
          </div>
        </div> */}

        {/* <div className="flex flex-row justify-center mt-[5%]">
          <button
            className="text-white border-2 border-black rounded-lg shadow-2xl bg-blue-500 font-bold p-3"
            onClick={moveToWateringPage}
          >
            Go to the watering page
          </button>
        </div> */}

        {/* <div className="absolute bottom-40 right-80">
          <div className="relative bottom-500 left-10">
            <img src={treeImagePath}></img>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MeditationPage;
