import sdg7 from '../assets/pictures/sdg7.png';
import sdg7r from '../assets/pictures/sdg7i.jpg';
import sdg3 from '../assets/pictures/sdg3.jpg'
import sdg3r from '../assets/pictures/sdg3r.jpg'
import sdg5 from '../assets/pictures/sdg5.jpg'
import sdg5r from '../assets/pictures/sdg5r.jpg'
import sdg13 from '../assets/pictures/sdg13.jpg'
import sdg13r from '../assets/pictures/sdg13r.jpg'
import sdg8 from '../assets/pictures/sdg8.jpg'
import sdg8r from '../assets/pictures/sdg8r.jpg'
import './landing.css'
import unig from '../assets/pictures/UN_Global_Compact_logo.svg.png';

function Goals() {
  return (
    <div id='goals' className="goals-container mt-[40px] mx-[20px]">

      <div className="title-heading pb-[28px]">
        <h1 className='content-title font-playfair text-4xl font-bold text-center mb-[7px]'> Our Impact Goals </h1>
        <div className="goal-line block m-auto w-[8%] md:w-[8.5%] border-t-[4px] border-b-orange "></div>
      </div>

      <div className="slogan-container flex flex-row md:flex-row sm:flex-col justify-between items-center mx-[90px] gap-[180px] gap-y-[50px] mb-[40px]">
        <p className='text-justify font-parkinsans text-[14px] leading-loose'>
          We have highlighted 5 SDGs that closely align with our mission and strategy, focusing on areas where we can make the most significant impact and actively measure and share our progress with the United Nations Global Compact.
        </p>
        <img src={unig} alt="UN Global Compact Logo" className='w-[300px]' />
      </div>
      <div className="sdgs-container flex flex-wrap justify-center items-center gap-[40px] mb-[80px]">
        <div className="relative w-[180px] h-auto pointer cursor-pointer">
          <img src={sdg3} alt="" className="transition-opacity duration-500 ease-in-out w-full h-auto rounded-md hover:opacity-0" />
          <img src={sdg3r} alt="" className="absolute top-0 left-0 w-full h-auto rounded-md opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 hover:border hover:border-sdg-3 " />
        </div>
        <div className="relative w-[180px] h-auto pointer cursor-pointer">
          <img src={sdg5} alt="" className="transition-opacity duration-500 ease-in-out w-full h-auto rounded-md hover:opacity-0" />
          <img src={sdg5r} alt="" className="absolute top-0 left-0 w-full h-auto rounded-md opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 hover:border hover:border-sdg-5" />
        </div>
        <div className="relative w-[180px] h-auto pointer cursor-pointer">
          <img src={sdg7} alt="" className="transition-opacity duration-500 ease-in-out w-full h-auto rounded-md hover:opacity-0" />
          <img src={sdg7r} alt="" className="absolute top-0 left-0 w-full h-auto rounded-md opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 hover:border hover:border-sdg-7" />
        </div>
        <div className="relative w-[180px] h-auto pointer cursor-pointer">
          <img src={sdg8} alt="" className="transition-opacity duration-500 ease-in-out w-full h-auto rounded-md hover:opacity-0" />
          <img src={sdg8r} alt="" className="absolute top-0 left-0 w-full h-auto rounded-md opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 hover:border hover:border-sdg-8" />
        </div>
        <div className="relative w-[180px] h-auto pointer cursor-pointer">
          <img src={sdg13} alt="" className="transition-opacity duration-500 ease-in-out w-full h-auto rounded-md hover:opacity-0" />
          <img src={sdg13r} alt="" className="absolute top-0 left-0 w-full h-auto rounded-md opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 hover:border hover:border-sdg-13" />
        </div>
    
      </div>
    </div>
  );
}

export default Goals;