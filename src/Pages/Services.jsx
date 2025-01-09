import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import services from "../ServiceData"; // Import the services data
import './Services.css'
import ContactUs from "../Components/Home-Components/ContactUs";
import Footer from "../Components/Footer";
import InfoSecurity from "../Components/Services/InfoSecurity";
import DataCenter from "../Components/Services/DataCenter";
import NextGeneration from "../Components/Services/NextGeneration";
import ServiceSlider from "../Components/Services/ServiceSlider";
import Enterprise from "../Components/Services/Enterprise";
import DatacenterDivider from "../Components/Services/DatacenterDivider";
import WhyComX from "../Components/Services/WhyComX";
import CyberSecurity from "../Components/Services/CyberSecurity1";
import CyberSecurity2 from "../Components/Services/CyberSecurity2";
import CyberSecurity3 from "../Components/Services/CyberSecurity3";
import CollaborationEmail from "../Components/Services/CollaborationEmail";
import CyberSplit from "../Components/Services/CyberSplit";
import Consultancy from "../Components/Services/Consultancy";
import CyberBenefits from "../Components/Services/CyberBenefits";
import Collaboration from "../Components/Services/Collaboration";
import Innovation from "../Components/Services/Innovation";
import InnoProjects from "../Components/Services/InnoProjects";
import InnoTechnology from "../Components/Services/InnoTechnology";
import InnoIOT from "../Components/Services/InnoIOT";

