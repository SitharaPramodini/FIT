import React, { useEffect } from "react";

const DataCenter = () => {

  return (
    <div>
      {/* WhyChoose */}
      <div className="home flex flex-row flex-wrap justify-around bg-[#161616] md:px-24 px-4 py-16">
        <div className="flex flex-col">
          <h4 className=" text-title text-xl font-semibold leading-none text-[#ff6000] md:text-2xl text-center">Dependable Tech - Capable Hands</h4>
          <h2 className=" text-title mt-4 text-3xl font-bold text-white md:text-5xl md:leading-[1.2] text-center">Explore Our Range Of Services Tailored To Meet All Your IT Needs</h2>
          <p className="animate-on-scroll text-subtitle my-4 text-xl font-thin text-[#ff6000] md:text-xl md:leading-[1] text-center">From consulting to implementation, discover how we can elevate your business</p>
        </div>
      </div>
    </div>
  );
};

export default DataCenter;
