import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

// Import your page components
import HomePage from './screen/HomePage';
import MeditationPage from './screen/MeditationPage';
import WateringPage from './screen/WateringPage';

function App() {
  return (
    <Router>
      <div>
        {/* ... navigation links ... */}
        
        <Routes> {/* 'Switch' is replaced by 'Routes' */}
          <Route path="/meditation" element={<MeditationPage />} />
          <Route path="/watering" element={<WateringPage />} />
          <Route path="/" element={<HomePage />} />
          {/* No need for a separate NotFoundPage, Routes handles unmatched paths by default */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
