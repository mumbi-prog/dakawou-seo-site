import tr1 from "../../assets/gallery/bl9.jpg";
import tr2 from "../../assets/gallery/pic0008.png";
import { FaGasPump, FaGlobeAfrica, FaCogs } from "react-icons/fa";
import { GiCargoCrate } from "react-icons/gi";
import { AiFillSafetyCertificate } from "react-icons/ai";

import Footer from "../Footer";
import "./services.css";

function ServicesSection() {
  const serviceCards = [
    {
      id: 1,
      title: "Petroleum Products Transportation",
      description:
        "We are trusted by leading oil marketing companies for the safe and timely delivery of petroleum products, including:",
      features: [
        "Liquefied Petroleum Gas (LPG)",
        "White Oils",
        "Black Oils",
        "Packaged Lubricants & Gas",
        "Ethanol",
      ],
      icon: <FaGasPump className="text-b-orange responsive-icon" />,
    },
    {
      id: 2,
      title: "Industrial Transport & Dry Cargo",
      description:
        "We provide end-to-end logistics for a range of non-fuel products, such as:",
      features: ["Bulk Cement", "Dry Cargo", "Lubes"],
      icon: <GiCargoCrate className="text-b-orange responsive-icon" />,
    },
    {
      id: 3,
      title: "Safety & Compliance",
      description:
        "We prioritize safety and compliance in all our operations, adhering to:",
      features: [
        "ISO 9001:2015 Quality Management Standards",
        "ISO 45001:2018 Occupational Health & Safety Standards",
        "Regular driver training and vehicle maintenance",
      ],
      icon: <AiFillSafetyCertificate className="text-b-orange responsive-icon" />,
    },
    {
      id: 4,
      title: "Fleet Solutions & Custom Logistics",
      description:
        "Our fleet of over 250 specialized trucks includes:",
      features: ["Fuel Tankers", "LPG Bullet Tankers", "Container carriers"],
      icon: <FaCogs className="text-b-orange responsive-icon" />,
    },
    {
      id: 5,
      title: "Regional & Cross-Border Logistics",
      description:
        "We offer reliable cross-border transport services to neighboring countries, including:",
      features: [
        "Kenya",
        "Uganda",
        "Rwanda",
        "Burundi",
        "South Sudan",
        "Democratic Republic of Congo (DRC)",
        "Zambia",
      ],
      icon: <FaGlobeAfrica className="text-b-orange responsive-icon" />,
    },
  ];

  return (
    <div className="sec-section">
      <div
        className="relative h-[300px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${tr1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="sec-topic text-5xl font-bold pt-[60px] text-white text-center absolute inset-0 flex items-center justify-center z-10">
          Services We Provide
        </h1>
      </div>

      <div className="sec-cont font-parkinsans py-[25px] px-[70px]">
        <p className="sec-slogan text-[15px] text-center px-[50px] my-[20px]">
          At Dakawou Transport Limited, we deliver reliable, safe, and efficient
          transport and logistics solutions across Kenya and the greater East &
          Central African region. With 40+ years of experience and a fleet of
          260 trucks, we specialize in the transportation of petroleum products,
          industrial goods, and dry cargo, both locally and cross-border.
        </p>

        <div className="sec-container max-w-6xl mx-auto px-6 pb-16 grid gap-8 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="sec-card flex items-start gap-6 bg-slate-100 text-dark-g p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-dark-g hover:text-white transition-shadow duration-300 hover:scale-[1.02] transform transition-transform transition-colors"
            >
              <div className="responsive-icon shrink-0 text-4xl">{card.icon}</div>
              <div className="text-[13px]">
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className="mb-3">{card.description}</p>
                <ul className="list-disc list-inside space-y-1">
                  {card.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="extras-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-[30px]"> 
        <img src={tr2} alt="Fleet operations" className="grayscale w-full h-full object-cover hover:grayscale-0 transition duration-300"/> 
        
        <div className="extra-title bg-gray-200 flex flex-col justify-center items-left p-[40px]"> 
          <h5 className="font-semibold uppercase tracking-wider text-[14px] mb-[15px] text-dark-g">
            WHY PEOPLE CHOOSE US
          </h5> 
          
          <h4 className="capitalize text-3xl max-w-[65%]">
            Trusted logistics partner across <span className="italic">East & Central Africa</span>
          </h4> 
          
          <div className="extras-cards-container my-[20px] g font-parkinsans"> 
            <div className="extras-cards grid grid-cols-1 gap-[20px]"> 
              
              <div className="flex gap-8 items-center"> 
                <h1 className="extras-number w-[70px] h-[50px] bg-dark-g rounded-full flex items-center justify-center text-white text-lg font-bold">
                  1 
                </h1> 
                <div className="e-content">
                  <h3 className="font-semibold text-[15px]">Skilled and Professional Team</h3>
                  <p className="text-[13px]">Our experienced and highly trained staff ensure safe, efficient, and compliant transport solutions every time.</p> 
                </div>
              </div>

              <div className="flex gap-8 items-center"> 
                <h1 className="extras-number w-[70px] h-[50px] bg-dark-g rounded-full flex items-center justify-center text-white text-lg font-bold"> 
                  2
                </h1> 
                <div className="e-content"> 
                  <h3 className="font-semibold text-[15px]">Real-Time Fleet Tracking</h3> 
                  <p className="text-[13px]">Our advanced tracking systems provide 24/7 visibility and control over your cargo, ensuring reliability and transparency.</p> 
                </div> 
              </div> 
              
              <div className="flex gap-8 items-center">
                <h1 className="extras-number w-[70px] h-[50px] bg-dark-g rounded-full flex items-center justify-center text-white text-lg font-bold"> 
                  3
                </h1>
                <div className="e-content">
                  <h3 className="font-semibold text-[15px]">Timely and Efficient Service</h3> 
                  <p className="text-[13px]">We take pride in our commitment to punctual deliveries and responsive service across all regions we operate in.</p> 
                </div> 
              </div> 
            </div> 
          </div> 
        </div> 
      </div>


      <div className="footer-cont bg-dark-g w-full">
        <Footer />
      </div>
    </div>
  );
}

export default ServicesSection;
