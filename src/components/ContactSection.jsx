import Contact from './Contact';

const ContactSection = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans antialiased text-gray-800"> 
      <div className="relative h-64 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/cf/57/a1/cf57a135fe20cdf083fd09cf713d26d0.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-5xl font-bold text-white text-center absolute inset-0 flex items-center justify-center z-10">
            Contact Us
        </h1>
      </div>

      <section className="py-20">
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
