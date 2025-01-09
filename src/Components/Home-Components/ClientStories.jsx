import React, { useState, useEffect } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";


const ClientStories = () => {
  // Define the slides and current index state
  const slides = [
    {
      text: `I would like to express my heartfelt gratitude to both Mr. Prasanna and Mr. Chaminda for their exceptional service during the installation of our Head Office Intercom system. Mr. Prasanna, your excellent management of the sales process ensured a seamless and satisfactory experience. Mr. Chaminda, your expertise, commitment, and professionalism in engineering were truly remarkable. Your efforts went above and beyond our expectations, embodying the high service standards we associate with Fentons. On behalf of our company, thank you both for your outstanding service. We look forward to continuing our partnership with Fentons LTD.`,
      name: "Chathura Senarathne",
    },
    {
      text: `I would like to express my heartfelt gratitude to both Mr. Prasanna and Mr. Chaminda for their exceptional service during the installation of our Head Office Intercom system. Mr. Prasanna, your excellent management of the sales process ensured a seamless and satisfactory experience. Mr. Chaminda, your expertise, commitment, and professionalism in engineering were truly remarkable. Your efforts went above and beyond our expectations, embodying the high service standards we associate with Fentons. On behalf of our company, thank you both for your outstanding service. We look forward to continuing our partnership with Fentons LTD.`,
      name: "Chathura Senarathne",
    },
    {
      text: `I would like to express my heartfelt gratitude to both Mr. Prasanna and Mr. Chaminda for their exceptional service during the installation of our Head Office Intercom system. Mr. Prasanna, your excellent management of the sales process ensured a seamless and satisfactory experience. Mr. Chaminda, your expertise, commitment, and professionalism in engineering were truly remarkable. Your efforts went above and beyond our expectations, embodying the high service standards we associate with Fentons. On behalf of our company, thank you both for your outstanding service. We look forward to continuing our partnership with Fentons LTD.`,
      name: "Chathura Senarathne",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Slide changes every 5 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-auto bg-gray-800 text-white rounded-lg overflow-hidden">
  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("bg.jpg")' }}></div> {/* Background image */}
  <div className="absolute inset-0 bg-black opacity-80"></div> {/* Dark overlay */}
      {/* Slide Container */}
      <p class="relative mt-12 text-sm text-center font-medium text-[#ff6000] md:text-xl md:leading-[1]">OUR CLIENTS SPEAK</p>
      <h2 class="relative pt-2 text-3xl text-center font-bold text-white md:text-5xl md:leading-[1.2]">Client Stories</h2>
      <p className="relative my-12 pl-4 text-center text-white text-xl">"Discover how our solutions have transformed businesses like yours"</p>
      <div
        className="relative w-full h-full flex transition-all duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`, // Slide content horizontally
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full md:px-40 px-2 text-center">
            {/* Slide Content */}
            <p className="md:text-lg text-sm italic mb-4">{slide.text}</p>
            <h3 className="font-bold py-8">{slide.name}</h3>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
{/*      <div className='navbutton flex flex-row justify-between text-[3rem] text-[#ffffff38] z-10950'>
      <button
        onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)}
        // className="swiper-button-prev"
      >
        <FaAngleLeft />
      </button>
      <button
        onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)}
        // className="swiper-button-next " 
      >
        <FaChevronRight />
      </button>
      </div>*/}
    </div>
  );
};

export default ClientStories;
