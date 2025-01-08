import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Navber = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpens, setIsDropdownOpens] = useState(false);

  let timeoutId;

  // Handle mouse enter event for "About" dropdown
  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  // Handle mouse enter event for "Event" dropdown
  const handleMouseEnters = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpens(true);
  };

  // Handle mouse leave event for "About" dropdown
  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Wait for 200ms before closing the dropdown
  };

  // Handle mouse leave event for "Event" dropdown
  const handleMouseLeaves = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpens(false);
    }, 200); // Wait for 200ms before closing the dropdown
  };

  // Toggle navigation menu (hamburger menu)
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <>
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-[#01c0c9] to-[#007cde] text-white text-sm py-2 fixed top-0 left-0 right-0 z-[9999]">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/C.O.Overseas?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400"
            >
              <FaFacebookF />
            </a>

            <a href="#" className="text-white hover:text-orange-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-orange-400">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-orange-400">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="flex flex-wrap items-center space-x-6">
            <div className="flex items-center">
              <FiPhone className="mr-1 text-white" />
              01614-757318
            </div>
            <div className="flex items-center">
              <FiMapPin className="mr-1 text-white" />
              Purana Paltan,Dhaka-1200, Dhaka, Bangladesh
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="flex items-center text-white hover:text-orange-400"
            >
              <FiMail className="mr-1" /> co.overseas2023@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="w-full inset-x-0 m-auto sticky top-[80px] md:top-[30px] z-[998]">
        <nav className="flex justify-between items-center p-2 backdrop-blur-sm backgroundsnavbar w-full px-4 shadow-lg">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://i.ibb.co.com/r2fG5Yj/logo1-removebg.png"
                alt="Logo Image"
                className="w-[80px] h-[70px] text-white"
              />
            </Link>
          </div>

          {/* Center Navigation Links */}
          <ul className={`hidden md:flex md:items-center md:gap-10`}>
            <li className="font-medium text-black text-xl">
              <Link to="/">Home</Link>
            </li>
            <li
              className="font-medium text-black relative group text-xl"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="cursor-pointer">About</span>
              <ul
                className={`absolute bg-white text-black mt-2 py-2 w-40 rounded shadow-lg opacity-100 ${
                  isDropdownOpen ? "visible" : "invisible"
                }`}
              >
                <li className="py-1 px-4 hover:bg-gray-700 hover:text-white font-medium">
                  <Link to="/aboutuspage">About Us</Link>
                </li>
                <li className="py-1 px-4 hover:bg-gray-700 hover:text-white font-medium">
                  <Link to="/award">Award</Link>
                </li>
                {/* <li className="py-1 px-4 hover:bg-gray-700 hover:text-white font-medium">
                  <Link to="/aboutclientele">Clientele</Link>
                </li> */}
                <li className="py-1 px-4 hover:bg-gray-700 hover:text-white font-medium">
                  <Link to="/aboutrecruitment">Recruitment</Link>
                </li>
                <li className="py-1 px-4 hover:bg-gray-700 hover:text-white font-medium">
                  <Link to="/aboutTestimonial">Testimonial</Link>
                </li>
              </ul>
            </li>
            <li className="font-medium text-black text-xl">
              <Link to="/services">Our Services</Link>
            </li>
            <li className="font-medium text-black text-xl">
              <Link to="/career">Career</Link>
            </li>
            <li className="font-medium text-black text-xl">
              <Link to="/blogpage">Blog</Link>
            </li>
            <li
              className="font-medium text-black relative group text-xl"
              onMouseEnter={handleMouseEnters}
              onMouseLeave={handleMouseLeaves}
            >
              <span className="cursor-pointer">Event</span>
              <ul
                className={`absolute bg-white text-black mt-2 py-2 w-40 rounded shadow-lg opacity-100 ${
                  isDropdownOpens ? "visible" : "invisible"
                }`}
              >
                <li className="py-1 px-4 hover:bg-gray-700 hover:text-white font-medium">
                  <Link to="/eventcare">We Care</Link>
                </li>
                <li className="py-1 px-4 hover:bg-gray-700 hover:text-white font-medium">
                  <Link to="/eventmedia">Gallery</Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* Contact Us Link */}
          <div className="hidden md:block">
            <Link to="/contactUs" className="font-medium text-black text-xl">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div
            className={`md:hidden cursor-pointer ${isNavOpen ? "toggle" : ""}`}
            onClick={toggleNav}
          >
            <div className="line1 w-6 h-1 bg-black mb-1"></div>
            <div className="line2 w-6 h-1 bg-black mb-1"></div>
            <div className="line3 w-6 h-1 bg-black"></div>
          </div>

          {/* Mobile Menu */}
          <ul
            className={`absolute top-20 left-0 w-full bg-white transition-all duration-500 ease-in md:hidden flex flex-col items-center ${
              isNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <li className="font-medium text-black py-2">
              <Link to="/" onClick={toggleNav}>
                Home
              </Link>
            </li>
            <li
              className="font-medium text-black py-2 relative"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="cursor-pointer">About</span>
              {isDropdownOpen && (
                <ul className="bg-white text-black mt-2 py-2 w-full rounded shadow-lg">
                  <li className="py-1 px-4 hover:bg-gray-700 hover:text-white font-medium">
                    <Link to="/aboutuspage">About Us</Link>
                  </li>
                  <li className="py-1 px-4 hover:bg-gray-700 hover:text-white font-medium">
                    <Link to="/award">Award</Link>
                  </li>
                  <li className="py-1 px-4 hover:bg-gray-700 hover:text-white font-medium">
                    <Link to="/aboutclientele">Clientele</Link>
                  </li>
                  <li className="py-1 px-4 hover:bg-gray-700 hover:text-white font-medium">
                    <Link to="/aboutrecruitment">Recruitment</Link>
                  </li>
                  <li className="py-1 px-4 hover:bg-gray-700 hover:text-white font-medium">
                    <Link to="/aboutTestimonial">Testimonial</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="font-medium text-black py-2">
              <Link to="/services" onClick={toggleNav}>
                Our Services
              </Link>
            </li>
            <li className="font-medium text-black py-2">
              <Link to="/career" onClick={toggleNav}>
                Career
              </Link>
            </li>
            <li className="font-medium text-black py-2">
              <Link to="/blogpage" onClick={toggleNav}>
                Blog
              </Link>
            </li>
            <li
              className="font-medium text-black py-2 relative"
              onClick={() => setIsDropdownOpens(!isDropdownOpens)}
            >
              <span className="cursor-pointer">Event</span>
              {isDropdownOpens && (
                <ul className="bg-white text-black mt-2 py-2 w-full rounded shadow-lg">
                  <li className="py-1 px-4 hover:bg-gray-700 hover:text-white font-medium">
                    <Link to="/eventcare">We Care</Link>
                  </li>
                  <li className="py-1 px-4 hover:bg-gray-700 hover:text-white font-medium">
                    <Link to="/eventmedia">Gallery</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="font-medium text-black py-2">
              <Link to="/contactUs" onClick={toggleNav}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navber;
