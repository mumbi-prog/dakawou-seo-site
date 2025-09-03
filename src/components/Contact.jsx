import { RiArrowDropRightLine } from "react-icons/ri";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import Footer from './Footer';
import { FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './landing.css'

function Contact() {
  return (
    <div className="contact-container bg-dark-g text-white px-[60px]" id='contact'>
      <div className="first-container grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 p-8">
        <div className="abt">
            <h2 className="title text-xl font-bold text-white relative inline-block">
                About Company
                <div className="absolute -bottom-1 left-0 w-3/4 h-[3px] bg-orange-500"></div>
            </h2>
            <p className="mt-4 text-[15px] font-playfair text-sm">
                Dakawou Transport Ltd. has been a trusted name in the transport sector since 1985, growing from a single-truck operation to a leading player across East, Central, 
                and Southern Africa.
            </p>
            
            <div className="sicial-links">
              <div className="icon-container flex gap-4 mt-[20px]">
                            <a href="https://www.linkedin.com/company/dakawou-transport-limited/posts/?feedView=all/" target='blank' className="social-icon group p-2 transition-all duration-300 ease-in border border-white rounded-full hover:bg-b-orange hover:border-b-orange">
                                <FaLinkedinIn className="icon" />
                            </a>
                            <a href="https://www.instagram.com/" target='blank' className="social-icon group p-2 transition-all duration-300 ease-in border border-white rounded-full hover:bg-b-orange hover:border-b-orange">
                                <FaInstagram className="icon" />
                            </a>
                            <a href="https://twitter.com/" target='blank' className="social-icon group p-2 transition-all duration-300 ease-in border border-white rounded-full hover:bg-b-orange hover:border-b-orange">
                                <FaXTwitter className="icon" />
                            </a>
                        </div>
            </div>
        </div>

        <div className="services-footer">
           <h2 className="title text-xl font-bold text-white relative inline-block">
                Our Services
                <div className="absolute -bottom-1 left-0 w-3/4 h-[3px] bg-orange-500"></div>
            </h2>
          <ul className="mt-4 space-y-2 cursor-pointer font-playfair text-[15px]">
            <li className="flex items-center hover:text-b-orange hover:translate-x-2 transition duration-300">
              <RiArrowDropRightLine /> Safe Delivery
            </li>
            <li className="flex items-center hover:text-b-orange hover:translate-x-2 transition duration-300">
              <RiArrowDropRightLine /> Experienced Team
            </li>
            <li className="flex items-center hover:text-b-orange hover:translate-x-2 transition duration-300">
              <RiArrowDropRightLine /> Quality Service
            </li>
            <li className="flex items-center hover:text-b-orange hover:translate-x-2 transition duration-300">
              <RiArrowDropRightLine /> Fleet Tracking
            </li>
          </ul>
        </div>

        <div className="quick-links">
           <h2 className="title text-xl font-bold text-white relative inline-block">
                Quick Links
                <div className="absolute -bottom-1 left-0 w-3/4 h-[3px] bg-orange-500"></div>
            </h2>
          <ul className="mt-4 space-y-2 cursor-pointer font-playfair text-[15px]">
            <li className="flex items-center hover:text-b-orange hover:translate-x-2 transition duration-300">
              <RiArrowDropRightLine /> <a href="#home">Home</a>
            </li>
            <li className="flex items-center hover:text-b-orange hover:translate-x-2 transition duration-300">
              <RiArrowDropRightLine /> <a href="#about">About Us</a>
            </li>
            <li className="flex items-center hover:text-b-orange hover:translate-x-2 transition duration-300">
              <RiArrowDropRightLine /> <a href="#services">Services</a>
            </li>
            <li className="flex items-center hover:text-b-orange hover:translate-x-2 transition duration-300">
              <RiArrowDropRightLine /> <a href="#awards">Awards</a>
            </li>
            <li className="flex items-center hover:text-b-orange hover:translate-x-2 transition duration-300">
              <RiArrowDropRightLine /> <a href="#coverage">Coverage</a>
            </li>
            <li className="flex items-center hover:text-b-orange hover:translate-x-2 transition duration-300">
              <RiArrowDropRightLine /> <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="working-hrs">
            <h2 className="title text-xl font-bold text-white relative inline-block">
                Working Hours
                <div className="absolute -bottom-1 left-0 w-3/4 h-[3px] bg-orange-500"></div>
            </h2>
            <div className="working-hrs-content font-playfair text-[15px] leading-loose">
                <p className="mt-4 space-y-2">Mon - Fri: 8:00 AM - 5:00 PM</p>
                <p>Sat: 9:30 AM - 3:00 PM</p>
                <p>Sun: Closed</p>
            </div>
            
        </div>
      </div>

      <div className="second-container bg-gray-800 text-white py-8 rounded-md mb-[10px] mx-[40px] px-[30px]">
        <h2 className="title text-xl font-bold text-white underline underline-offset-4 decoration-b-orange decoration-[10%] text-center">
          Get in Touch
        </h2>

        <div className="office-container flex justify-between items-center mt-8 font-oleo">
          <div className="office text-center px-4">
            <p className="font-bold">Nairobi Office</p>
            <p>Off Mombasa Rd, Nairobi, Kenya</p>
            <p className="flex items-center justify-center space-x-2 text-center">
                <span><MdOutlinePhone /></span>
                <span>+254 111 054 340</span>
            </p>
            <p className='flex items-center justify-center space-x-2 text-center'>
                <span><MdOutlineMailOutline /></span>
                <span><a href="mailto:info@dakawou.com" className="text-b-orange hover:underline">info@dakawou.com</a></span>
            </p>
         </div>
          <div className="divider h-10 w-[2px] bg-white"></div>
          <div className="office text-center px-4">
            <p className="font-bold">Uganda Office</p>
            <p>Lico Holdings Building, Jinja Road</p>
            <p className="flex items-center justify-center space-x-2 text-center">
                <span><MdOutlinePhone /></span>
                <span>+256 786 053 877</span>
            </p>
            <p className='flex items-center justify-center space-x-2 text-center'>
                <span><MdOutlineMailOutline /></span>
                <span><a href="mailto:info@dakawou.com" className="text-b-orange hover:underline">info@dakawou.com</a></span>
            </p>
          </div>
          <div className="divider h-10 w-[2px] bg-white"></div>
          <div className="office text-center px-4">
            <p className="font-bold">Tanzania Office</p>
            <p>P.O. Box 21 Mbagala service Trade, Tanzania</p>
            <p className="flex items-center justify-center space-x-2 text-center">
                <span><MdOutlinePhone /></span>
                <span>+255 20 224 1920</span>
            </p>
            <p className='flex items-center justify-center space-x-2 text-center'>
                <span><MdOutlineMailOutline /></span>
                <span><a href="mailto:info@dakawou.com" className="text-b-orange hover:underline">info@dakawou.com</a></span>
            </p>
         </div>
        </div>
      </div>
      <hr className="-mx-[60px] border-gray-700" />
      <Footer />
    </div>
  );
}

export default Contact;
