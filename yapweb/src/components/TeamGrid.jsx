import React from "react";
import "./TeamGrid.css";
// Import team member images
import azaib from "../images/TeamMember/azaib.png";
import mazhar from "../images/TeamMember/mazhar.png";
import sumair from "../images/TeamMember/sumairYAP.jpg";
import tayyab from "../images/TeamMember/tayyabYAP.jpg";
import taimoor from "../images/TeamMember/taimorYAP.jpg";
import ghulam from "../images/TeamMember/ghulamYAP.jpeg";
import laraib from "../images/TeamMember/laraibYAP.jpg";
import anus from "../images/TeamMember/anus.jpg";
import mahnoor from "../images/TeamMember/mahnoorYAP.jpg";
import rimsha from "../images/TeamMember/rimshaYAP.jpg";
import noman from "../images/TeamMember/noman.jpg";
import eeman from "../images/TeamMember/eemanYAP.jpg";
import aqsa from "../images/TeamMember/aqsa.jpg";
import usman from "../images/TeamMember/usmanYAP.jpg";
import hamza from "../images/TeamMember/hamzaYAP.jpg";
import mifra from "../images/TeamMember/mifraYAP.jpg";
import muhammadAli from "../images/TeamMember/aliYAP.jpg";
import khanHassan from "../images/TeamMember/khanHassanYAP.jpg";
import mahnoorKamal from "../images/TeamMember/mahnoorKamalYAP.jpg";
import asad from "../images/TeamMember/asadYAP.jpg";
import abGhani from "../images/TeamMember/abGhaniYAP.jpg";
import laiba from "../images/TeamMember/laibaYAP.jpg";

const TeamGrid = () => {
  // Team member data
  const teamMembers = [
    { name: "Azaib Khan", role: "Lead", image: azaib },
    { name: "Mazhar Suleman Noorani", role: "Lead", image: mazhar },
    { name: "Khan Hassan Afridi", role: "Lead", image: khanHassan },
    { name: "Sumair", role: "Team Member", image: sumair },
    { name: "Tayyab", role: "Team Member", image: tayyab },
    { name: "Taimor", role: "Team Member", image: taimoor },
    { name: "Ghulam Rasool", role: "Team Member", image: ghulam },
    { name: "Laraib", role: "Team Member", image: laraib },
    { name: "Hamza Hussain Shah", role: "Team Member", image: hamza },
    { name: "Muhammad Ali", role: "Team Member", image: muhammadAli },
    { name: "mahnoor", role: "Team Member", image: mahnoor },
    { name: "rimsha", role: "Team Member", image: rimsha },
    { name: "Anus Khalil", role: "Team Member", image: anus },
    { name: "Usman Ali Shah", role: "Team Member", image: usman },
    { name: "Syeda Mifrah Sajid", role: "Team Member", image: mifra },
    { name: "Asad", role: "Team Member", image: asad },
    { name: "Laiba Sheikh", role: "Team Member", image: laiba },
    { name: "Mahnoor Kamal", role: "Team Member", image: mahnoorKamal },
    { name: "Abdul Ghani", role: "Team Member", image: abGhani },
    { name: "Noman", role: "Team Member", image: noman },
    { name: "Eeman", role: "Team Member", image: eeman },
    { name: "Aqsa", role: "Team Member", image: aqsa },
  ];

  return (
    <div className="team-grid-container">
      {teamMembers.map((member, index) => (
        <div className="team-member flip-card" key={index}>
          <div className="flip-card-inner">
            {/* Front side */}
            <div className="flip-card-front">
              <img
                src={member.image}
                alt={member.name}
                className="team-member-image"
              />
            </div>
            {/* Back side */}
            <div className="flip-card-back">
              <h3 className="team-member-title">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;
