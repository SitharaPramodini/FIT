import React, { useEffect } from "react";

const NextGeneration = () => {

  return (
    <div>
      {/* WhyChoose */}
      <div className="home flex flex-row flex-wrap justify-around bg-[#161616] md:px-24 px-4 py-16">
        <div className="flex flex-col">
          <h4 className="animate-on-scroll text-title text-xl font-semibold leading-none text-[#ff6000] md:text-2xl text-center">Dependable Tech - Comprehensive Solutions</h4>
          <h2 className="animate-on-scroll text-title mt-4 text-3xl font-bold text-white md:text-5xl md:leading-[1.2] text-center">Explore our range of services tailored to meet all your IT needs</h2>
          <p className="animate-on-scroll text-subtitle my-4 text-xl font-thin text-[#ff6000] md:text-xl md:leading-[1] text-center">From consulting to implementation, discover how we can elevate your business</p>
        </div>
      </div>
    </div>
  );
};

export default NextGeneration;
