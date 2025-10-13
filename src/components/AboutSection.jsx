// import Footer from './Footer'
// import './abt.css'
// import { Link } from 'react-router-dom'
// import abtsec from '../assets/pictures/about.png'
// import { IoIosReturnLeft } from 'react-icons/io'

// function AboutSection() {
//   return (
//     <div>
//         <div className="about-container bg-cover bg-center relative overflow-hidden h-[60vh] z-[-20]">
//             <div className="about-overlay absolute inset-0 bg-black/60"></div>
//             <h1 className="text-5xl font-bold text-white text-center absolute inset-0 flex items-center justify-center z-10">
//             About Dakawou Transport
//             </h1>
//         </div>
        
//         <div className="mx-[20px] mt-[-90px] z-40 bg-white p-[20px]">
//             <ul>
//                 <Link to='/' className="flex items-center font-parkinsans mb-[20px] text-b-orange font-semibold hover:font-semibold hover:underline hover:translate-x-2 transition duration-300 ">
//                     <IoIosReturnLeft style={{fontSize : '20px'}}/> <a href="#home" className='pl-[13px] text-[15px]'>Home</a>
//                 </Link>
//             </ul>

//             <div className="abt-sec grid grid-cols-1 lg:grid-cols-[63%_35%] md:grid-cols-2 gap-[20px] pt-[8px] my-[15px]">
//                 <p className="font-parkinsans leading-relaxed tracking-wide text-justify text-[13px] flex items-center justify-center">
//                     Dakawou is a well reputed company in East, Central, and Southern Africa that is making significant strides in the transport sector.
//                     <br /><br />
//                     Established as a sole proprietorship in 1985, the company initially operated with a single truck servicing BP/SHELL. Over time, it evolved into a limited company in 1990, experiencing exponential growth to become a prominent player in transporting petroleum products, bulk cargo, and project cargo.
//                     <br /><br />
//                     The company’s main focus lies in transporting the above critical products to diverse destinations within Kenya and beyond. With a fleet of more than 250 trucks, Dakawou Transport Ltd ensures seamless delivery to various locations; supported by strategically located branches in Nairobi (head office), Mombasa, Nakuru, Eldoret, and Kisumu.
//                     <br /><br />
//                     The primary products transported by Dakawou Transport Ltd cater to a range of esteemed clients, including Vivo Energy Kenya Limited, Rubis Energy Uganda, Galana Energy Kenya Ltd, Bamburi Cement, Koko Networks, Dalbit Petroleum, OLA Energy, and others. 
//                     <br /><br />This diverse portfolio spans petroleum products essential for energy and construction, meeting the needs of different industries and sectors across the region.
//                 </p>

//                 <div className="flex justify-center items-center">
//                     <img src={abtsec} alt="" className='abtsec-image shadow-orange-bx rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out'/>
//                 </div>
//                 </div>

//         </div>

        

//         <div className="footer-cont bg-dark-g w-full">
//             <Footer />
//         </div>
//     </div>
//   )
// }

// export default AboutSection


import Footer from './Footer'
import './abt.css'
import { Link } from 'react-router-dom'
import abtsec from '../assets/pictures/about.png' 
import dakawoutruck from '../assets/pictures/ph2.jpg' 
import missionImg from '../assets/pictures/target.jpg'

