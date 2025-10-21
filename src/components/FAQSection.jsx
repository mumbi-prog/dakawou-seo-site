import { useState } from 'react';
import FAQItem from './FAQItem';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqItems = [
    {
      question: "What logistics and transport services does Dakawou Transport Ltd offer?",
      answer: "Dakawou Transport Ltd provides specialized logistics solutions for petroleum products, LPG, ethanol, lubricants, bulk cement, and project cargo. We serve both local and regional routes across East, Central, and Southern Africa."
    },
    {
      question: "Why should I choose Dakawou Transport Ltd over other logistics companies?",
      answer: "With over three decades of industry experience, a fleet of 250+ trucks, pioneering technological advancements, and ISO certifications (9001:2015 and 45001:2018), Dakawou stands out for operational excellence, safety, reliability, and real-time supply chain visibility."
    },
    {
      question: "How does Dakawou ensure safety in transporting materials?",
      answer: "We strictly follow HSSEQ standards and conduct intensive training for drivers. Our vehicles undergo routine safety inspections, and we apply advanced risk management protocols during loading, offloading, and transit."
    },
    {
      question: "Who are Dakawou Transport's main clients?",
      answer: "Our valued partners include Vivo Energy, Rubis Energy, Bamburi Cement, Galana Energy, Ola Energy and Koko Networks, among others, delivering essential products safely and efficiently."
    },
      {
      question: "How does Dakawou Transport leverage technology to enhance efficiency and transparency?",
      answer: "We utilize GPS tracking, route optimization software, and real-time reporting systems to monitor our fleet throughout operational hours. This allows for precise delivery timelines, rapid response, and full visibility into the supply chain for our clients."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 mt-[10px] mb-[30px] bg-white rounded-lg shadow-sm ">
      <h2 className="font-playfair text-4xl font-bold text-center mb-[7px] text-center">
        Frequently Asked Questions
      </h2>
      <div className="goal-line block m-auto w-[8%] border-t-[4px] border-b-orange "></div>
      
      <div className="space-y-3 mt-[15px] font-parkinsans text-[14px]">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;