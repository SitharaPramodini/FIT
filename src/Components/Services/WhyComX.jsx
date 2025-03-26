import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhyComX = () => {

    // Function to handle when the element is in view or out of view
    const handleScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add 'visible' class when element enters the viewport
            } else {
                entry.target.classList.remove('visible'); // Remove 'visible' class when element leaves the viewport
            }
        });
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        };

        const observer = new IntersectionObserver(handleScroll, options);

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            observer.observe(element);
        });

        // Cleanup observer on component unmount
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div>
            {/* WhyChoose */}
            <div className="home flex flex-row flex-wrap justify-around bg-[#16161600] px-8 pt-16 ">
                <div className="lefthead md:w-1/5 w-full">
                    <h2 className="text-2xl pl-4 font-bold md:text-4xl md:leading-[1.2] text-[#ff6000]">
                        Why ComX ?
                    </h2>
                </div>
                <div className=" hidden md:flex righthr w-4/5 flex-col justify-around pl-6">
                    <hr className="trans--grow hr1 h-0.5 w-full bg-gradient-to-r from-[#ff6000] via-gray-500  border-none" />
                </div>
                <div className="list md:ml-12 pb-16">
                    <div className="animate-on-scroll flex flex-row items-center mt-6">
                        <div className="icons text-xl font-bold leading-4 text-[#ff6000] md:text-2xl">
                            <FaCheckCircle />
                        </div>
                        <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">Carrier neutral Ucaas solution in Sri Lanka.</h4>
                    </div>
                    <div className="animate-on-scroll flex flex-row items-center mt-6">
                        <div className="icons text-xl font-bold leading-4 text-[#ff6000] md:text-2xl">
                            <FaCheckCircle />
                        </div>
                        <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">Most secured and trusted solution (HA, DR, Backup, Data encryption and Ransome protection)</h4>
                    </div>
                    <div className="animate-on-scroll flex flex-row items-center mt-6">
                        <div className="icons text-xl font-bold leading-4 text-[#ff6000] md:text-2xl">
                            <FaCheckCircle />
                        </div>
                        <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">Full Flexible (Ability to integrate with many more CRM, 3rd part Application)</h4>
                    </div>
                    <div className="animate-on-scroll flex flex-row items-center mt-6">
                        <div className="icons text-xl font-bold leading-4 text-[#ff6000] md:text-2xl">
                            <FaCheckCircle />
                        </div>
                        <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">Cost effective Solution – With Cloud, On-Premiss solution combination ability to reuse your existing PBX and Phones.</h4>
                    </div>
                    <div className="animate-on-scroll flex flex-row items-center mt-6">
                        <div className="icons text-xl font-bold leading-4 text-[#ff6000] md:text-2xl">
                            <FaCheckCircle />
                        </div>
                        <h4 className="text-sm pl-8 font-light leading-4 text-white md:text-xl">No need to worry maintain Data center, servers, storage, security, network, Application version & patching and high-level Engineering skills. Just experience the services.</h4>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default WhyComX;
