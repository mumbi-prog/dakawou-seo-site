import koko from '../assets/pictures/koko.png';
import dalbit from '../assets/pictures/dlabit.png';
import galana from '../assets/pictures/galana.png';
import vivo from '../assets/pictures/vivo.png';
import ola from '../assets/pictures/ola.png';
import rubis from '../assets/pictures/rubis.png';
import bamburi from '../assets/pictures/bamburi.png';
import mgas from '../assets/pictures/mgas.png';
import boc from '../assets/pictures/boc.png';
import './partners.css';

function Partners() {
  const partners = [vivo, dalbit, galana, ola, rubis, bamburi, mgas, koko, vivo, dalbit, galana, ola, boc];

  return (
    <div
      id="partners"
      className="partners relative w-full overflow-hidden py-[20px] my-[15px]"
    >
      <div className="title-heading pb-[10px]">
        <h1 className="content-title font-playfair text-4xl font-bold text-center mb-[7px]">
          Our Valued Partners
        </h1>
        <div className="goal-line block m-auto w-[8%] md:w-[8.5%] border-t-[4px] border-b-orange"></div>
      </div>
      <div className="carousel-wrapper relative">
        <div className="carousel-track flex">
          {partners.concat(partners).map((partner, index) => (
            <img
              key={index}
              src={partner}
              alt={`Partner ${index + 1}`}
              className="carousel-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;

