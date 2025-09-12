import './gallery.css'
import './landing.css'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { RiArrowUpDoubleFill } from 'react-icons/ri'
import { IoIosReturnLeft } from "react-icons/io";

import img from '../assets/gallery/pic1.png'
import pc2 from '../assets/gallery/pc2.png'
import pc3 from '../assets/tbdec/pic85.jpg'
import pc4 from '../assets/tbdec/pic106.jpg'
import pc5 from '../assets/gallery/pc5.jpeg'
import pc7 from '../assets/gallery/pc7.jpeg'
import im2 from '../assets/gallery/pic002.jpg'
import im5 from '../assets/gallery/pic0005.jpg'

import pcc2 from '../assets/tbdec/pic7.jpg'
import pcc3 from '../assets/tbdec/pic202.jpg'
import pcc4 from '../assets/tbdec/pic11.jpg'
import pcc9 from '../assets/tbdec/pic29.jpg'
import pcc14 from '../assets/tbdec/pic44.jpg'
import pcc15 from '../assets/tbdec/pic45.jpg'
import pcc16 from '../assets/tbdec/pic47.jpg'
import pcc17 from '../assets/tbdec/pic158.jpg'
import pcc18 from '../assets/tbdec/b2.jpg'
import pcc20 from '../assets/tbdec/pic189.jpg'
import pcc22 from '../assets/tbdec/pic191.jpg'
import pcc23 from '../assets/tbdec/pic200.jpg'
import pcc25 from '../assets/tbdec/bilal.jpg'
import pcc26 from '../assets/tbdec/tblue.jpg'
import pcc27 from '../assets/wpics/pic44.jpg'
import pcc28 from '../assets/tbdec/pic97.jpg'
import pcc29 from '../assets/tbdec/pic67.jpg'
import pcc33 from '../assets/tbdec/gladys.jpg'
import pcc30 from '../assets/tbdec/pic48.jpg'
import pcc31 from '../assets/tbdec/pic73.jpg'
import pcc32 from '../assets/tbdec/pic145.jpg'
import pcc90 from '../assets/tbdec/pic24.jpg'

import pca1 from '../assets/gallery/pc1.jpg';
import pca2 from '../assets/wpics/pic1a.jpg';
import pca3 from '../assets/wpics/pic2.jpeg';
import pca4 from '../assets/wpics/pic2a.jpg';
import pca5 from '../assets/wpics/pic3.jpg';
import pca7 from '../assets/wpics/pic4.jpeg';
import pca9 from '../assets/wpics/pic5.jpeg';
import pca13 from '../assets/wpics/pic7.jpg';
import pca14 from '../assets/wpics/pic7a.jpg';
import pca15 from '../assets/wpics/pic8.jpeg';
import pca17 from '../assets/wpics/pic9.jpeg';
import pca19 from '../assets/wpics/pic10.jpeg';
import pca21 from '../assets/wpics/pic11.jpg';
import pca38 from '../assets/wpics/pic45.jpg';
import pca24 from '../assets/wpics/pic12a.jpeg';
import pca26 from '../assets/wpics/pic13a.jpeg';
import pca27 from '../assets/wpics/pic14.jpeg';
import pca28 from '../assets/wpics/pic14a.jpg';
import pca29 from '../assets/wpics/pic15.jpeg';
import pca33 from '../assets/wpics/pic17a.jpg';
import pca36 from '../assets/wpics/pic20a.jpg';
import pca37 from '../assets/wpics/pic21.jpg';
import pca42 from '../assets/wpics/pic55.jpg';

const galleryImages = [
  img, pc7, pcc30, pca29, pc2, pca1, pcc16, pcc27, pcc28, pca21, im2, pcc3, pca13,
  pcc23, pcc4, pca36, pca7, pca28, pcc22, pcc20, pca4, pc5, pcc2,
  pcc25, pcc15, pca9, pca19, pcc31, pca2, pcc90, pca3, pca5, pc4,
  pcc17, pca14, pcc26, pca33, pca17, pca27, pca24, pcc9, pcc29, pca37, pca42, pcc33, pca15, pca26, pcc14, im5, pca38,
  pcc32, pc3, pcc18
]

function Gallery() {
  return (
    <div>
      {/* <NavComp /> */}
      <div className="gallery-container bg-cover bg-center relative overflow-hidden h-[60vh] z-[-20]">
        <div className="gallery-overlay absolute inset-0 bg-black/60"></div>
        <h1 id='gset-title' className="text-5xl font-bold text-white text-center absolute inset-0 flex items-center justify-center z-10">
          Our Gallery
        </h1>
      </div>

      <div className='mx-[20px] mt-[-140px] z-40 bg-white p-[13px] text-[15px]'>
        <ul>
          <Link to='/' className="flex items-center font-parkinsans mb-[20px] text-b-orange font-semibold hover:underline hover:translate-x-2 transition duration-300">
           <span><IoIosReturnLeft style={{ fontSize: '20px' }} /></span> 
            <span className='pl-[13px]'>Home</span>
          </Link>
        </ul>

        <div className="img-gallery grid grid-cols-1 md:grid-cols-4 gap-4">
          {galleryImages.map((src, i) => (
            <div key={i} className="group overflow-hidden relative w-full h-[200px] rounded">
              <img
                src={src}
                alt={`gallery-${i}`}
                className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-125"
              />
            </div>
          ))}
        </div>

        <div className="back-cont">
          <Link
            to='/gallerysection'
            className="flex items-center justify-end m-[20px] text-b-orange hover:text-orange-500 hover:font-semibold hover:underline hover:translate-x-1 transition duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('gset-title').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            <RiArrowUpDoubleFill style={{ fontSize: '22px' }} />
            <span>Back to top</span>
          </Link>
        </div>
      </div>

      <div className="footer-cont bg-dark-g w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Gallery

