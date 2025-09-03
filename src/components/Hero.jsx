import { useState, useEffect } from 'react';
import slide1 from '../assets/pictures/s1.jpg';
import slide2 from '../assets/pictures/tr2.jpg';
import slide3 from '../assets/pictures/pichero.jpg';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const originalSlides = [
    { image: slide1, heading: 'Driving Growth and Innovation in Transport', slogan: 'From a single truck in 1985 to revolutionizing transport across East, Central, and Southern Africa.' },
    { image: slide2, heading: 'Serving Industry Leaders With Excellence', slogan: 'Transporting petroleum, bulk cargo, and project cargo to clients like Vivo Energy, Rubis Energy, and more.' },
    { image: slide3, heading: 'A Fleet That Delivers Across The Region', slogan: 'With over 250 trucks and strategically located branches, we ensure seamless delivery across Kenya and beyond.' },
  ];

  const slides = [
    originalSlides[originalSlides.length - 1],
    ...originalSlides,
    originalSlides[0],
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setCurrentSlide((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setCurrentSlide((prev) => prev - 1);
    setIsTransitioning(true);
  };

  useEffect(() => {
    if (currentSlide === slides.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
      }, 1000);
    } else if (currentSlide === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(slides.length - 2);
      }, 1000);
    } else {
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  }, [currentSlide, slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      <div
        className="relative w-full h-full flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent)',
                opacity: index === 1 ? 0.2 : index === 2 ? 0.5 : index === 3 ? 1 : 0.8,
              }}
            ></div>
            <div
              className={`phrase-cont absolute top-[35%] left-[5%] w-[45%] transform -translate-y-1/2 text-white ${
                currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } transition-all duration-1000`}
              style={{ textAlign: 'left' }}
            >
              <h1 className="text-[55px] font-bold mb-4 font-playfair leading-[65px]">{slide.heading}</h1>
              <p className="text-[23px] font-oleo italic leading-[34px]">{slide.slogan}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 hover:scale-110 transition-all duration-300"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 hover:scale-110 transition-all duration-300"
      >
        &#10095;
      </button>
    </div>
  );
}

export default Hero;


// import { useState, useEffect, useRef } from 'react';

// import slide1 from '../assets/pictures/s1.jpg';
// import slide2 from '../assets/pictures/tr2.jpg';
// import slide3 from '../assets/pictures/pichero.jpg';

// function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(1);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const slideContainerRef = useRef<HTMLDivElement>(null);

//   const originalSlides = [
//     { image: slide1, heading: 'Driving Growth and Innovation in Transport', slogan: 'From a single truck in 1985 to revolutionizing transport across East, Central, and Southern Africa.' },
//     { image: slide2, heading: 'Serving Industry Leaders With Excellence', slogan: 'Transporting petroleum, bulk cargo, and project cargo to clients like Vivo Energy, Rubis Energy, and more.' },
//     { image: slide3, heading: 'A Fleet That Delivers Across The Region', slogan: 'With over 250 trucks and strategically located branches, we ensure seamless delivery across Kenya and beyond.' },
//   ];

//   const slides = [
//     originalSlides[originalSlides.length - 1],
//     ...originalSlides,
//     originalSlides[0],
//   ];

//   const handleTransitionEnd = () => {
//     if (currentSlide === slides.length - 1) {
//       setIsTransitioning(false);
//       setCurrentSlide(slides.length - 2);
//     } else {
//       setIsTransitioning(false);
//     }
//   };

//   const nextSlide = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentSlide((prev) => prev + 1);
//   };

//   const prevSlide = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentSlide((prev) => prev - 1);
//   };

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 7000);
//     return () => clearInterval(timer);
//   }, [isTransitioning]);

//   return (
//     <div id="home" className="relative w-full h-screen overflow-hidden">
//       <div
//         ref={slideContainerRef}
//         className="relative w-full h-full flex"
//         style={{
//           transform: `translateX(-${currentSlide * 100}%)`,
//           transition: isTransitioning
//             ? 'transform 800ms cubic-bezier(0.33, 1, 0.68, 1)'
//             : 'none',
//         }}
//         onTransitionEnd={handleTransitionEnd}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="w-full h-full flex-shrink-0 relative">
//             <img
//               src={slide.image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//               loading={index <= 2 ? 'eager' : 'lazy'}
//             />
//             <div
//               className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"
//               style={{
//                 opacity:
//                   index === currentSlide
//                     ? 0.8
//                     : index === currentSlide + 1 || index === currentSlide - 1
//                     ? 0.5
//                     : 0.2,
//                 transition: 'opacity 800ms ease-in-out',
//               }}
//             ></div>
//             <div
//               className={`absolute top-[35%] left-[5%] w-[45%] transform text-white transition-all duration-1000 ease-out ${
//                 currentSlide === index
//                   ? 'translate-y-0 opacity-100 scale-100'
//                   : 'translate-y-10 opacity-0 scale-95'
//               }`}
//               style={{ textAlign: 'left' }}
//             >
//               <h1 className="text-4xl md:text-[55px] font-bold mb-4 leading-tight md:leading-[65px]">
//                 {slide.heading}
//               </h1>
//               <p className="text-lg md:text-[23px] italic leading-relaxed md:leading-[34px]">
//                 {slide.slogan}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:scale-110 transition-all duration-300"
//         aria-label="Previous slide"
//       >
//         &#10094;
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:scale-110 transition-all duration-300"
//         aria-label="Next slide"
//       >
//         &#10095;
//       </button>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
//         {originalSlides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               if (!isTransitioning) {
//                 setIsTransitioning(true);
//                 setCurrentSlide(index + 1);
//               }
//             }}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               currentSlide === index + 1 ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Hero;





