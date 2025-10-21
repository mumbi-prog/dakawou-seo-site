// import Footer from './../Footer'
// import NavComp from './../NavComp'
// import './../abt.css'
// import { Link } from 'react-router-dom'
// import { IoIosReturnLeft } from 'react-icons/io'

// function Terms() {
//   return (
//     <div>
//       <NavComp />
//       <div className="about-container bg-cover bg-center relative overflow-hidden h-[60vh] z-[-20]">
//         <div className="about-overlay absolute inset-0 bg-black/60"></div>
//         <h1 className="text-5xl font-bold text-white text-center absolute inset-0 flex items-center justify-center z-10">
//           Terms & Conditions
//         </h1>
//       </div>

//       <div className="mx-[20px] mt-[-70px] z-40 bg-white p-[20px]">
//         <ul>
//           <Link
//             to="/"
//             className="flex items-center font-parkinsans mb-[20px] text-b-orange font-semibold hover:font-semibold hover:underline hover:translate-x-2 transition duration-300 "
//           >
//             <IoIosReturnLeft style={{ fontSize: '20px' }} />{' '}
//             <span className="pl-[13px] text-[15px]">Home</span>
//           </Link>
//         </ul>

//         <div className="abt-sec grid grid-cols-1 gap-[20px] pt-[8px] my-[15px]">
//           <p className="font-parkinsans leading-relaxed tracking-wide text-justify text-[13px] mb-6">
//             Please read these Terms & Conditions carefully before using Dakawou
//             Transport services. By accessing or using our services, you agree to
//             comply with the following:
//           </p>

//           {/* Section 1 */}
//           <div>
//             <h2 className="text-xl font-bold mb-2">1. Use of Services</h2>
//             <p className="font-parkinsans text-[13px] leading-relaxed">
//               Our transport and logistics services must only be used for lawful
//               purposes. Customers are expected to provide accurate information
//               and comply with all relevant laws and regulations.
//             </p>
//           </div>

//           {/* Section 2 */}
//           <div>
//             <h2 className="text-xl font-bold mb-2">2. Booking & Payments</h2>
//             <p className="font-parkinsans text-[13px] leading-relaxed">
//               All bookings are subject to availability. Payments must be made in
//               accordance with the agreed terms. Late payments may attract
//               penalties or suspension of services.
//             </p>
//           </div>

//           {/* Section 3 */}
//           <div>
//             <h2 className="text-xl font-bold mb-2">3. Service Availability</h2>
//             <p className="font-parkinsans text-[13px] leading-relaxed">
//               While we strive to ensure timely delivery, Dakawou Transport is
//               not liable for delays caused by external factors such as weather,
//               accidents, road closures, or strikes.
//             </p>
//           </div>

//           {/* Section 4 */}
//           <div>
//             <h2 className="text-xl font-bold mb-2">4. Goods & Restrictions</h2>
//             <p className="font-parkinsans text-[13px] leading-relaxed">
//               Customers are responsible for declaring goods truthfully and
//               ensuring proper packaging. Hazardous or prohibited items will not
//               be transported under any circumstances.
//             </p>
//           </div>

//           {/* Section 5 */}
//           <div>
//             <h2 className="text-xl font-bold mb-2">5. Liability</h2>
//             <p className="font-parkinsans text-[13px] leading-relaxed">
//               Our liability for loss, damage, or delay is limited to the extent
//               permitted by law and as outlined in contractual agreements. We
//               encourage clients to obtain adequate insurance coverage.
//             </p>
//           </div>

//           {/* Section 6 */}
//           <div>
//             <h2 className="text-xl font-bold mb-2">6. Intellectual Property</h2>
//             <p className="font-parkinsans text-[13px] leading-relaxed">
//               All content, including logos, branding, and materials, remain the
//               property of Dakawou Transport and may not be copied or reused
//               without prior written consent.
//             </p>
//           </div>

//           {/* Section 7 */}
//           <div>
//             <h2 className="text-xl font-bold mb-2">7. Updates to Terms</h2>
//             <p className="font-parkinsans text-[13px] leading-relaxed">
//               We reserve the right to update these Terms & Conditions at any
//               time. Continued use of our services after changes indicates your
//               acceptance of the revised terms.
//             </p>
//           </div>

//           {/* Section 8 */}
//           <div>
//             <h2 className="text-xl font-bold mb-2">8. Governing Law</h2>
//             <p className="font-parkinsans text-[13px] leading-relaxed">
//               These Terms & Conditions are governed by the laws of Kenya (or the
//               applicable jurisdiction where services are provided). Disputes
//               shall be resolved under the relevant courts of law.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="footer-cont bg-dark-g w-full">
//         <Footer />
//       </div>
//     </div>
//   )
// }

// export default Terms



import Footer from './../Footer'
import NavComp from './../NavComp'
import './../abt.css'
import { Link } from 'react-router-dom'
import { IoIosReturnLeft } from 'react-icons/io'