function AboutSection() {
  return (
    <div>
        <div className="about-container bg-cover bg-center relative overflow-hidden h-[50vh] z-[-20]" style={{ backgroundImage: `url(${abtsec})` }} >
        <div className="about-overlay absolute inset-0 bg-black/70"></div>
                
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center leading-tight mb-4">
                    About Dakawou Transport Limited
                </h1>
                <div className="text-center text-white text-lg font-semibold tracking-wide">
                    <Link to='/' className="font-semibold text-white hover:text-b-orange transition duration-300">
                        Home
                    </Link>
                    <span className="mx-2 font-light opacity-80">|</span>
                    <span className="font-bold text-b-orange">About Us</span>
                </div>
            </div>
        </div>

        <div className="mx-[30px] mt-[-90px] z-40 bg-white shadow-xl rounded-lg py-[30px] px-[50px] md:p-[70px]">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-[80px] pt-4 mb-10">
            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-b-orange pl-3">Our Journey of Excellence</h2>
                <p className="font-parkinsans leading-loose tracking-wide text-justify text-[16px] text-gray-600">
                    Dakawou Transport stands as a formidable and highly respected logistics partner across East, Central, and Southern Africa, 
                    driving the region&apos;s most critical supply chains.
                    <br /><br />
                    What began as a single-truck sole proprietorship in 1985, servicing BP/SHELL, quickly laid the foundation for a logistics 
                    powerhouse. By 1990, we had evolved into a Limited Company, embarking on an exponential growth trajectory. Today, we are proud 
                    to be a dominant force, specializing in the secure and timely transport of petroleum products, bulk cargo, and vital project 
                    cargo.
                    <br /><br />
                    At the heart of our operations lies an unyielding dedication to safety. We espouse a profound belief
                    that the key to a successful logistics operation is not merely the transportation of goods, but the
                    safeguarding of lives and property. This unwavering focus on safety ensures that our customers
                    receive their goods in the right quality, quantity, and most crucially, within the stipulated time
                    frame. Our track record speaks for itself, as we proudly state that our association with Vivo Energy
                    Kenya and other leading oil Marketing company in Kenya has remained untarnished.
                    <br /><br />
                    Our commitment is to promise to always be committed to our motto. Dakawou Transport Limited,
                    <strong>“Doing Right all the time”</strong> which has been evident from doing our job right all the time, knowing
                    our customer&apos;s needs and expectations, hiring above average, customer-oriented employees and
                    performing our job in a safe environment
                </p>
            </div>
            <div className="flex justify-center items-center">
                <img src={dakawoutruck}
                alt="Dakawou Transport Fleet in Motion" className='rounded-xl shadow-2xl hover:scale-[1.02] transition-transform duration-500 ease-in-out border-[2px] border-b-orange'/>
            </div>
            </div>
            
            {/* <div className="bg-gray-50 p-6 rounded-lg my-10 border-t-4 border-b-orange">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Scale and Reach</h3>
            <p className="text-center text-[16px] text-gray-600 mb-6">
                With a state-of-the-art fleet of more than 250 trucks, Dakawou Transport Ltd ensures seamless delivery across the heart of Africa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-white rounded-lg shadow-md">
                <FaTruck className="text-4xl text-b-orange mx-auto mb-2" />
                <p className="font-bold text-xl">250+ Trucks</p>
                <p className="text-sm text-gray-500">Modern & Maintained Fleet</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                <FaMapMarkedAlt className="text-4xl text-b-orange mx-auto mb-2" />
                <p className="font-bold text-xl">5 Key Hubs</p>
                <p className="text-sm text-gray-500">Nairobi (HQ), Mombasa, Nakuru, Eldoret, Kisumu</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                <FaUsers className="text-4xl text-b-orange mx-auto mb-2" />
                <p className="font-bold text-xl">Leading Clients</p>
                <p className="text-sm text-gray-500">Supporting East Africa's Industry Giants</p>
                </div>
            </div>
            </div> */}

            <div className="mt-[70px] bg-gray-50 p-6 rounded-lg border-t-4 border-b-orange">
                <h3 className="text-3xl font-bold text-gray-600 mb-5 border-b pb-2">Trusted by Industry Leaders</h3>
                <p className="font-parkinsans leading-loose tracking-wide text-justify text-[16px] text-gray-600">
                    Our commitment to reliability has made us the preferred partner for a diverse and demanding portfolio 
                    of clients. We proudly transport essential products for names like: <strong>Vivo Energy Kenya Limited, Rubis Energy Uganda, Galana Energy Kenya Ltd, 
                    Bamburi Cement, Koko Networks, Dalbit Petroleum, OLA Energy</strong>, and many more. This comprehensive service portfolio fuels essential sectors—from energy and petroleum to construction and consumer networks—across the region.
                </p>
            </div>

            <div className='mt-[70px]'>
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-10 items-center">
                    <div >
                        <img src={missionImg} alt="Mission Focus" className="shadow-2xl w-full max-h-80 object-cover" />
                    </div>
                    <div >
                        <h3 className="text-3xl font-bold text-b-orange mb-4 flex items-center">
                         Our Vision and Mission
                        </h3>
                        <p className="font-parkinsans leading-loose text-[16px] text-gray-700">
                            To be the leading logistics provider in East and Central Africa, delivering safe, secure, and cost-effective 
                            transportation solutions that ensure the timely movement of critical cargo. We are committed to operational 
                            excellence, integrity, and incident-free performance, guided by strict Health, Safety, Security, and Environmental 
                            (HSSE) standards. Through innovation, reliability, and a dedication to regional growth and connectivity, we consistently 
                            exceed client expectations and transform African logistics.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      
        

        <div className="footer-cont bg-dark-g w-full">
            <Footer />
        </div>
    </div>
  )
}

export default AboutSection;