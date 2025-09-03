import afimage from '../assets/pictures/africamap.png'
import './landing.css'

function Coverage() {
  return (
    <div id='coverage' className="coverage flex px-[40px] bg-gray-200 items-center justify-center mb-[40px]">

        <div className="coverage w-[140%]">
          <div className="title-heading pb-[30px]">
              <h1 className='content-title font-playfair text-4xl font-bold text-center mb-[7px] tracking-[2px]'> Dedicated and Driven To Deliver </h1>
              <div className="val-line block m-auto w-[8%] md:w-[8.5%] border-t-[4px] border-t-[4px] border-b-orange "></div>
          </div>
          <p className="text-center font-parkinsans text-[15px] leading-loose px-[20px] md:px-[40px]">
              At Dakawou Transport Ltd., we are proud to serve and connect communities across East, Central, and Southern Africa.  
              Our extensive coverage spans <span className="font-semibold text-dark-g">Kenya</span>, <span className="font-semibold text-dark-g">Uganda</span>, 
              <span className="font-semibold text-dark-g">Zambia</span>, <span className="font-semibold text-dark-g">Rwanda</span>, 
              <span className="font-semibold text-dark-g">South Sudan</span>, and <span className="font-semibold text-dark-g">Congo</span>.  
              With a commitment to excellence and reliability, we ensure seamless transportation services, bringing vital products to where they are needed most. 
              Your trusted partner in connecting Africa.
          </p>
        </div>

        <div className="cov-img w-full">
            <img src={afimage} alt="" />
        </div>
    </div>
  )
}

export default Coverage;