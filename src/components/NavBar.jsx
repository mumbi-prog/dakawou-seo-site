import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/pictures/dakalogo.png';
import './landing.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const sections = ['Home', 'About', 'Services', 'Awards', 'Gallery', 'Coverage', 'Contact'];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavClick = (sectionId) => {
    const targetId = sectionId.toLowerCase();

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(targetId), 100);
    } else {
      scrollToSection(targetId);
    }

    setMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="navbar-content flex items-center justify-between py-[5px] bg-white shadow-md px-[20px] z-50 fixed top-0 left-0 w-full">
      <div className="flex items-center space-x-[20px]">
        <img src={logo} alt="Company Logo" className="h-[70px]" />
        <div className="logo-content flex flex-col items-center justify-center">
          <p className="uppercase font-bold italic font-merriweather">Dakawou Transport Ltd.</p>
          <div className="border-t-[2.5px] border-black w-full"></div>
          <p className="text-red-500 font-pinyon font-semibold text-xl">exceeding expectations!</p>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="nav-container hidden md:flex mx-[30px] space-x-8">
        {sections.map((item) => (
          <span
            key={item}
            onClick={() => handleNavClick(item)}
            className="nav-link text-white font-semibold cursor-pointer hover:text-red-500"
          >
            {item}
          </span>
        ))}
      </div>


      <div className="menu-icon md:hidden mr-[20px] text-white cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu absolute top-[80px] left-0 w-full bg-black text-white shadow-md flex flex-col space-y-4 py-4 px-6 z-50">
          {sections.map((item) => (
            <span
              key={item}
              onClick={() => handleNavClick(item)}
              className="mobile-nav-link font-semibold cursor-pointer hover:text-b-orange"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavBar;
