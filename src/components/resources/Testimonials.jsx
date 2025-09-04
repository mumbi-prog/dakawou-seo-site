// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// function Testimonials() {
//   const testimonials = [
//     {
//       name: "Karan",
//       role: "Customer",
//       review:
//         "My buying experience is so nice, and received me very politely. Riding experience is also very good. Very good performance. I never experienced such a kind of performance. Very good service.",
//       stars: 5,
//     },
//     {
//       name: "Catherine",
//       role: "Customer",
//       review:
//         "I love my e-bike and the customer service is excellent. They respond in a timely manner with loads of information about e-bikes, accessories and maintenance information.",
//       stars: 5,
//     },
//     {
//       name: "Peter",
//       role: "Customer",
//       review:
//         "Visited EO store. Best place, particularly welds, looked very nice and I took small test ride within the parking lot area. We were also happy with customization after sales and overall satisfied.",
//       stars: 5,
//     },
//     {
//       name: "Amira",
//       role: "Customer",
//       review:
//         "Great service and amazing support! The team went above and beyond to ensure I had everything I needed. Highly recommend!",
//       stars: 5,
//     },
//     {
//       name: "James",
//       role: "Customer",
//       review:
//         "The product quality exceeded my expectations. Smooth process from purchase to delivery. Would definitely buy again.",
//       stars: 4,
//     },
//   ];

//   const [current, setCurrent] = useState(0);

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section className="bg-gray-50 py-12 px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Top Header */}
//         <div className="flex items-center justify-between mb-10">
//           <h2 className="text-2xl font-semibold text-gray-800">
//             What our customers are saying
//           </h2>
//           <div className="flex gap-2">
//             <button
//               onClick={prevSlide}
//               className="p-2 rounded-full border hover:bg-gray-100"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="p-2 rounded-full border hover:bg-gray-100"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Review Cards */}
//         <div className="grid md:grid-cols-3 gap-6">
//           {testimonials
//             .slice(current, current + 3) // show 3 reviews at a time
//             .map((t, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow p-6 text-left"
//               >
//                 {/* Stars */}
//                 <div className="flex mb-2">
//                   {Array.from({ length: t.stars }).map((_, i) => (
//                     <span key={i} className="text-green-500 text-lg">
//                       ★
//                     </span>
//                   ))}
//                 </div>

//                 {/* Name + Role */}
//                 <p className="font-semibold">{t.name}</p>
//                 <p className="text-sm text-gray-500 mb-4">{t.role}</p>

//                 {/* Review */}
//                 <p className="text-gray-700 leading-relaxed">{t.review}</p>
//               </div>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;


import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Karan",
      role: "Customer",
      review:
        "My buying experience is so nice, and received me very politely. Riding experience is also very good. Very good performance. I never experienced such a kind of performance. Very good service.",
      stars: 5,
    },
    {
      name: "Catherine",
      role: "Customer",
      review:
        "I love my e-bike and the customer service is excellent. They respond in a timely manner with loads of information about e-bikes, accessories and maintenance information.",
      stars: 5,
    },
    {
      name: "Peter",
      role: "Customer",
      review:
        "Visited EO store. Best place, particularly welds, looked very nice and I took small test ride within the parking lot area. We were also happy with customization after sales and overall satisfied.",
      stars: 5,
    },
    {
      name: "Amira",
      role: "Customer",
      review:
        "Great service and amazing support! The team went above and beyond to ensure I had everything I needed. Highly recommend!",
      stars: 5,
    },
    {
      name: "James",
      role: "Customer",
      review:
        "The product quality exceeded my expectations. Smooth process from purchase to delivery. Would definitely buy again.",
      stars: 4,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(
    window.innerWidth < 768 ? 1 : 2
  );

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        {/* Left side: title + buttons */}
        <div className="md:col-span-1 flex flex-col items-start">
          <Quote size={48} className="text-gray-400 mb-4" />
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            What our customers are saying
          </h2>
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

        {/* Right side: carousel */}
        <div className="md:col-span-2 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
              width: `${totalSlides * 100}%`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className={`grid gap-6 w-full ${
                  itemsPerSlide === 2
                    ? "md:grid-cols-2 grid-cols-1"
                    : "grid-cols-1"
                } flex-shrink-0 px-1`}
              >
                {testimonials
                  .slice(
                    slideIndex * itemsPerSlide,
                    slideIndex * itemsPerSlide + itemsPerSlide
                  )
                  .map((t, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow p-6 text-left"
                    >
                      {/* Stars */}
                      <div className="flex mb-2">
                        {Array.from({ length: t.stars }).map((_, i) => (
                          <span key={i} className="text-green-500 text-lg">
                            ★
                          </span>
                        ))}
                      </div>

                      {/* Name + Role */}
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-gray-500 mb-4">{t.role}</p>

                      {/* Review */}
                      <p className="text-gray-700 leading-relaxed">
                        {t.review}
                      </p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
