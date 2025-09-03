import mission from '../assets/pictures/mission.jpg';
import vision from '../assets/pictures/growth.jpg';
import './landing.css'

function MissionVision() {
  return (
    <div id="mv" className="mv-container relative bg-gray-200 mb-[20px] py-[40px] w-full">
      <div className="content-container mx-[60px] py-[40px] flex flex-col items-stretch">
        <div className="mv-title-container">
          <h2 className="font-parkinsans text-4xl font-semibold text-left">
            Our Mission <br />& Vision
          </h2>
          <div className="border-t-[7px] border-b-orange w-[180px] mb-[5px]"></div>
          <div className="border-t-[2px] border-b-orange w-[180px] mb-8"></div>
        </div>

       <div className="mv-cards">
            <div className="mv-container1 font-merriweather absolute right-0 top-[-30px] flex justify-end flex-row gap-8 w-[800px] bg-dark-g rounded-l-full rounded-none mt-[100px]">
            <div className="flex-shrink-0 w-40 h-40 rounded-full overflow-hidden bg-gray-500 mr-auto">
                <img src={mission} alt="Mission" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <div className="mv-text w-[600px] p-[10px] text-white">
                <h3 className="font-playfair text-3xl font-bold mb-2 tracking-[5px] italic">Mission</h3>
                <p className="font-parkinsans text-[15px] leading-loose">Dedicated to transforming African logistics with safety, efficiency and reliability, generating, growth and connectivity.</p>
            </div>
            </div>

            <div className="mv-container2 left-0 flex flex-row gap-8 w-[800px] bg-dark-g rounded-r-full rounded-none mt-[100px] ml-[-60px]">
            <div className="mv-text text-white w-[600px] py-[10px] pl-[40px]">
                <h3 className="font-playfair text-3xl font-bold mb-2 tracking-[5px] italic">Vision</h3>
                <p className="font-parkinsans text-[15px] leading-loose">To be the leading transportation company in East and Central Africa region based on Health, Safety, Security and Environment (HSSE) Policy guidelines with incident free operations.</p>
            </div>
            <div className="flex-shrink-0 w-40 h-40 rounded-full overflow-hidden bg-gray-500 ml-auto">
                <img src={vision} alt="Vision" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            </div>
       </div>
      </div>
    </div>
  );
};

export default MissionVision;