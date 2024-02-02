import { useNavigate } from "react-router-dom";



const MainPage = () => {
    const navigate = useNavigate();

    const moveToWateringPage = () => {
        navigate('/meditation');
    }

    return (
        <div className="MainPage">

            <p>Main page</p>
            <button onClick={moveToWateringPage}>Get Started</button>

        </div>
    )
}

export default MainPage;