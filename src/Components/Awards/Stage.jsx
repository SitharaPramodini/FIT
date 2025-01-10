import React, { useState } from "react";
import './Stage.css';

const Stage = () => {
  const [selectedCard, setSelectedCard] = useState(null); // State to store selected card

  const cards = [
    "principles/apache.png",
    "principles/3CX.png",
    "principles/cisco.png",
    "principles/edb.png",
    "principles/fcs.png",
    "principles/forcepoint.png",
    "principles/fortinet.png",
    "principles/hewlett.png",
    "principles/nec.png",
    "principles/nexans.png",
    "principles/openstack.png",
    "principles/paloalto.svg",
    "principles/radware.png",
    "principles/redhat.png",
    "principles/vicarius.png",
    "principles/zimbra.png",
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card); // Set the clicked card as selected
  };

  return (
    <div className="sticky w-full bg-gradient-to-b from-[#111827] to-transparent text-white pt-20 pb-10 overflow-hidden">
      <header>
        <div className="wrapper">
          <div className="layer1">
            <div className="curtain animated slideOutLeft"></div>
            <div className="curtain animated slideOutRight"></div>
          </div>
          <div className="layer2">
            {/* Conditional rendering: show the image if a card is selected */}
            {selectedCard ? (
              <img
                src={selectedCard}
                alt="Selected Card"
                className="selected-card-animation"
              />
            ) : (
              <h2 className="awardheader animate-on-scroll px-72 text-center text-title mt-[-5rem] text-3xl font-bold text-white md:text-5xl md:leading-[1.2]">
                Recognition for Our Achievements
              </h2>
            )}
          </div>
        </div>
        <div className="secret"></div>
      </header>
      <div>
        <div className="slider-container px-4 py-2 opacity-50">
          {/* Sliding container */}
          <div className="animate-scroll">
            {cards.map((card, index) => (
              <div
                key={index}
                className="scard group"
                onClick={() => handleCardClick(card)} // Add click handler
              >
                <img
                  src={card}
                  alt={`Card ${index + 1}`}
                  className="px-10 cursor-pointer"
                />
              </div>
            ))}

            {/* Loop for seamless sliding */}
            {cards.map((card, index) => (
              <div
                key={`loop-${index}`}
                className="scard group"
                onClick={() => handleCardClick(card)} // Add click handler
              >
                <img
                  src={card}
                  alt={`Loop Card ${index + 1}`}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage;
