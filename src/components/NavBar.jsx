import { useState } from 'react';
import logo from '../assets/pictures/dakalogo.png'
import './landing.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className='navbar-content flex items-center justify-between py-[5px] bg-white shadow-md px-[20px]' >

      <div className="flex items-center space-x-[20px]">
        <img src={logo} alt="Company Logo" className="h-[70px]" />

        <div className="logo-content flex flex-col items-center justify-center">
          <p className='uppercase font-bold italic font-merriweather'>Dakawou Transport Ltd.</p>
          <div className="border-t-[2.5px] border-black w-full"></div>
          <p className='text-red-500 font-pinyon font-semibold text-xl'>exceeding expectations!</p>
        </div>
      </div>

      <div className="nav-container hidden md:flex mx-[30px] space-x-8">
        {['Home', 'About', 'Services', 'Awards', 'Gallery', 'Coverage', 'Contact'].map((item) => (
          <Link key={item} to={item.toLowerCase()} smooth={true} duration={500} offset={-80}
           className="nav-link text-white font-semibold cursor-pointer"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="menu-icon md:hidden mr-[20px] text-white cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {menuOpen && (
        <div className="mobile-menu absolute top-[80px] left-[50%] w-[50%] mr-0 shadow-md  flex flex-col items-left space-y-4 py-4 px-6 bg-dark-g">
          {['Home', 'About', 'Services', 'Awards', 'Gallery', 'Coverage', 'Contact'].map((item) => (
              <Link key={item} to={item.toLowerCase()} smooth={true} duration={500} offset={-85}
               className="mobile-nav-link text-white font-semibold hover:text-b-orange"
               onClick={() => setMenuOpen(false)}
             >
               {item}
             </Link>
          ))}
        </div>
      )}

    </div>
  )
}

export default NavBar