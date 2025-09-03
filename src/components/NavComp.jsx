import { FaLinkedinIn, FaMapMarkerAlt} from 'react-icons/fa'
import logo from '../assets/pictures/dakalogo.png'
import './landing.css'
import { MdEmail } from 'react-icons/md'

function NavComp() {

  
  return (
    <div className='navbar-content flex items-center justify-between py-[5px] bg-white shadow-md px-[30px]' >

      <div className="flex items-center space-x-[20px]">
        <img src={logo} alt="Company Logo" className="h-[70px]" />

        <div className="logo-content flex flex-col items-center justify-center">
          <p className='uppercase font-bold italic font-merriweather'>Dakawou Transport Ltd.</p>
          <div className="border-t-[2.5px] border-black w-full"></div>
          <p className='text-red-500 font-pinyon font-semibold text-xl'>exceeding expectations!</p>
        </div>
      </div>

      <div className="contact-btns ">
                    <div className="icon-container flex items-center justify-center gap-[20px] ">
                                  <a href="https://www.linkedin.com/company/dakawou-transport-limited/posts/?feedView=all/" target='blank' className="social-icon group p-2 transition-all duration-300 ease-in border border-white text-white rounded-full hover:bg-b-orange hover:border-b-orange">
                                      <FaLinkedinIn className="icon" />
                                  </a>
                                  <a href="mailto:info@dakawou.com" target='blank' className="social-icon group p-2 transition-all duration-300 ease-in border border-white text-white rounded-full hover:bg-b-orange hover:border-b-orange">
                                      <MdEmail className="icon" />
                                  </a>
                                  <a href="https://www.google.com/maps/dir//dakawou+transport+address/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x182f126e67fec1f3:0xe2330a698bde40e7?sa=X&ved=1t:3061&ictx=111" 
                                        target='blank' className="social-icon group p-2 transition-all duration-300 ease-in border border-white text-white rounded-full hover:bg-b-orange hover:border-b-orange">
                                        <FaMapMarkerAlt className="icon" />
                                  </a>
                    </div>
        </div>

    </div>
  )
}

export default NavComp