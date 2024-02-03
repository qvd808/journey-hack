import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { getGPTResponse } from "../api/gptAPI";
import OpenAI from "openai";

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

  const navigate = useNavigate();

  const moveToWateringPage = () => {
    navigate("/watering");
  };

  useEffect(() => {
    async function main() {
      const stream = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content:
              "I am struggling with meditation, and I need a meditation exercise to help me relax. Can you help me generate one mediation exercise, that start with Here is your exercise:. Also please restrict everything under 50 words",
          },
        ],
        stream: true,
      });
      for await (const chunk of stream) {
        if (chunk !== "undefined") {
          setExercise(
            (exercise) => exercise + chunk.choices[0]?.delta?.content || ""
          );
        }
        localStorage.setItem("exercise", JSON.stringify(exercise));
      }
    }

    if (exercise === "") {
      setExercise(
        "Here is your exercise: TakeHere is your a seat in exercise: Close a quiet space your eyes and and close your eyes. Focus take a deep breath. As your attention on you inhale the sensation of, imagine breathing your breath entering and leaving your body. As in peace and calmness. Hold your breath thoughts arise, for a few gently let them seconds, then go and return exhale slowly your focus to, releasing any your breath. tension or stress Stay present and. Repeat this deep breathing for relaxed for 10 minutes.undefined a few minutes, focusing only on your breath.undefined"
      );
    }
  }, []);

  const welcome = `
  Welcome to Day 1 of your breathing journey! Follow the directions below to nurture midnfulness.
  `;

  return (
    <div className="MeditationPage">
      <img
        className="h-screen w-full relative"
        src="./naturebackground.jpeg"
      ></img>
      <div className="absolute top-0 left-0">
        <div className="bg-white p-2 my-5 font-bold">
          <p className="text-welcomeMeditate">{welcome}</p>
          <p className="text-welcomeMeditate">
            After completing today's exercise, take a moment to reflect.
          </p>
        </div>
        <div className="absolute top-80 left-1/3 w-3/5 bg-white  p-2 my-5 font-bold">
          <p className="text-welcomeMeditate">{exercise}</p>
        </div>
        <img className="absolute top-80 left-3/4" 
        src="./tree" />
        <button
          className="text-welcomeMeditate bg-white"
          onClick={moveToWateringPage}
        >
          Go To the Watering Page
        </button>
      </div>
    </div>
  );
};

export default MeditationPage;
