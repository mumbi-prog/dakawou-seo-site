import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { FiTruck } from 'react-icons/fi';
import { LiaAwardSolid, LiaUserFriendsSolid } from 'react-icons/lia';
import { TbRoute } from 'react-icons/tb';

const CounterSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const counters = [
    { id: 1, title: 'Trucks', value: 250, icon: <FiTruck className="text-5xl text-b-orange" /> },
    { id: 2, title: 'Customers', value: 22, icon: <LiaUserFriendsSolid className="text-5xl text-b-orange" /> },
    { id: 3, title: 'Years of Experience', value: 40, icon: <LiaAwardSolid className="text-5xl text-b-orange" /> },
    { id: 4, title: 'Trips', value: 1300000, icon: <TbRoute className="text-5xl text-b-orange" /> },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center bg-cover bg-fixed bg-center py-12 px-6 text-white"
      style={{
        backgroundImage: `url(https://i.pinimg.com/736x/ce/6c/26/ce6c268f3b15a58d753a13154ff8a558.jpg)`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {counters.map((counter) => (
          <div key={counter.id} className="flex flex-col items-center">
            {counter.icon}
            <h2 className="text-5xl font-bold my-3 font-parkinsans">
              {startAnimation ? <CountUp start={0} end={counter.value} duration={3} /> : 0}+
            </h2>
            <p className="text-lg font-oleo">{counter.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
