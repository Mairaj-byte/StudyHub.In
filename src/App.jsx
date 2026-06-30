import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import CourseDetailPage from './pages/CourseDetailPage.jsx';
import ContactUsPage from './pages/ConatctUsPage.jsx';
import ContactPage from './pages/ContactPage.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/landing" element={<LandingPage />} />
      
      {/* Dynamic parameter route handles all courses automatically */}
      <Route path="/course/:courseId" element={<CourseDetailPage />} />

      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/connect" element={<ContactPage/>} />

    </Routes>
  );
};

export default App;