import React from "react";
import TeamSlider from "./TeamSlider";
import TeamGrid from "./TeamGrid";

// Celebrity Images
import sahirAliBagga from "../images/Celebrities/celebrity1.jpeg";
import mahiraKhan from "../images/Celebrities/celebrity2.jpg";
import anwarmaqsood from "../images/Celebrities/celebrity3.jpg";
import fahadMustafa from "../images/Celebrities/celebrity4.jpg";
import asimAzhar from "../images/Celebrities/celebrity5.jpeg";
import umerAlam from "../images/Celebrities/celebrity6.jpeg";
import hibaBukhari from "../images/Celebrities/celebrity7.jpg";

const celebrities = [
  { name: "Sahir Ali Baggha", image: sahirAliBagga },
  { name: "Mahira Khan", image: mahiraKhan },
  { name: "Anwar Maqsood", image: anwarmaqsood },
  { name: "Fahad Mustafa", image: fahadMustafa },
  { name: "Asim Azhar", image: asimAzhar },
  { name: "Umer Alam", image: umerAlam },
  { name: "Hiba Bukhari", image: hibaBukhari },
];

const OurTeam = () => {
  return (
    <div className="our-team-container max-w-6xl mx-auto p-5 mt-60 rounded-lg">
      {/* Section Heading */}
      <div className="main-head text-center mb-8">
        <h1 className="section-title text-6xl font-bold text-gray-800">Meet Our Team</h1>
        <h3 className="section-subtitle text-2xl text-gray-600">Celebrities and Influencers</h3>
      </div>

      {/* Circular Layout for Celebrities */}
      <div className="circular-layout flex justify-center flex-wrap">
        {celebrities.map((celebrity, index) => (
          <div key={index} className="circular-item mx-5 mb-6 relative w-56 h-56 rounded-full overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer">
            <img src={celebrity.image} alt={celebrity.name} className="circle-img w-full h-full object-cover" />
            <div className="overlay absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/60 opacity-0 transition-opacity duration-300">
              <div className="text text-white text-xl font-bold text-center">{celebrity.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Section for Team Members */}
      <div className="team-members-section mt-20">
        <h3 className="teamMembers text-center text-6xl font-bold text-black mb-8">YAP Team Members</h3>
        <TeamSlider />
        <TeamGrid />
      </div>
    </div>
  );
};

export default OurTeam;