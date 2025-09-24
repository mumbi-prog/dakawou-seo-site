import tr1 from "../assets/pictures/tr2.jpg";
import { FaGasPump } from "react-icons/fa";
import { GiCargoCrate } from "react-icons/gi";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";

function ServicesSection() {
  const serviceCards =[
    {
      id: 1,
      title: "Petroleum Products Transportation",
      description: "We are trusted by leading oil marketing companies for the safe and timely delivery of petroleum products, including:",
      features: [
        "Liquefied Petroleum Gas (LPG)",
        "White Oils",
        "Black Oils",
        "Packaged Lubricants & Gas",
        "Ethanol",
      ],
      icon: <FaGasPump className="text-5xl text-b-orange" />
    },
    {
      id: 2,
      title: "Industrial Transport & Dry Cargo",
      description: "We provide end-to-end logistics for a range of non-fuel products, such as:",
      features: [
        "Bulk Cement",
        "Dry Cargo",
        "Lubes"
      ],
      icon: <GiCargoCrate className="text-5xl text-b-orange" />
    },
    {
      id: 3,
      title: "Safety & Compliance",
      description: "We prioritize safety and compliance in all our operations, adhering to:",
      features: [
        "ISO 9001:2015 Quality Management Standards",
        "ISO 45001:2018 Occupational Health & Safety Standards",
        "Regular driver training and vehicle maintenance",
      ],
      icon: <AiFillSafetyCertificate className="text-5xl text-b-orange" />
    }, 
    {
      id: 4,
      title: "Fleet Solutions & Custom Logistics",
      description: "Our fleet of over 250 specialized trucks includes:",
      features: [
        "Fuel Tankers",
        "LPG Bullet Tankers",
        "Container carriers",
      ],
      icon: <FaCogs className="text-5xl text-b-orange" />
    },
    
    {
      id: 5,
      title: "Regional & Cross-Border Logistics",
      description: "We offer reliable cross-border transport services to neighboring countries, including:",
      features: [
        "Kenya",
        "Uganda",
        "Rwanda",
        "Burundi",
        "South Sudan",
        "Democratic Republic of Congo (DRC)",
        "Zambia",
      ],
      icon: <FaGlobeAfrica className="text-5xl text-b-orange" />
    },
  ];
  return (
    <div className="service-section">
      <div className="relative h-64 w-full bg-cover bg-center" style={{
              backgroundImage: `url(${tr1})`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h1 className="text-5xl font-bold text-white text-center absolute inset-0 flex items-center justify-center z-10">
              Services We Provide
            </h1>
      </div>

      <div className="services-container font-parkinsans py-[25px] px-[70px]">
        
         <p className="text-[16px] text-center px-[50px] my-[20px]">
            At Dakawou Transport Limited, we deliver reliable, safe, and efficient transport and logistics solutions across
             Kenya and the greater East & Central African region. With 40+ of experience and a fleet of 260 trucks, 
             we specialize in the transportation of petroleum products, 
            industrial goods, and dry cargo, both locally and cross-border.
          </p>


        <div className="max-w-6xl mx-auto px-6 pb-16 grid gap-8 md:grid-cols-2">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="flex items-start gap-6 bg-slate-100 text-dark-g p-6 rounded-xl text-dark-g shadow-md hover:shadow-xl hover:bg-dark-g hover:text-white transition-shadow duration-300 hover:scale-[1.02] transform transition-transform transition-colors"
            >
              <div className="shrink-0">{card.icon}</div>
              <div className="text-[13px]">
                <h2 className="text-xl font-semibold mb-2 ">{card.title}</h2>
                <p className="mb-3">{card.description}</p>
                <ul className="list-disc list-inside  space-y-1">
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
        <img src={tr1} alt="" className="grayscale hover:grayscale-0 transition duration-300"/>
        <div className="extra-title bg-gray-200 flex flex-col justify-center items-left px-[40px]">
          <h5 className="font-semibold uppercase tracking-wider text-[14px] mb-[15px] text-dark-g">WHY PEOPLE CHOOSE US</h5>
          <h4 className="capitalize text-3xl max-w-[60%]">Lorem ipsum dolor sit <span className="italic">amet consectetur</span> </h4>

          <div className="extras-cards-container my-[20px] g font-parkinsans ">
            <div className="extras-cards grid grid-cols-1 gap-[20px]">
              
              <div className="flex gap-8 items-center">
                  <h1 className="w-[70px] h-[50px] bg-dark-g rounded-full flex items-center justify-center text-white text-lg font-bold">
                    1
                  </h1>
                  <div className="e-content">
                    <h3 className="font-semibold text-[15px]">Lorem ipsum dolor sit amet consectetur</h3>
                    <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorum et distinctio.</p>
                  </div>
              </div>
              <div className="flex gap-8 items-center">
                  <h1 className="w-[70px] h-[50px] bg-dark-g rounded-full flex items-center justify-center text-white text-lg font-bold">
                    2
                  </h1>
                  <div className="e-content">
                    <h3 className="font-semibold text-[15px]">Lorem ipsum dolor sit amet consectetur</h3>
                    <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorum et distinctio.</p>
                  </div>
              </div>
              <div className="flex gap-8 items-center">
                  <h1 className="w-[70px] h-[50px] bg-dark-g rounded-full flex items-center justify-center text-white text-lg font-bold">
                    3
                  </h1>
                  <div className="e-content">
                    <h3 className="font-semibold text-[15px]">Lorem ipsum dolor sit amet consectetur</h3>
                    <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorum et distinctio.</p>
                  </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ServicesSection