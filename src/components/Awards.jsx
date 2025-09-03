import './landing.css'

function Awards() {
  const awards = [
    "🏆 2024 Voted Superbrands East Africa’s Choice",
    "🏆 2023 Financial Times Africa’s Fastest Growing Companies 2023",
    "🏆 2022 AEO Certification by KRA Customs",
    "🏆 2021 Certification of Recognition towards GOAL Zero VIVO ENERGY UGANDA",
    "🏆 2020 Gained Professional Transporter Status, GHA VIVO ENERGY",
    "🏆 2020 Best Transporter in Bulker Operation in Health and Safety and Operational Excellence LAFARGE HOLCUM",
    "🏆 2020 Gained Professional Transporter Status, GHA VIVO ENERGY",
    "🏆 2019 KPMG TOP 100 Business Survey, 8th Overall and Industry Sector Champion - Transport",
    "🏆 2019 Safety Plus Best Safe Overall Transport Company",
    "🏆 2018 Best Transporter in Bulker Operation in Health and Safety and Operational Excellence",
    "🏆 2017 ISO 9001-2008 Quality Management Systems for Hauling of LPG, Petroleum Products, and Dry Cargo",
    "🏆 2016 Certificate of Appreciation for Outstanding Service to Vivo Energy Kenya as a Haulier",
    "🏆 2015 Certificate of Recognition 4-star of 5 and 2nd Best Transporter (Bamburi Cement)",
    "🏆 2014 Association of Kenya Insurers (AKI) Best General Cartage-Transport Company Position One Countrywide",
    "🏆 2014 Became 1st and Gained Professional Transporter Status, East Africa - Shell",
    "🏆 2013 HSSE Recognition Award for Working Safely and Achieving an Incident-Free Year (Vivo Energy)",
    "🏆 2012 Became 1st and Gained Professional Transporter Status, East Africa - Shell",
    "🏆 2010 Became 1st and Gained Professional Transporter Status, East Africa - Shell",
    "🏆 2009 Became 2nd in Seven Pillar Audit East Africa - Shell",
    "🏆 2008 Became 2nd in Seven Pillar Audit East Africa - Shell",
    "🏆 2007 Won the President’s Award - SOPAF (2nd Prize)",
    "🏆 2006 The Best Performing Contractor in the Seven Pillar Audits - Shell Uganda",
    "🏆 2005 Attained Grade A in Contractors Assessment for East Africa",
    "🏆 2003 The Best Transporter in East Africa (East Africa Hub-Addis Ababa)",
    "🏆 2002 President’s HSSE Award (International Oil Products South Zone - Shell)",
  ];
  

  return (
    <div className="awards-container mt-[30px]" id='awards'>
      <div className="awards-overlay"></div>

      <div className="awards-content relative z-10 text-white py-[15px]">
        <div className="title-heading pb-[10px]">
          <h1 className='content-title font-playfair text-4xl font-bold text-center mb-[7px]'> Awards </h1>
          <div className="goal-line block m-auto w-[8%] md:w-[8.5%] border-t-[4px] border-b-orange "></div>
        </div>

        <div className="awards-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 p-8 px-[40px] py-[20px]">
          {awards.map((award, index) => (
            <div key={index} className="award-item h-content my-[-7px] font-parkinsans text-[15px] leading-relaxed">
              <p>{award}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Awards;
