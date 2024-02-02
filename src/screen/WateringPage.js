import { useNavigate } from "react-router-dom";

const WateringPage = () => {
    const navigate = useNavigate();

    const moveToHomePage = () => {
        navigate('/');
    }

    return (
        <div className="MainPage">

            <p>Watering Page</p>
            <button onClick={moveToHomePage}>Go Back to the Home Page</button>

        </div>
    )
}

export default WateringPage;