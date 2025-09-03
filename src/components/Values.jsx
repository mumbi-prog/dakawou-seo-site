import { AiOutlineTeam } from 'react-icons/ai';
import { BsExclamationTriangle } from 'react-icons/bs';
import { LuShieldCheck, LuUserCheck } from 'react-icons/lu';
import { MdStarBorderPurple500 } from 'react-icons/md';
import './landing.css'

function Values() {
  return (
    <div id='values' className='values mt-[40px] flex flex-col items-center justify-center'>
        <div className="title-heading pb-[20px]">
            <h1 className='content-title font-playfair text-4xl font-bold text-center mb-[7px]'> Our Core Values </h1>
            <div className="val-line block m-auto w-[30%] border-t-[4px] border-t-[4px] border-b-orange "></div>
        </div>

        <div className="values-container mt-[10px] flex flex-wrap justify-center items-center gap-x-[25px] gap-y-[20px] rounded-md">
            <div className="group bg-s-dark-g value-card flex flex-col items-center py-[30px] px-[30px] space-y-[10px] text-white transition-transform duration-300 transform hover:scale-105  hover:bg-dark-g rounded-md">
                <span className="text-4xl px-[10px] transition-transform duration-300 transform hover:scale-105  ">
                    <LuUserCheck />
                </span>
                <h3 className="text-lg font-semibold">Integrity</h3>
            </div>

            <div className="group value-card bg-s-dark-g flex flex-col items-center py-[30px] px-[30px] space-y-[10px] text-white transition-transform duration-300 transform hover:scale-105  hover:bg-dark-g rounded-md">
              <span className="text-4xl px-[10px] transition-transform duration-300 transform hover:scale-105 ">
                <BsExclamationTriangle />
              </span>
              <h3 className="text-lg font-semibold">Safety</h3>
            </div>

            <div className="group value-card bg-s-dark-g flex flex-col items-center py-[30px] px-[30px] space-y-[10px] text-white transition-transform duration-300 transform hover:scale-105  hover:bg-dark-g rounded-md">
              <span className="text-4xl px-[10px] transition-transform duration-300 transform hover:scale-105 ">
                <LuShieldCheck />
              </span>
              <h3 className="text-lg font-semibold ">Reliability</h3>
            </div>

            <div className="group value-card bg-s-dark-g flex flex-col items-center py-[30px] px-[30px] space-y-[10px] text-white transition-transform duration-300 transform hover:scale-105  hover:bg-dark-g rounded-md">
              <span className="text-4xl px-[10px] transition-transform duration-300 transform hover:scale-105 ">
                <AiOutlineTeam />
              </span>
              <h3 className="text-lg font-semibold ">Teamwork</h3>
            </div>

            <div className="group value-card bg-s-dark-g flex flex-col items-center py-[30px] px-[30px] space-y-[10px] text-white transition-transform duration-300 transform hover:scale-105  hover:bg-dark-g rounded-md">
              <span className="text-4xl px-[10px] transition-transform duration-300 transform hover:scale-105 ">
                <MdStarBorderPurple500 />
              </span>
              <h3 className="text-lg font-semibold ">Customer Satisfaction</h3>
            </div>
        </div>

    </div>
  )
}

export default Values