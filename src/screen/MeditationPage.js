import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { getGPTResponse } from "../api/gptAPI";
import OpenAI from "openai";

const MeditationPage = () => {
    const [exercise, setExercise] = useState('');
    const client = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
    });

    const navigate = useNavigate();

    const moveToWateringPage = () => {
        navigate('/watering');

    }

    useEffect(() => {
        async function main() {
            const stream = await client.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: "I am struggling with meditation, and I need a meditation exercise to help me relax. Can you help me generate one mediation exercise, that start with Here is your exercise:. Also please restrict everything under 50 words" }],
                stream: true,
            });
            for await (const chunk of stream) {
                if (exercise !== "undefined") {
                    setExercise((exercise) => exercise + chunk.choices[0]?.delta?.content || "");
                }
            }
        }

        if (exercise === '') {
            main();
        }
        
    }, []);

    return (
        <div className="MainPage">

            <p>Meditation Page</p>
            <p>{exercise}</p>
            <button onClick={moveToWateringPage}>Go To the Watering Page</button>

        </div>
    )
}

export default MeditationPage;