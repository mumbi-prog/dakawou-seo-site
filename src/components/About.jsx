import abt from '../assets/pictures/about.png'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './landing.css'

function About() {
  return (
    <div className="about mb-[40px] mt-[30px] mx-[150px]" id='about'>
     

      <div className="abt-content grid grid-cols-1 lg:grid-cols-[40%_60%] md:grid-cols-2 gap-[10px] pt-[8px] items-center justify-center">
         <div className="img-wrap">
          <img src={abt} alt="Truck" className='h-[85%] lg:h-[95%]'/>
        </div>

        <div className="abt-content-second flex flex-col py-[40px]">
          <div className="text-wrap font-roboto relative overflow-hidden">
            <div className="title-heading py-[30px]">
              <h1 className='content-title font-playfair text-4xl font-bold text-center mb-[7px]'> About Us </h1>
              <div className="abt-line block m-auto w-[8%] md:w-[8.5%] border-t-[4px] border-b-orange "></div>
            </div>
              <p className='text-justify px-[30px] lg:px-[40px] z-10 relative font-parkinsans text-[14px] leading-loose'>
              Since 1985, Dakawou Transport Ltd. has been driving excellence, delivering petroleum, bulk, and project cargo across East, Central, and Southern Africa. <br /> <br />
                With over 250 trucks and trusted by top brands like Vivo Energy, Rubis Energy and Bamburi Cement, we connect industries with reliability and precision. <br /><br />
                Dakawou Transport Ltd. strives to meet the needs of diverse clients within the oil industry by providing safe, efficient, and reliable transportation solutions.
              </p>
          </div>

          <div className="btns mt-[30px] px-[30px] lg:px-[40px]">
            <Link to="/aboutsection" className="r-more relative flex items-center w-[160px] font-semibold transition duration-300 group overflow-hidden">
              <span className="absolute left-0 top-0 bottom-0 w-12 bg-orange-600 rounded-full transition-all duration-700 ease-in-out group-hover:w-full"></span>

              <span className="relative z-10 flex items-center justify-center w-12 h-12 bg-transparent">
                <AiOutlineArrowRight className="text-white transform translate-x-0 transition-transform duration-300 group-hover:translate-x-[10px]" />
              
              </span>
              
              <p className="relative text-[16px] font-bold z-10 ml-4 text-orange-600 font-oleo transition-colors duration-300 group-hover:text-white">
                Read More
              </p>
            </Link>
          </div>

        </div>

       
      </div>

    </div>
  );
}

export default About;