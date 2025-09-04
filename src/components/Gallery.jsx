import pic1 from '../assets/gallery/pc1.jpeg'
import pic2 from '../assets/wpics/pic11a.jpeg'
import pic3 from '../assets/gallery/pc7.jpeg'
import pic4 from '../assets/wpics/pic1.jpeg'
import pic5 from '../assets/gallery/pic0005.jpg'
import pic6 from '../assets/gallery/pic001.jpg'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const images = [pic1, pic2, pic3, pic4, pic5, pic6];

function Gallery() {
  return (
    <div id='gallery' className="main-gallery-container mt-[20px] mx-[20px] py-[20px]">
      <div className="title-heading pb-[10px]">
        <h1 className='content-title font-playfair text-5xl font-bold text-center mb-[7px]'>Our Gallery</h1>
        <div className="val-line block m-auto w-[8%] md:w-[8.5%] border-t-[4px] border-b-orange"></div>
      </div>

      <div className="gallery-wrapper flex flex-wrap justify-center gap-x-[30px] gap-y-[35px] py-[10px]">
        {images.map((image, index) => (
          <div
            key={index}
            className="gal-image w-[300px] h-[200px] rounded-md overflow-hidden relative group shadow-md"
          >
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-500 ease-out group-hover:scale-110"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        ))}
      </div>

      <button className="btn-link block mx-auto mt-[30px] mb-[15px]">
        <Link
          to="/gallerysection"
          className="g-more px-[40px] flex rounded-full items-center justify-between bg-orange-600 font-semibold p-[5px] transition duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 hover:shadow-lg hover:shadow-orange-500/50 hover:text-white group"
        >
          <p className="mr-[10px] text-white font-oleo transition duration-300 transform group-hover:translate-x-1">
            Explore Gallery
          </p>
          <span className="underline flex items-center justify-center">
            <MdKeyboardDoubleArrowRight
              className="w-[30px] h-auto font-bold p-[5px] text-white transition duration-300 transform group-hover:translate-x-3"
            />
          </span>
        </Link>
      </button>
    </div>
  );
}

export default Gallery;
