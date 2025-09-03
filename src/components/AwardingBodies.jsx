import img from '../assets/gallery/kpmg.png'
import pc1 from '../assets/gallery/stanford.png'
import pc2 from '../assets/gallery/superbrands.png'
import pc5 from '../assets/gallery/iso.png'
import pc6 from '../assets/gallery/AEO.jpeg'
import pc7 from '../assets/gallery/fts.png'
import pc9 from '../assets/gallery/iso4500.jpg'
import pc8 from '../assets/gallery/sap.png'
import lel from '../assets/pictures/lel.png'
import ler from '../assets/pictures/ler.png'
import './landing.css'

function AwardingBodies() {
  return (
    <div id='awa-bods' className="awa-bods mt-[20px] py-[20px]">
        <div className="awa-bod-heading pb-[10px] text-white">
            <h1 className='content-title font-playfair text-4xl font-bold text-center mb-[7px]'>Awarding Bodies</h1>
            <div className="val-line block m-auto w-[8%] md:w-[8.5%] border-t-[4px] border-t-[4px] border-b-orange "></div>
            <p className='awarding-text mx-[200px] py-[20px] text-center font-playfair text-[17px] tracking-[1px] font-semibold'>These esteemed organizations recognize our dedication to delivering reliable and efficient transport services. Their certifications and partnerships reflect our commitment to excellence, safety, and customer satisfaction in every journey we undertake.
           </p>
        </div>

        <div className="awarding-wrapper bg-white flex items-center gap-[20px] justify-center mx-[20px] px-[10px] rounded-md py-[30px]">
                      <div className="l-icon">
                          <img src={ler} alt="" />
                      </div>
                      <div className="awarding-gallery grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-2">
                        <img className="awarding-bd" src={pc1} alt="" /> 
                        <img className="awarding-bd" src={pc6} alt="" />
                        <img className="awarding-bd" src={img} alt="" />  
                        <img className="awarding-bd" src={pc7} alt="" />      
                        <img className="awarding-bd" src={pc5} alt="" />
                        <img className="awarding-bd" src={pc9} alt="" />
                        <img className="awarding-bd" src={pc2} alt="" /> 
                        <img className="awarding-bd" src={pc8} alt="" />
                      </div>
                      <div className="l-icon">
                          <img src={lel} alt="" />
                      </div>
        </div>
    </div>
  );
}

export default AwardingBodies;
