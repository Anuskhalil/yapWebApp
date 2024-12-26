import React from "react";
import "./TeamGrid.css";
// Import team member images
import azaib from "../images/TeamMember/azaib.png";
import mazhar from "../images/TeamMember/mazhar.png";
import sumair from "../images/TeamMember/sumairYAP.jpg";
import taimoor from "../images/TeamMember/taimorYAP.jpg";
import ghulam from "../images/TeamMember/ghulamYAP.jpeg";
import anus from "../images/TeamMember/anus.png";
import mahnoor from "../images/TeamMember/mahnoorYAP.jpg";
import noman from "../images/TeamMember/noman.jpg";
import eeman from "../images/TeamMember/eemanYAP.jpg";
import aqsa from "../images/TeamMember/aqsa.jpg";
import usman from "../images/TeamMember/usmanYAP.jpg";
import hamza from "../images/TeamMember/hamzaYAP.jpg";
import mifra from "../images/TeamMember/mifraYAP.jpg";
import muhammadAli from "../images/TeamMember/aliYAP.jpg";

const TeamGrid = () => {
  // Team member data
  const teamMembers = [
    { name: "Azaib Khan", role: "Leader", image: azaib },
    { name: "Mazhar Suleman Noorani", role: "Team Member", image: mazhar },
    { name: "Sumair", role: "Team Member", image: sumair },
    { name: "Ghulam Rasool", role: "Team Member", image: ghulam },
    { name: "Anus Khalil", role: "Team Member", image: anus },
    { name: "Taimor", role: "Team Member", image: taimoor },
    { name: "mahnoor", role: "Team Member", image: mahnoor },
    { name: "Usman Ali Shah", role: "Team Member", image: usman },
    { name: "Noman", role: "Team Member", image: noman },
    { name: "Eeman", role: "Team Member", image: eeman },
    { name: "Aqsa", role: "Team Member", image: aqsa },
    { name: "Hamza Hussain Shah", role: "Team Member", image: hamza },
    { name: "Syeda Mifrah Sajid", role: "Team Member", image: mifra },
    { name: "Muhammad Ali", role: "Team Member", image: muhammadAli },
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
