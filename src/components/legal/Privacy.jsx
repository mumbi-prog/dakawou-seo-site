import Footer from './../Footer'
import NavComp from './../NavComp'
import './../abt.css'
import { Link } from 'react-router-dom'
import { IoIosReturnLeft } from 'react-icons/io'

function Privacy() {
  return (
    <div>
      <NavComp />
      <div className="about-container bg-cover bg-center relative overflow-hidden h-[60vh] z-[-20]">
        <div className="about-overlay absolute inset-0 bg-black/60"></div>
        <h1 className="text-5xl font-bold text-white text-center absolute inset-0 flex items-center justify-center z-10">
          Privacy Policy
        </h1>
      </div>

      <div className="mx-[20px] mt-[-70px] z-40 bg-white p-[20px]">
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
          <p className="font-parkinsans leading-relaxed tracking-wide text-justify text-[13px] mb-4">
            At Dakawou Transport, your privacy is very important to us. This
            Privacy Policy outlines how we collect, use, and protect your
            personal information. Please review the points below for more
            details:
          </p>

          <ul className="list-disc pl-6 space-y-3 font-parkinsans text-[13px] leading-relaxed tracking-wide">
            <li>
              We collect information you provide directly, such as name, email,
              and contact details.
            </li>
            <li>
              Information may also be gathered automatically, including browser
              type, IP address, and usage data.
            </li>
            <li>
              Your data helps us improve our logistics services and provide
              tailored customer support.
            </li>
            <li>
              Personal information will never be sold or rented to third
              parties.
            </li>
            <li>
              We may share data with trusted partners who assist us in operating
              our services.
            </li>
            <li>
              Cookies and similar technologies are used to enhance your browsing
              experience.
            </li>
            <li>
              We take reasonable steps to secure your personal information from
              unauthorized access.
            </li>
            <li>
              You have the right to request access, updates, or deletion of your
              personal information.
            </li>
            <li>
              Our services are not directed to children under 13, and we do not
              knowingly collect information from them.
            </li>
            <li>
              We may update this Privacy Policy from time to time; changes will
              be posted on this page.
            </li>
            <li>
              Continued use of our services after updates indicates acceptance
              of the revised terms.
            </li>
            <li>
              If you have questions about this policy, you may contact us
              through our official channels.
            </li>
            <li>
              We may update this Privacy Policy from time to time; changes will
              be posted on this page.
            </li>
            <li>
              Continued use of our services after updates indicates acceptance
              of the revised terms.
            </li>
            <li>
              If you have questions about this policy, you may contact us
              through our official channels.
            </li>
            <li>
              We may update this Privacy Policy from time to time; changes will
              be posted on this page.
            </li>
            <li>
              Continued use of our services after updates indicates acceptance
              of the revised terms.
            </li>
            <li>
              If you have questions about this policy, you may contact us
              through our official channels.
            </li>
            <li>
              We may update this Privacy Policy from time to time; changes will
              be posted on this page.
            </li>
            <li>
              Continued use of our services after updates indicates acceptance
              of the revised terms.
            </li>
            <li>
              If you have questions about this policy, you may contact us
              through our official channels.
            </li>
            <li>
              We may update this Privacy Policy from time to time; changes will
              be posted on this page.
            </li>
            <li>
              Continued use of our services after updates indicates acceptance
              of the revised terms.
            </li>
            <li>
              If you have questions about this policy, you may contact us
              through our official channels.
            </li>
            <li>
              We may update this Privacy Policy from time to time; changes will
              be posted on this page.
            </li>
            <li>
              Continued use of our services after updates indicates acceptance
              of the revised terms.
            </li>
            <li>
              If you have questions about this policy, you may contact us
              through our official channels.
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-cont bg-dark-g w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Privacy
