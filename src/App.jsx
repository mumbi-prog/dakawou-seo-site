/* eslint-disable no-unused-vars */
import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallerysection" element={<GallerySection />} />
        <Route path="/aboutsection" element={<AboutSection />} />
      </Routes>
    </Router>
  );
}

export default App;

