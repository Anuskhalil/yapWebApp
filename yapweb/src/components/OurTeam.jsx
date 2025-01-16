import React from "react";
import { Container } from "react-bootstrap";
import "./OurTeam.css";
import TeamSlider from "./TeamSlider"; // Slider Component
import TeamGrid from "./TeamGrid"; // Optional Grid Component for Team Members

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
    <Container className="our-team-container">
      {/* Section Heading */}
      <div className="main-head">
        <h1>Meet Our Team</h1>
        <h3>Celebrities and Influencers</h3>
      </div>

      {/* Circular Layout for Celebrities */}
      <div className="circular-layout">
        {celebrities.map((celebrity, index) => (
          <div key={index} className="circular-item">
            <img src={celebrity.image} alt={celebrity.name} className="circle-img" />
            <div className="overlay">
              <div className="text">{celebrity.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Section for Team Members */}
      <h3 className="teamMembers mt-5">YAP Team Members</h3>
      <TeamSlider />
      <TeamGrid />
    </Container>
  );
};

export default OurTeam;
