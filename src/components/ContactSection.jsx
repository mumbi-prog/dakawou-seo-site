import Contact from './Contact';
import tr1 from "../assets/pictures/ph7.jpg";
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <div className="Ct-sec"> 
      <div className="contact-container bg-cover bg-center relative overflow-hidden h-[50vh] z-[-20]" style={{ backgroundImage: `url(${tr1})` }} >
        <div className="contact-overlay absolute inset-0 bg-black/60"></div>
                
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4">
                <h1 className="sec-topic text-6xl md:text-5xl [@media(max-width:770px)]:text-[40px] font-extrabold text-white text-center leading-tight mb-4">
                    Contact Us
                </h1>
                <div className="text-center text-white text-md font-semibold tracking-wide">
                    <Link to='/' className="font-semibold text-white  hover:text-b-orange transition duration-300">
                        Home
                    </Link>
                    <span className="mx-2 font-light opacity-80">|</span>
                    <span className="font-bold text-b-orange">Contact Section</span>
                </div>
            </div>
      </div>

      <section className="mx-[30px] mt-[-90px] z-40 bg-white shadow-xl rounded-lg py-[30px] px-[50px] md:p-[70px]">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">

          <div className="rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.741524710743!2d36.89386257528916!3d-1.3311821356774864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f126e67fec1f3%3A0xe2330a698bde40e7!2sDakawou%20Transport%20Ltd.%20Head%20Office!5e0!3m2!1sen!2ske!4v1758615897899!5m2!1sen!2ske"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Contact/>
    </div>
  );
};

export default ContactSection;
