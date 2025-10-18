import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import GallerySection from "./components/GallerySection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Terms from "./components/legal/Terms";
import Privacy from "./components/legal/Privacy";
import ServicesSection from "./components/services/ServicesSection";
import Blog from "./components/resources/Blog";
import BlogDetails from "./components/resources/BlogDetails";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallerysection" element={<GallerySection />} />
        <Route path="/aboutsection" element={<AboutSection />} />
        <Route path="/contactsection" element={<ContactSection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
