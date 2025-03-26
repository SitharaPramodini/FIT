import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Projects.css";
import '../transition.css'

const Projects = () => {
  const cards = [
    {
      name: "Mohamed Yousef",
      bold: "281 Million",
      description:
        "SD-WAN with 375 Branches with PR and DR",
      img: "projects/peoples.png",
    },
    {
        name: "Mohamed Yousef",
        description: "FortiGate SD-WAN Cisco LAN Network Cisco Firepower FW NEC IP Communication System 10,000+ Users",
        bold: "165 Million",
        img: "projects/singer.png",
      },
      {
        name: "Mohamed Yousef",
        description: "Cisco LAN Network, Cisco Firewall",
        bold: "75 Million",
        img: "projects/airtel.png",
      },
      {
        name: "Mohamed Yousef",
        description: "LAN, Firewall, PABX, SD-WAN, WIFI, Data backup & replication Email 6500+ Users",
        bold: "148 Million",
        img: "projects/hayleys.png",
      },
      {
        name: "Mohamed Yousef",
        description: "PABX Solution Call Center Solution 200+ Users",
        bold: "45 Million",
        img: "projects/motor.png",
      },
      {
        name: "Mohamed Yousef",
        description: "LAN, Wi-Fi, PABX, Public Address, Media Hub, GRMS, BGM IP TV, Structured Caballing, Fire, Electrical 2000+ Users",
        bold: "645 Million",
        img: "projects/araliya.png",
      },
      {
        name: "Mohamed Yousef",
        description: "LAN, Firewall, Wi-Fi, PABX, 3000+ Users, lighting",
        bold: "247 Million",
        img: "projects/council.png",
      },
      {
        name: "Mohamed Yousef",
        description: "E- mail Solution Spam Filtering Datacenter, UPS, IP Video ( CCTV), Structured Caballing 10,000+ Users",
        bold: "184 Million",
        img: "projects/boc.png",
      },
      {
        name: "Mohamed Yousef",
        description: "Ruckus Wi-Fi Datacenter, UPS",
        bold: "95 Million",
        img: "projects/telecome.png",
      },
      {
        name: "Mohamed Yousef",
        description: "Cisco LAN Network, Paloalto Firewall, Fortigate Firewall",
        bold: "95 Million",
        img: "projects/siyapatha.png",
      },
      {
        name: "Mohamed Yousef",
        description: "LAN, Wi-Fi, Firewall, PABX Video Conferencing Door Access Control, Structured Caballing",
        bold: "157 Million",
        img: "projects/DS.png",
      },
      {
        name: "Mohamed Yousef",
        description: "SD-WAN with 375 Branches with PR and DR",
        bold: "281 Million",
        img: "projects/defence.png",
      },
  ];

  return (
    // <div className="home flex w-full bg-[#161616] px-4 pt-16">
    <section className="slide-container h-auto bg-[#020a1a] ">
        <h2 className="pt-4 text-3xl text-center font-bold text-white md:text-5xl md:leading-[1.2]">Key Projects</h2>

      <Swiper
  className="slide-content"
  modules={[Navigation]}
  slidesPerView={4}  
  loop={true}
  grabCursor={true}
  centeredSlides={true}
  pagination={{
    clickable: true,
    dynamicBullets: true,
  }}
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
  breakpoints={{
    0: { slidesPerView: 1 },
    520: { slidesPerView: 2 },
    950: { slidesPerView: 3 },
    1200: { slidesPerView: 4 }, 
  }}
>
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="swiper-slide ">
            <div className="container w-[237px] mt-20 ">
              <div className="proj-card w-[237px] bg-white">
                <div className="image">
                {/* <h3>hello</h3> */}
                  <img src={card.img} alt={card.name} className="mt-[-3rem]" />
                </div>
                <div className="content">
                <p className=" text-gray-500 text-sm font-medium">{card.description}</p>
                <h2 className="mt-2 text-xl font-bold text-[#ff6000] md:text-2xl md:leading-[1]">{card.bold}</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </section>
    // </div>
  );
};

export default Projects;
