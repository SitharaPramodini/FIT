import React, { useEffect } from "react";

const DatacenterDivider = () => {

  return (
    <div>
      {/* WhyChoose */}
      <div className="home flex flex-row flex-wrap justify-around bg-[#16161600] px-8 pt-16 pb-8">
        <div className="lefthead md:w-1/2 w-full">
        <h2 className="text-xl font-bold md:text-3xl md:leading-[1.2] text-[#ff6000]">
        Hyper-Converged Infrastructure (HCI)            </h2>
            <p className="my-4 font-normal text-md md:text-lg md:leading-[1.6] text-white">
            HCI integrates storage, computing, and networking into one system, using virtualization for efficient, streamlined modern IT infrastructure.
            </p>
        </div>
        <div className="hidden md:flex righthr w-1/2 flex-col justify-around pl-6">
        <hr className="h-0.5 w-full bg-gradient-to-r from-[#ff6000] via-gray-500  border-none" />

        </div>
      </div>
    </div>
  );
};

export default DatacenterDivider;
