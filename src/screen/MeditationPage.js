import { useNavigate } from "react-router-dom";

const MeditationPage = () => {
    const navigate = useNavigate();

    const moveToWateringPage = () => {
        navigate('/watering');

    }

    return (
        <div className="MainPage">

            <p>Meditation Page</p>
            <button onClick={moveToWateringPage}>Go To the Watering Page</button>

        </div>
    )
}

export default MeditationPage;