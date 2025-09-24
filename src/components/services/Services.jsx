import { FaHandsHelping, FaTruck, FaUserTie } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { MdOutlineGpsFixed } from "react-icons/md";
import '../landing.css'

function Services() {
  return (
    <div id='services' className="services mt-[20px] py-[20px]">
        <div className="title-heading pb-[10px]">
            <h1 className='content-title font-playfair text-4xl font-bold text-center mb-[7px]'>Why Choose Dakawou Transport?</h1>
            <div className="val-line block m-auto w-[8%] md:w-[8.5%] border-t-[4px] border-t-[4px] border-b-orange "></div>
        </div>
        <p className='service-slogan text-center font-parkinsans text-[14px] leading-relaxed mb-[15px]'>Here are the reasons why Dakawou Transport is your trusted partner in delivering excellence.</p>
        <div className="service-container flex flex-wrap justify-center gap-[30px] pb-[10px]">
            <div className="service-card group flex flex-col items-center text-center border border-gray-300 p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:translate-y-2 hover:border-orange-500 hover:bg-gray-50 hover:shadow-[0_2px_2px_rgba(255,_85,_36,_0.9)]">
                <div className="icon-container flex items-center justify-center w-16 h-16 bg-white border-[2px] border-orange-500 rounded-full mb-4 transition-colors duration-300 ease-in-out group-hover:bg-orange-500 group-hover:border-orange-500">
                    <p className="text-[32px] text-orange-500 transition-colors ease-in-out group-hover:text-gray-100">
                        <FaTruck />
                    </p>
                </div>
                <h2 className="font-semibold text-xl mb-2">Safe and Reliable Delivery</h2>
                <p className="service-text font-parkinsans text-[14px] leading-relaxed text-gray-600 w-[330px]">Always ensuring safe and reliable delivery.</p>
            </div>

           <div className="service-card group flex flex-col items-center text-center border border-gray-300 p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:translate-y-2 hover:border-orange-500 hover:bg-gray-50 hover:shadow-[0_2px_2px_rgba(255,_85,_36,_0.9)]">
                <div className="icon-container flex items-center justify-center w-16 h-16 bg-white border-[2px] border-orange-500 rounded-full mb-4 transition-colors duration-300 ease-in-out group-hover:bg-orange-500 group-hover:border-orange-500">
                    <p className="text-4xl text-orange-500 transition-colors duration-300 ease-in-out group-hover:text-gray-100">
                        <FaUserTie />
                    </p>
                </div>
                <h2 className="font-semibold text-xl mb-2">Professional Team</h2>
                <p className="service-text font-parkinsans text-[14px] leading-relaxed text-gray-600 w-[330px]">A skilled, dedicated team at your service.</p>
            </div>

            <div className="service-card group flex flex-col items-center text-center border border-gray-300 p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:translate-y-2 hover:border-orange-500 hover:bg-gray-50 hover:shadow-[0_2px_2px_rgba(255,_85,_36,_0.9)]">
                <div className="icon-container flex items-center justify-center w-16 h-16 bg-white border-[2px] border-orange-500 rounded-full mb-4 transition-colors duration-300 ease-in-out group-hover:bg-orange-500 group-hover:border-orange-500">
                    <p className="text-4xl text-orange-500 transition-colors duration-300 ease-in-out group-hover:text-gray-100">
                        <AiFillClockCircle />
                    </p>
                </div>
                <h2 className="font-semibold text-xl mb-2">Timely and Efficient Service</h2>
                <p className="service-text font-parkinsans text-[14px] leading-relaxed text-gray-600 w-[330px]">Delivering your goods on time, every time.</p>
            </div>

            <div className="service-card group flex flex-col items-center text-center border border-gray-300 p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:translate-y-2 hover:border-orange-500 hover:bg-gray-50 hover:shadow-[0_2px_2px_rgba(255,_85,_36,_0.9)]">
                <div className="icon-container flex items-center justify-center w-16 h-16 bg-white border-[2px] border-orange-500 rounded-full mb-4 transition-colors duration-300 ease-in-out group-hover:bg-orange-500 group-hover:border-orange-500">
                    <p className="text-4xl text-orange-500 transition-colors duration-300 ease-in-out group-hover:text-gray-100">
                        <MdOutlineGpsFixed />
                    </p>
                </div>
                <h2 className="font-semibold text-xl mb-2">Real-Time Fleet Tracking</h2>
                <p className="service-text font-parkinsans text-[14px] leading-relaxed text-gray-600 w-[330px]">Our team tracks your shipments in real-time.</p>
            </div>

            <div className="service-card group flex flex-col items-center text-center border border-gray-300 p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:translate-y-2 hover:border-orange-500 hover:bg-gray-50 hover:shadow-[0_2px_2px_rgba(255,_85,_36,_0.9)]">
                <div className="icon-container flex items-center justify-center w-16 h-16 bg-white border-[2px] border-orange-500 rounded-full mb-4 transition-colors duration-300 ease-in-out group-hover:bg-orange-500 group-hover:border-orange-500">
                    <p className="text-4xl text-orange-500 transition-colors duration-300 ease-in-out group-hover:text-gray-100">
                        <FaHandsHelping />
                    </p>
                </div>
                <h2 className="font-semibold text-xl mb-2">Customer Centric Services</h2>
                <p className="service-text font-parkinsans text-[14px] leading-relaxed text-gray-600 w-[330px]">Our focus is on providing exceptional customer service.</p>
            </div>

        </div>
    </div>
  )
}

export default Services;
