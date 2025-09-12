// import { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import logo from '../assets/pictures/dakalogo.png';
// import './landing.css';
// import { FaBars, FaTimes } from 'react-icons/fa';

// function NavBar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const sections = ['Home', 'About', 'Services', 'Awards', 'Gallery', 'Coverage', 'Contact'];

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const handleNavClick = (sectionId) => {
//     const targetId = sectionId.toLowerCase();

//     if (location.pathname !== '/') {
//       navigate('/');
//       setTimeout(() => scrollToSection(targetId), 100);
//     } else {
//       scrollToSection(targetId);
//     }

//     setMenuOpen(false);
//   };

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   return (
//     <div className="navbar-content flex items-center justify-between py-[5px] bg-white shadow-md px-[20px] z-50 fixed top-0 left-0 w-full">
//       <div className="flex items-center space-x-[20px]">
//         <img src={logo} alt="Company Logo" className="h-[70px]" />
//         <div className="logo-content flex flex-col items-center justify-center">
//           <p className="uppercase font-bold italic font-merriweather">Dakawou Transport Ltd.</p>
//           <div className="border-t-[2.5px] border-black w-full"></div>
//           <p className="text-red-500 font-pinyon font-semibold text-xl">exceeding expectations!</p>
//         </div>
//       </div>

//       {/* Desktop Nav */}
//       <div className="nav-container hidden md:flex mx-[30px] space-x-8">
//         {sections.map((item) => (
//           <span
//             key={item}
//             onClick={() => handleNavClick(item)}
//             className="nav-link text-white font-semibold cursor-pointer hover:text-red-500"
//           >
//             {item}
//           </span>
//         ))}
//       </div>


//       <div className="menu-icon md:hidden mr-[20px] text-white cursor-pointer" onClick={toggleMenu}>
//         {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="mobile-menu absolute top-[80px] left-0 w-full bg-black text-white shadow-md flex flex-col space-y-4 py-4 px-6 z-50">
//           {sections.map((item) => (
//             <span
//               key={item}
//               onClick={() => handleNavClick(item)}
//               className="mobile-nav-link font-semibold cursor-pointer hover:text-b-orange"
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default NavBar;


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

  const handleNavClick = (sectionId) => {
    const targetId = sectionId.toLowerCase();

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(targetId), 100);
    } else {
      scrollToSection(targetId);
    }

    closeMenu();
  };

  const navItems = [
    {
      label: 'About Us',
      children: [
        { label: 'Overview', id: 'about' },
        { label: 'Mission & Vision', id: 'missionvision' },
        { label: 'Where We Operate', id: 'coverage' },
        { label: 'SDGs & Sustainability', id: 'sdgs' },
        { label: 'Awards', id: 'awards' },
      ],
    },
    {
      label: 'Services',
      children: [
        { label: 'Transport', id: 'services' },
        { label: 'Fleet Safety', id: 'fleetsafety' },
        { label: 'Logistics Solutions', id: 'logistics' },
      ],
    },
    {
      label: 'Resources',
      children: [
        { label: 'Blog', id: 'blog' },
        { label: 'Gallery', id: 'gallery' },
        { label: 'Testimonials', id: 'testimonials' },
      ],
    },
    {
      label: 'Legal',
      children: [
        { label: 'Terms & Conditions', id: 'terms' },
        { label: 'Privacy Policy', id: 'privacy' },
      ],
    },
    {
      label: 'Contact',
      id: 'contact',
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
            className="relative group"
            onMouseEnter={() => setActiveDropdown(item.label)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span
              onClick={() => !item.children && handleNavClick(item.id)}
              className="cursor-pointer font-semibold text-white hover:text-red-500"
            >
              {item.label}
            </span>

            {/* Dropdown */}
            {item.children && (
              <div
                className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-[220px] z-50 ${
                  activeDropdown === item.label ? 'block' : 'hidden'
                }`}
              >
                {item.children.map((child) => (
                  <div
                    key={child.label}
                    onClick={() => handleNavClick(child.id)}
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
                    : handleNavClick(item.id)
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
                      onClick={() => handleNavClick(child.id)}
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