const Services = () => {
  const { index } = useParams(); // Get the `index` from the URL
  const serviceIndex = parseInt(index); // Convert the `index` to an integer

  // Get the service details based on the index
  const service = services[serviceIndex] || services[0]; // Default to the first service if index is out of bounds
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleReadMoreClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle the expansion
  };
  console.log(index);

  return (
    <div>
      {/* Services home*/}
      <div className="land flex w-full bg-slate-900 relative ">
        {/* Video Section */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
          id="myVideo"
        >
          <source src={service.videoSource} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Overlay Content */}
        <div className="relative z-10 flex justify-around py-48 w-full h-full bg-black bg-opacity-70">
          <div className="relative z-20 pt-0 text-center text-white">
            <h2 className="pt-2 mx-8 text-3xl font-bold md:text-5xl md:leading-[1.2] px-3">
              {service.title}
            </h2>
            <p className="my-8 mx-8 font-normal text-md md:text-xl md:mx-52 md:leading-[1.6]">
              {service.subtitle}
            </p>

            <div className="md:flex flex-col items-center">
              <Link
                className="btn h-8 pt-1 text-white bg-orange-500 px-6 py-2 text-center rounded-lg hover:bg-orange-600 transition duration-300"
                to="/#"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>

      {serviceIndex === 0 && <InfoSecurity />}
      {serviceIndex === 1 && <Consultancy />}
      {serviceIndex === 2 && <CyberSecurity />}
      {serviceIndex === 3 && <DataCenter />}
      {serviceIndex === 4 && <Collaboration />}
      {serviceIndex === 5 && <NextGeneration />}
      {serviceIndex === 7 && <Enterprise />}
      {serviceIndex === 8 && <Innovation />}

      {/* services  */}
      <div className="services flex md:flex-row flex-col ">
        <div className="left md:w-1/2 w-full flex flex-col items-center">
          {services[index].subservices.map((subservice, index) =>
            index % 2 === 0 ? ( // Cards with even index go on the left
              <div className="rowcard mt-4 " key={index}>
                <div
                  className={`servicecard h-auto mx-auto ${expandedIndex === index ? "expanded" : ""
                    }`}
                >
                  <h4 className="text-[#ff6000] font-semibold">{subservice.name}</h4>
                  <p className="description">
                    {expandedIndex === index
                      ? subservice.description // Show full description if expanded
                      : subservice.description.split(".")[0] + "."}{" "}
                    {/* Only show the first sentence */}
                  </p>
                  <button
                    className="readmore-btn"
                    onClick={() => handleReadMoreClick(index)}
                  >
                    {expandedIndex === index ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>
        <div className="right md:w-1/2 w-full flex flex-col items-center">
          {services[index].subservices.map((subservice, index) =>
            index % 2 !== 0 ? ( // Cards with odd index go on the right
              <div className="rowcard mt-4" key={index}>
                <div
                  className={`servicecard h-auto mx-auto ${expandedIndex === index ? "expanded" : ""
                    }`}
                >
                  <h4 className="text-[#ff6000] font-semibold">{subservice.name}</h4>
                  <p className="description">
                    {expandedIndex === index
                      ? subservice.description // Show full description if expanded
                      : subservice.description.split(".")[0] + "."}{" "}
                    {/* Only show the first sentence */}
                  </p>
                  <button
                    className="readmore-btn font-thin"
                    onClick={() => handleReadMoreClick(index)}
                  >
                    {expandedIndex === index ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>


      {serviceIndex === 2 && <CyberSecurity2 />}
      {serviceIndex === 2 &&
        <div className="services flex md:flex-row flex-col ">
          <div className="left md:w-1/2 w-full flex flex-col items-center">
            {services[index].sub2.map((sub2, index) =>
              index % 2 === 0 ? ( // Cards with even index go on the left
                <div className="rowcard mt-4" key={index}>
                  <div
                    className={`servicecard h-40 mx-auto ${expandedIndex === index ? "expanded" : ""
                      }`}
                  >
                    <h4 className="text-[#ff6000] font-semibold">{sub2.name}</h4>
                    <p className="description">
                      {expandedIndex === index
                        ? sub2.description // Show full description if expanded
                        : sub2.description.split(".")[0] + "."}{" "}
                      {/* Only show the first sentence */}
                    </p>
                  </div>
                </div>
              ) : null
            )}
          </div>
          <div className="right md:w-1/2 w-full flex flex-col items-center">
            {services[index].sub2.map((sub2, index) =>
              index % 2 !== 0 ? ( // Cards with odd index go on the right
                <div className="rowcard mt-4" key={index}>
                  <div
                    className={`servicecard h-40 mx-auto ${expandedIndex === index ? "expanded" : ""
                      }`}
                  >
                    <h4 className="text-[#ff6000] font-semibold">{sub2.name}</h4>
                    <p className="description">
                      {expandedIndex === index
                        ? sub2.description // Show full description if expanded
                        : sub2.description.split(".")[0] + "."}{" "}
                      {/* Only show the first sentence */}
                    </p>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      }

      {serviceIndex === 2 && <CyberSecurity3 />}
      {serviceIndex === 2 &&
        <div className="services flex md:flex-row flex-col ">
          <div className="left md:w-1/2 w-full flex flex-col items-center">
            {services[index].sub3.map((sub3, index) =>
              index % 2 === 0 ? ( // Cards with even index go on the left
                <div className="rowcard mt-4" key={index}>
                  <div
                    className={`servicecard h-40 mx-auto ${expandedIndex === index ? "expanded" : ""
                      }`}
                  >
                    <h4 className="text-[#ff6000] font-semibold">{sub3.name}</h4>
                    <p className="description">
                      {expandedIndex === index
                        ? sub3.description // Show full description if expanded
                        : sub3.description.split(".")[0] + "."}{" "}
                      {/* Only show the first sentence */}
                    </p>
                  </div>
                </div>
              ) : null
            )}
          </div>
          <div className="right md:w-1/2 w-full flex flex-col items-center">
            {services[index].sub3.map((sub3, index) =>
              index % 2 !== 0 ? ( // Cards with odd index go on the right
                <div className="rowcard mt-4" key={index}>
                  <div
                    className={`servicecard h-40 mx-auto ${expandedIndex === index ? "expanded" : ""
                      }`}
                  >
                    <h4 className="text-[#ff6000] font-semibold">{sub3.name}</h4>
                    <p className="description">
                      {expandedIndex === index
                        ? sub3.description // Show full description if expanded
                        : sub3.description.split(".")[0] + "."}{" "}
                      {/* Only show the first sentence */}
                    </p>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      }

      {serviceIndex === 2 && <CyberSplit />}
      {serviceIndex === 2 && <CyberBenefits />}


      {serviceIndex === 3 && <DatacenterDivider />}
      {serviceIndex === 3 &&
        <div className="services flex md:flex-row flex-col ">
          <div className="left md:w-1/2 w-full flex flex-col items-center">
            {services[index].infrastructure.map((infrastructure, index) =>
              index % 2 === 0 ? ( // Cards with even index go on the left
                <div className="rowcard mt-4" key={index}>
                  <div
                    className={`servicecard h-40 mx-auto ${expandedIndex === index ? "expanded" : ""
                      }`}
                  >
                    <h4 className="text-[#ff6000] font-semibold">{infrastructure.name}</h4>
                    <p className="description">
                      {expandedIndex === index
                        ? infrastructure.description // Show full description if expanded
                        : infrastructure.description.split(".")[0] + "."}{" "}
                      {/* Only show the first sentence */}
                    </p>
                  </div>
                </div>
              ) : null
            )}
          </div>
          <div className="right md:w-1/2 w-full flex flex-col items-center">
            {services[index].infrastructure.map((infrastructure, index) =>
              index % 2 !== 0 ? ( // Cards with odd index go on the right
                <div className="rowcard mt-4" key={index}>
                  <div
                    className={`servicecard h-40 mx-auto ${expandedIndex === index ? "expanded" : ""
                      }`}
                  >
                    <h4 className="text-[#ff6000] font-semibold">{infrastructure.name}</h4>
                    <p className="description">
                      {expandedIndex === index
                        ? infrastructure.description // Show full description if expanded
                        : infrastructure.description.split(".")[0] + "."}{" "}
                      {/* Only show the first sentence */}
                    </p>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      }



      {serviceIndex === 4 &&
        <div className="services flex md:flex-row flex-col ">
          <div className="left md:w-1/2 w-full flex flex-col items-center">
            {services[index].includes.map((includes, index) =>
              // Cards with even index go on the left
              <div className="rowcard mt-4" key={index}>
                <div
                  className={`servicecard md:h-40 h-auto mx-auto ${expandedIndex === index ? "expanded" : ""
                    }`}
                >
                  <h4 className="text-[#ff6000] font-semibold">{includes.name}</h4>
                  <p className="description">
                    {expandedIndex === index
                      ? includes.description // Show full description if expanded
                      : includes.description.split(".")[0] + "."}{" "}
                    {/* Only show the first sentence */}
                  </p>
                </div>
              </div>

            )}
          </div>
          <div className="right md:w-1/2 w-full flex flex-col items-center pt-4">
            {services[index].includes.map((includes, index) =>
              <div className="mr-auto" key={index}>
                <div
                  className={`ml-4 md:h-44 h-auto md:mt-0 mt-10 mx-auto ${expandedIndex === index ? "expanded" : ""
                    }`}
                >
                  <h4 className="text-[#ff6000] font-semibold">{includes.heading}</h4>

                  <ul className="flex flex-row flex-wrap">
                    {includes.features.map((feature, i) => (
                      <li className="text-md mt-3 text-white list-disc ml-8" key={i}>{feature}</li>
                    ))}
                  </ul>

                </div>
              </div>
            )}
          </div>
        </div>
      }
      {serviceIndex === 4 && <CollaborationEmail />}


      {serviceIndex === 6 && <WhyComX />}
      {serviceIndex === 8 && <InnoProjects />}
      {serviceIndex === 8 && <InnoTechnology />}
      {serviceIndex === 8 && <InnoIOT />}
      
      {/* contact and footer  */}
      <ServiceSlider />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Services;
