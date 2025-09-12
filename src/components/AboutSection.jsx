import Footer from './Footer'
import './abt.css'
import { Link } from 'react-router-dom'
import abtsec from '../assets/pictures/about.png'
import { IoIosReturnLeft } from 'react-icons/io'

function AboutSection() {
  return (
    <div>
        <div className="about-container bg-cover bg-center relative overflow-hidden h-[60vh] z-[-20]">
            <div className="about-overlay absolute inset-0 bg-black/60"></div>
            <h1 className="text-5xl font-bold text-white text-center absolute inset-0 flex items-center justify-center z-10">
            About Dakawou Transport
            </h1>
        </div>
        
        <div className="mx-[20px] mt-[-90px] z-40 bg-white p-[20px]">
            <ul>
                <Link to='/' className="flex items-center font-parkinsans mb-[20px] text-b-orange font-semibold hover:font-semibold hover:underline hover:translate-x-2 transition duration-300 ">
                    <IoIosReturnLeft style={{fontSize : '20px'}}/> <a href="#home" className='pl-[13px] text-[15px]'>Home</a>
                </Link>
            </ul>

            <div className="abt-sec grid grid-cols-1 lg:grid-cols-[63%_35%] md:grid-cols-2 gap-[20px] pt-[8px] my-[15px]">
                <p className="font-parkinsans leading-relaxed tracking-wide text-justify text-[13px] flex items-center justify-center">
                    Dakawou is a well reputed company in East, Central, and Southern Africa that is making significant strides in the transport sector.
                    <br /><br />
                    Established as a sole proprietorship in 1985, the company initially operated with a single truck servicing BP/SHELL. Over time, it evolved into a limited company in 1990, experiencing exponential growth to become a prominent player in transporting petroleum products, bulk cargo, and project cargo.
                    <br /><br />
                    The company’s main focus lies in transporting the above critical products to diverse destinations within Kenya and beyond. With a fleet of more than 250 trucks, Dakawou Transport Ltd ensures seamless delivery to various locations; supported by strategically located branches in Nairobi (head office), Mombasa, Nakuru, Eldoret, and Kisumu.
                    <br /><br />
                    The primary products transported by Dakawou Transport Ltd cater to a range of esteemed clients, including Vivo Energy Kenya Limited, Rubis Energy Uganda, Galana Energy Kenya Ltd, Bamburi Cement, Koko Networks, Dalbit Petroleum, OLA Energy, and others. 
                    <br /><br />This diverse portfolio spans petroleum products essential for energy and construction, meeting the needs of different industries and sectors across the region.
                </p>

                <div className="flex justify-center items-center">
                    <img src={abtsec} alt="" className='abtsec-image shadow-orange-bx rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out'/>
                </div>
                </div>

        </div>

        

        <div className="footer-cont bg-dark-g w-full">
            <Footer />
        </div>
    </div>
  )
}

export default AboutSection