import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight} from "lucide-react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

function Testimonials() {
  const testimonials = [
    {
      name: "Rubis Energy",
      role: "Client",
      review:
        "Dakawou Transport Ltd has consistently delivered exceptional service. Their commitment to safety and efficiency is commendable, making them a trusted partner in our supply chain.",
      stars: 5,
    },
    {
      name: "Vivo Energy Kenya",
      role: "Client",
      review:
        "Dakawou Transport Ltd has been a reliable partner for our logistics needs. Their professionalism and timely deliveries have greatly contributed to our operations.",
      stars: 5,
    },
    {
      name: "Ola Energy",
      role: "Client",
      review:
        "We have been working with Dakawou Transport Ltd for several years, and they have consistently exceeded our expectations. Their dedication to customer satisfaction is evident in every interaction.",
      stars: 5,
    },
    {
      name: "Dalbit Petroleum",
      role: "Client",
      review:
        "Dakawou Transport Ltd is a top-notch logistics provider. Their attention to detail and commitment to safety make them a standout in the industry.",
      stars: 5,
    },
    {
      name: "Bamburi Cement",
      role: "Client",
      review:
        "Dakawou Transport Ltd has been instrumental in ensuring the smooth transportation of our products. Their team is professional, reliable, and always goes the extra mile.",
      stars: 4,
    },
    {
      name: "Galana Energy Kenya",
      role: "Client",
      review:
        "We highly recommend Dakawou Transport Ltd for their exceptional service and dedication to excellence. They have been a valuable partner in our logistics operations.",
      stars: 4,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(
    window.innerWidth <= 700 ? 1 : 2
  );

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth <= 700 ? 1 : 2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = testimonials.length - itemsPerSlide + 1;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
         
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center">
      
        <div className="md:col-span-1 flex flex-col items-start justify-center">
          <BiSolidQuoteAltLeft size={60} className="text-gray-400 mb-4 " />
          <div className="content-div mb-5">
            <h2 className="text-4xl md:text-3xl content-title capitalize font-playfair font-bold text-gray-800 mb-1">
              What our clients say
            </h2>
            <div className="title-line block m-auto w-17%] md:w-[14.5%] border-t-[4px] border-b-orange "></div>
          </div>
          <p className="text-[12px] italic text-gray-900 text-center mb-6">
            Trusted journeys, proven performance.
          </p>
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border hover:bg-gray-100"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border hover:bg-gray-100"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div className="md:col-span-2 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform:
                window.innerWidth <= 550
                  ? `translateX(-${current * 40}%)`
                  : `translateX(-${current * 28}%)`,
              width:
                window.innerWidth <= 550
                  ? `${testimonials.length * 40}%`
                  : `${testimonials.length * 28}%`,
            }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="px-2 flex-shrink-0 font-parkinsans text-[14px] leading-loose"
                style={{
                  width: window.innerWidth <= 700 ? "40%" : "28%",  
                }}
              >
                <div className="bg-white rounded-2xl shadow p-6 text-left">
                   <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500 mb-4">{t.role}</p>
 
                  <div className="flex mb-2">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <span key={i} className="text-green-500 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
 
                
                  <p className="text-gray-700 leading-relaxed">{t.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
