import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallerysection" element={<GallerySection />} />
        <Route path="/aboutsection" element={<AboutSection />} />
      </Routes>
    </Router>
  );
}

export default App;