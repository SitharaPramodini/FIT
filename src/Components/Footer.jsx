import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className=" relative w-full bg-gradient-to-b from-[#111827] to-transparent text-white pt-20 pb-10 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/footer-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="flex md:flex-row flex-col w-full gap-y-12">
        {/* Logo and Contact Section */}
        <div className="flex flex-col md:w-1/4 w-11/12">
          <img src="/logo.webp" className=" md:ml-12 my-2 w-20 pl-4 md:pl-0" alt="Logo" />
          <div className="flex flex-col md:pl-11 pl-4 pr-2">
            <div className="flex flex-row items-center gap-3 pt-4">
              <div className="text-lg">
                <FaLocationDot />
              </div>
              <p className="text-[0.7rem]">
                JFI Tower III, 11th Floor, 75, Piyadasa Sirisena Mawatha,
                Colombo 10, Sri Lanka.
              </p>
            </div>
            <div className="flex flex-row items-center gap-3 pt-4">
              <FaPhone />
              <p className="text-[0.7rem]">+0112012102</p>
            </div>
            <div className="flex flex-row items-center gap-3 pt-4">
            <div className="text-lg">
              <IoIosMail />
              </div>
              <p className="text-[0.7rem]">info@hayleyfentons.com</p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="flex flex-row md:w-1/2 w-full justify-around">
          <div className="flex flex-col md:w-1/2 w-full px-4">
            <h1 className="relative group text-white font-medium text-md pb-2">
              SERVICES
            </h1>
            <ul className="list-[disclosure-closed] marker:text-red-500 list-inside text-sm space-y-3">
              <li>Information Security</li>
              <li>Consultancy Services</li>
              <li>Cyber Security</li>
              <li>Data Center Solutions</li>
              <li>Collaboration Suites</li>
              <li>Managed Services</li>
              <li>Unified Communication & PABX</li>
              <li>Enterprise Networking</li>
              <li>Innovation Center</li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="flex flex-col md:w-1/2 w-full px-4">
            <h1 className="relative group text-white font-medium text-md pb-2">
              COMPANY
            </h1>
            <ul className="list-[disclosure-closed] marker:text-red-500 list-inside text-sm space-y-3">
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
              <li>Privacy</li>
              <li>Legal</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>

        {/* Business and Other Section */}
        <div className="flex flex-row md:w-1/2 w-full justify-around">
          <div className="flex flex-col md:w-1/2 w-full px-4">
            <h1 className="relative group text-white font-medium text-md pb-2">
              BUSINESS
            </h1>
            <ul className="list-[disclosure-closed] marker:text-red-500 list-inside text-sm space-y-3">
              <li>Business Inquiries</li>
              <li>Manufacturing & Retail</li>
              <li>Telecommunications</li>
              <li>Banking & Finance</li>
              <li>Support</li>
              <li>Vacancy</li>
            </ul>
          </div>

          <div className="flex flex-col md:w-1/2 w-full px-4">
            <h1 className="relative group text-white font-medium text-md pb-2">
              OTHER
            </h1>
            <ul className="list-[disclosure-closed] marker:text-red-500 list-inside text-sm space-y-3">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Legal</li>
              <li>Data Policy</li>
              <li>Support</li>
              <li>Developer Center</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
