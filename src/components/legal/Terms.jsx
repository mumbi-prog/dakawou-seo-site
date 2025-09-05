import Footer from './../Footer'
import NavComp from './../NavComp'
import './../abt.css'
import { Link } from 'react-router-dom'
import { IoIosReturnLeft } from 'react-icons/io'

function Terms() {
  return (
    <div>
      <NavComp />
      <div className="about-container bg-cover bg-center relative overflow-hidden h-[60vh] z-[-20]">
        <div className="about-overlay absolute inset-0 bg-black/60"></div>
        <h1 className="text-5xl font-bold text-white text-center absolute inset-0 flex items-center justify-center z-10">
          Terms & Conditions
        </h1>
      </div>

      <div className="mx-[20px] mt-[-90px] z-40 bg-white p-[20px]">
        <ul>
          <Link
            to="/"
            className="flex items-center font-parkinsans mb-[20px] text-b-orange font-semibold hover:font-semibold hover:underline hover:translate-x-2 transition duration-300 "
          >
            <IoIosReturnLeft style={{ fontSize: '20px' }} />{' '}
            <span className="pl-[13px] text-[15px]">Home</span>
          </Link>
        </ul>

        <div className="abt-sec grid grid-cols-1 gap-[20px] pt-[8px] my-[15px]">
          <p className="font-parkinsans leading-relaxed tracking-wide text-justify text-[13px] mb-6">
            Please read these Terms & Conditions carefully before using Dakawou
            Transport services. By accessing or using our services, you agree to
            comply with the following:
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold mb-2">1. Use of Services</h2>
            <p className="font-parkinsans text-[13px] leading-relaxed">
              Our transport and logistics services must only be used for lawful
              purposes. Customers are expected to provide accurate information
              and comply with all relevant laws and regulations.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold mb-2">2. Booking & Payments</h2>
            <p className="font-parkinsans text-[13px] leading-relaxed">
              All bookings are subject to availability. Payments must be made in
              accordance with the agreed terms. Late payments may attract
              penalties or suspension of services.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold mb-2">3. Service Availability</h2>
            <p className="font-parkinsans text-[13px] leading-relaxed">
              While we strive to ensure timely delivery, Dakawou Transport is
              not liable for delays caused by external factors such as weather,
              accidents, road closures, or strikes.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-bold mb-2">4. Goods & Restrictions</h2>
            <p className="font-parkinsans text-[13px] leading-relaxed">
              Customers are responsible for declaring goods truthfully and
              ensuring proper packaging. Hazardous or prohibited items will not
              be transported under any circumstances.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-bold mb-2">5. Liability</h2>
            <p className="font-parkinsans text-[13px] leading-relaxed">
              Our liability for loss, damage, or delay is limited to the extent
              permitted by law and as outlined in contractual agreements. We
              encourage clients to obtain adequate insurance coverage.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-bold mb-2">6. Intellectual Property</h2>
            <p className="font-parkinsans text-[13px] leading-relaxed">
              All content, including logos, branding, and materials, remain the
              property of Dakawou Transport and may not be copied or reused
              without prior written consent.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-bold mb-2">7. Updates to Terms</h2>
            <p className="font-parkinsans text-[13px] leading-relaxed">
              We reserve the right to update these Terms & Conditions at any
              time. Continued use of our services after changes indicates your
              acceptance of the revised terms.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-bold mb-2">8. Governing Law</h2>
            <p className="font-parkinsans text-[13px] leading-relaxed">
              These Terms & Conditions are governed by the laws of Kenya (or the
              applicable jurisdiction where services are provided). Disputes
              shall be resolved under the relevant courts of law.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-cont bg-dark-g w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Terms
