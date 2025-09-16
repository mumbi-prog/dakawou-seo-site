import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import Terms from './components/legal/Terms';
import Privacy from './components/legal/Privacy';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallerysection" element={<GallerySection />} />
        <Route path="/aboutsection" element={<AboutSection />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;