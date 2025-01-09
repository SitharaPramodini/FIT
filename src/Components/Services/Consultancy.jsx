import React, { useEffect } from "react";
import './consultancy.css';

import { FaLocationDot } from "react-icons/fa6";
import { MdQuestionAnswer ,MdReviews} from "react-icons/md";
import {  } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";


const Consultancy = () => {

    return (
        <div>
            {/* topic */}
            <div className="home flex flex-row flex-wrap justify-around bg-[#161616] md:px-24 px-4 py-16">
                <div className="flex flex-col">
                    <h4 className="animate-on-scroll text-title text-xl font-semibold leading-none text-[#ff6000] md:text-2xl text-center">Dependable Tech - Capable Hands</h4>
                    <h2 className="animate-on-scroll text-title mt-4 text-3xl font-bold text-white md:text-5xl md:leading-[1.2] text-center">Optimize IT systems, reduce costs, and improve business efficiency.</h2>
                    <p className="animate-on-scroll text-subtitle my-4 text-xl font-thin text-[#ff6000] md:text-xl md:leading-[1] text-center">Expert IT consultancy services that optimize infrastructure, enhance efficiency, reduce costs, and provide strategic technology solutions.</p>
                </div>
            </div>

            {/* slited topic */}
            <div className="home flex flex-row flex-wrap justify-around bg-[#16161600] px-8 pt-24 pb-8">
                <div className="lefthead md:w-1/3 w-full">
                    <h2 className="text-xl font-bold md:text-3xl md:leading-[1.2] text-[#ff6000]">
                        Consultancy Service
                    </h2>
                </div>
                <div className="hidden md:flex righthr w-2/3 flex-col justify-around pl-6">
                    <hr class="h-0.5 w-full bg-gradient-to-r from-[#ff6000] via-gray-500  border-none" />

                </div>
                <p className="my-4 font-normal text-md md:text-lg md:leading-[1.6] text-white">
                    IT Consultancy Services provide expert guidance and solutions to optimize an organization’s IT infrastructure. By assessing current systems, identifying gaps, and developing strategic roadmaps, consultants help businesses harness technology to improve efficiency, reduce costs, and achieve their goals. Services typically include infrastructure evaluation, technology selection, implementation planning, and ongoing support.
                </p>
            </div>

            {/* consultcard md:min-w-[21%] min-w-[85%] h-[240px]s */}
            <div class="container flex md:flex-row gap-x-8 flex-col gap-y-8 justify-center mt-8 mb-4">
                <div class="consultcard md:min-w-[21%] min-w-[85%] h-[240px]">
                    <div class="box">
                        <div class="content">
                            <h2>01</h2>
                            <div className="iconcard mx-auto text-[3rem] mb-4 text-white ">
                                <SiGoogleanalytics />
                            </div>
                            <p>Gap Analysis for current infrastructure</p>

                        </div>
                    </div>
                </div>

                <div class="consultcard md:min-w-[21%] min-w-[85%] h-[240px]">
                    <div class="box">
                        <div class="content">
                            <h2>02</h2>
                            <div className="iconcard mx-auto text-[3rem] mb-4 text-white ">
                                <FaLocationDot />
                            </div>
                            <p>Guidance to create Blueprint Roadmap</p>

                        </div>
                    </div>
                </div>

                <div class="consultcard md:min-w-[21%] min-w-[85%] h-[240px]">
                    <div class="box">
                        <div class="content">
                            <h2>03</h2>
                            <div className="iconcard mx-auto text-[3rem] mb-4 text-white ">
                                <MdQuestionAnswer />
                            </div>
                            <p>Consultancy for suitable products</p>

                        </div>
                    </div>
                </div>



                <div class="consultcard md:min-w-[21%] min-w-[85%] h-[240px]">
                    <div class="box">
                        <div class="content">
                            <h2>04</h2>
                            <div className="iconcard mx-auto text-[3rem] mb-4 text-white ">
                                <MdReviews />
                            </div>
                            <p>Products Configuration Review</p>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Consultancy;