function Terms() {
  return (
    <div>
      <NavComp />

      {/* Hero Section */}
      <div className="about-container bg-cover bg-center relative overflow-hidden h-[60vh] z-[-20]">
        <div className="about-overlay absolute inset-0 bg-black/60"></div>
        <h1 className="text-5xl font-bold text-white text-center absolute inset-0 flex items-center justify-center z-10">
          Terms & Conditions
        </h1>
      </div>

      {/* Main Content */}
      <div className="mx-[20px] mt-[-70px] z-40 bg-white p-[20px]">
        {/* Back to Home */}
        <ul>
          <Link
            to="/"
            className="flex items-center font-parkinsans mb-[20px] text-b-orange font-semibold hover:font-semibold hover:underline hover:translate-x-2 transition duration-300"
          >
            <IoIosReturnLeft style={{ fontSize: '20px' }} />
            <span className="pl-[13px] text-[15px]">Home</span>
          </Link>
        </ul>

        {/* Introduction */}
        <div className="abt-sec grid grid-cols-1 gap-[20px] pt-[8px] my-[15px]">
          <p className="font-parkinsans leading-relaxed tracking-wide text-justify text-[13px] mb-6">
            These Terms & Conditions govern your use of Dakawou Transport’s services, website, and interactions. By booking,
            accessing, or using our services in any form, you confirm your agreement to the terms outlined below. Please read each
            section carefully to understand your responsibilities and our commitments.
          </p>

          {/* Section 1: Use of Services */}
          <div>
            <h2 className="text-xl font-bold mb-2">1. Use of Services</h2>
            <p className="font-parkinsans text-[13px] leading-relaxed">
              Our services are intended for lawful purposes only. Users are required to provide accurate, complete, and up-to-date
              information when using Dakawou Transport. Any misuse of our services — including fraudulent activity or illegal transport
              requests — will result in immediate suspension and possible legal action.
            </p>
          </div>

          {/* Section 2: Booking & Payments */}
          <div>
            <h2 className="text-xl font-bold mb-2">2. Booking & Payments</h2>
            <p className="font-parkinsans text-[13px] leading-relaxed">
              All bookings must be made in advance and are subject to availability. Payment terms will be clearly outlined during the
              booking process. Clients are expected to honor payment deadlines; failure to do so may result in delayed services or
              additional charges.
            </p>
          </div>

          {/* Section 3: Service Availability */}
          <div>
            <h2 className="text-xl font-bold mb-2">3. Service Availability</h2>
            <p className="font-parkinsans text-[13px] leading-relaxed">
              While Dakawou Transport strives to maintain high reliability and punctuality, we cannot guarantee service timelines in
              cases of unexpected disruptions. These include, but are not limited to, weather conditions, traffic, mechanical issues,
              accidents, road closures, or government restrictions.
              While Dakawou Transport strives to maintain high reliability and punctuality, we cannot guarantee service timelines in
              cases of unexpected disruptions. These include, but are not limited to, weather conditions, traffic, mechanical issues,
              accidents, road closures, or government restrictions.
            </p>
          </div>

          {/* Section 4: Goods & Restrictions */}
          <div>
            <h2 className="text-xl font-bold mb-2">4. Goods & Restrictions</h2>
            <p className="font-parkinsans text-[13px] leading-relaxed">
              Customers must declare the contents of their shipments truthfully. We do not accept responsibility for undeclared,
              hazardous, or prohibited items. It is the client’s responsibility to ensure goods are properly packaged and comply with
              all transport regulations. We reserve the right to refuse service if the contents are illegal or unsafe.
            
              Customers must declare the contents of their shipments truthfully. We do not accept responsibility for undeclared,
              hazardous, or prohibited items. It is the client’s responsibility to ensure goods are properly packaged and comply with
              all transport regulations. We reserve the right to refuse service if the contents are illegal or unsafe.
            </p>
          </div>

          {/* Section 5: Liability */}
          <div>
            <h2 className="text-xl font-bold mb-2">5. Liability</h2>
            <p className="font-parkinsans text-[13px] leading-relaxed">
              Our liability for lost, damaged, or delayed goods is limited and subject to the terms of your service agreement. We are
              not liable for any indirect or consequential losses. Clients are advised to seek third-party insurance for valuable or
              sensitive cargo where necessary.
              Our liability for lost, damaged, or delayed goods is limited and subject to the terms of your service agreement. We are
              not liable for any indirect or consequential losses. Clients are advised to seek third-party insurance for valuable or
              sensitive cargo where necessary.
              Our liability for lost, damaged, or delayed goods is limited and subject to the terms of your service agreement. We are
              not liable for any indirect or consequential losses. Clients are advised to seek third-party insurance for valuable or
              sensitive cargo where necessary.
            </p>
          </div>

          {/* Section 6: Intellectual Property */}
          <div>
            <h2 className="text-xl font-bold mb-2">6. Intellectual Property</h2>
            <p className="font-parkinsans text-[13px] leading-relaxed">
              All website content, company logos, designs, text, images, and other materials are the intellectual property of Dakawou
              Transport. They may not be copied, reproduced, modified, or distributed without written consent from the company.
              All website content, company logos, designs, text, images, and other materials are the intellectual property of Dakawou
              Transport. They may not be copied, reproduced, modified, or distributed without written consent from the company.
              All website content, company logos, designs, text, images, and other materials are the intellectual property of Dakawou
              Transport. They may not be copied, reproduced, modified, or distributed without written consent from the company.
            </p>
          </div>

          {/* Section 7: Updates to Terms */}
          <div>
            <h2 className="text-xl font-bold mb-2">7. Updates to Terms</h2>
            <p className="font-parkinsans text-[13px] leading-relaxed">
              Dakawou Transport reserves the right to revise these Terms & Conditions at any time. Updates will be posted on our
              website, and it is your responsibility to review them periodically. Continued use of our services after updates indicates
              your acceptance of the new terms.
              Dakawou Transport reserves the right to revise these Terms & Conditions at any time. Updates will be posted on our
              website, and it is your responsibility to review them periodically. Continued use of our services after updates indicates
              your acceptance of the new terms.
            </p>
          </div>

          {/* Section 8: Governing Law */}
          <div>
            <h2 className="text-xl font-bold mb-2">8. Governing Law</h2>
            <p className="font-parkinsans text-[13px] leading-relaxed">
              These Terms & Conditions are governed by the laws of Kenya (or the respective country where services are rendered). Any
              disputes arising in connection with these terms shall be resolved in accordance with the legal framework of the relevant
              jurisdiction.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-cont bg-dark-g w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Terms
