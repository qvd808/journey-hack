import { useNavigate } from "react-router-dom";
// import './styles.css';


const MainPage = () => {
    const navigate = useNavigate();

    const moveToWateringPage = () => {
        navigate('/meditation');
    }

    return (

        <div className="MainPage">
            <img className="h-screen w-full relative" src="./naturebackground.jpeg"></img>
            <div className="absolute top-0 left-0">
                <h1>hiHIHIHIHIHI</h1>
                <button onClick={moveToWateringPage}>Get Started</button>
            </div>

        </div>
    )
}

export default MainPage;