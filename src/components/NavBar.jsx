import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/pictures/dakalogo.png';
import './landing.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (id, type = 'scroll') => {
    const targetId = id.toLowerCase();

    if (type === 'route') {
      navigate(`/${targetId}`);
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => scrollToSection(targetId), 100);
      } else {
        scrollToSection(targetId);
      }
    }

    closeMenu();
  };

  const navItems = [
    { label: 'Home', id: 'home', type: 'scroll' },
    {
      label: 'About Us',
      children: [
        { label: 'Overview', id: 'about', type: 'scroll' },
        { label: 'Mission & Vision', id: 'mission', type: 'scroll' },
        { label: 'Where We Operate', id: 'coverage', type: 'scroll' },
        { label: 'SDGs & Sustainability', id: 'goals', type: 'scroll' },
        { label: 'Awards', id: 'awards', type: 'scroll' },
      ],
    },
    {
      label: 'Services',
      children: [
        { label: 'Overview', id: 'service', type: 'scroll' },
        { label: 'Our Services', id: 'services', type: 'route' },
      ],
    },
    {
      label: 'Resources',
      children: [
        { label: 'Blog', id: 'blog', type: 'route' },
        { label: 'Gallery', id: 'gallerysection', type: 'route' },
        { label: 'Testimonials', id: 'testimonials', type: 'scroll' },
      ],
    },
    {
      label: 'Contact',
      id: 'contactsection',
      type: 'route',
    },
  ];

  return (
    <div className="navbar-content fixed top-0 left-0 w-full z-50 bg-white shadow-md px-[20px] py-[5px] flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-[20px]">
        <img src={logo} alt="Company Logo" className="h-[70px]" />
        <div className="logo-content flex flex-col items-center justify-center">
          <p className="uppercase font-bold italic font-merriweather">Dakawou Transport Ltd.</p>
          <div className="border-t-[2.5px] border-black w-full"></div>
          <p className="text-red-500 font-pinyon font-semibold text-xl">exceeding expectations!</p>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 items-center">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => setActiveDropdown(item.label)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span
              onClick={() => !item.children && handleNavClick(item.id, item.type)}
              className="cursor-pointer font-semibold text-white hover:text-red-500"
            >
              {item.label}
            </span>

            {/* Dropdown */}
            {item.children && activeDropdown === item.label && (
              <div
                className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[220px] z-50
                           translate-y-[10px] before:absolute before:-top-2 before:left-0 before:w-full before:h-2 before:bg-transparent"
              >
                {item.children.map((child) => (
                  <div
                    key={child.label}
                    onClick={() => handleNavClick(child.id, child.type)}
                    className="px-4 py-2 text-sm text-orange-700 cursor-pointer hover:bg-gray-100 transition"
                  >
                    {child.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-black text-white px-6 py-4 flex flex-col space-y-4 z-40">
          {navItems.map((item) => (
            <div key={item.label}>
              <div
                onClick={() =>
                  item.children
                    ? setActiveDropdown(activeDropdown === item.label ? null : item.label)
                    : handleNavClick(item.id, item.type)
                }
                className="cursor-pointer font-semibold"
              >
                {item.label}
              </div>

              {item.children && activeDropdown === item.label && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.children.map((child) => (
                    <div
                      key={child.label}
                      onClick={() => handleNavClick(child.id, child.type)}
                      className="text-sm cursor-pointer text-gray-300 hover:text-b-orange"
                    >
                      {child.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
