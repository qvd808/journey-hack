import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Import your page components
import HomePage from "./screen/HomePage";
import MeditationPage from "./screen/MeditationPage";
import WateringPage from "./screen/WateringPage";
import LandPage1 from "./screen/subscreen/LandPage1";
import LandPage2 from "./screen/subscreen/LandPage2";

function App() {
  return (
    <Router>
      <div>
        {/* ... navigation links ... */}

        <Routes>
          {" "}
          {/* 'Switch' is replaced by 'Routes' */}
          <Route path="/meditation" element={<MeditationPage />} />
          <Route path="/watering" element={<WateringPage />} />
          <Route path="/landpage1" element={<LandPage1 />} />
          <Route path="/landpage2" element={<LandPage2 />} />
          <Route path="/" element={<HomePage />} />
          {/* No need for a separate NotFoundPage, Routes handles unmatched paths by default */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
