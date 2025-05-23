import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import team member images and social media icons
import azaibKhan from "../images/TeamMember/azaibKhanYAP.jpg";
import mazhar from "../images/TeamMember/mazhar.png";
import sumair from "../images/TeamMember/sumairYAP.jpg";
import tayyab from "../images/TeamMember/tayyabYAP.jpg";
import taimoor from "../images/TeamMember/taimorYAP.jpg";
import ghulam from "../images/TeamMember/ghulamYAP.jpeg";
import laraib from "../images/TeamMember/laraibYAP.jpg";
import anus from "../images/TeamMember/anusYAP.jpg";
import mahnoor from "../images/TeamMember/mahnoorYAP.jpg";
import rimsha from "../images/TeamMember/rimshaYAP.jpg";
import noman from "../images/TeamMember/noman.jpg";
import eeman from "../images/TeamMember/eemanYAP.jpg";
import aqsa from "../images/TeamMember/aqsa.jpg";
import usman from "../images/TeamMember/usmanYAP.jpg";
import hamza from "../images/TeamMember/hamzaYAP.jpg";
import mifrah from "../images/TeamMember/mifraYAP.jpg";
import muhammadAli from "../images/TeamMember/aliYAP.jpg";
import khanHassan from "../images/TeamMember/khanHassanYAP.jpg";
import mahnoorKamal from "../images/TeamMember/mahnoorKamalYAP.jpg";
import asad from "../images/TeamMember/asadYAP.jpg";
import abGhani from "../images/TeamMember/abGhaniYAP.jpg";
import laiba from "../images/TeamMember/laibaYAP.jpg";
import armanSami from "../images/TeamMember/armanSamiYAP.jpg";
import syedAlwaz from "../images/TeamMember/syedAlwazYAP.jpg";
import rawaidKhan from "../images/TeamMember/rawaidKhanYAP.jpg";

// Social media icons
import { FaLinkedin, FaGithub } from "react-icons/fa";

const TeamGrid = () => {
  const teamMembers = [
    { name: "Azaib Khan", role: "Lead", image: azaibKhan, linkedin: "https://linkedin.com/in/azaib", github: "https://github.com/azaib" },
    { name: "Mazhar Suleman Noorani", role: "Lead", image: mazhar, linkedin: "https://linkedin.com/in/mazhar", github: "https://github.com/mazhar" },
    { name: "Khan Hassan Afridi", role: "Lead", image: khanHassan, linkedin: "https://linkedin.com/in/khanhassan", github: "https://github.com/khanhassan" },
    { name: "Sumair", role: "Team Member", image: sumair, linkedin: "https://linkedin.com/in/sumair", github: "https://github.com/sumair" },
    { name: "Tayyab", role: "Team Member", image: tayyab, linkedin: "https://linkedin.com/in/tayyab", github: "https://github.com/tayyab" },
    { name: "Taimor", role: "Team Member", image: taimoor, linkedin: "https://linkedin.com/in/taimor", github: "https://github.com/taimor" },
    { name: "Arman Sami", role: "Team Member", image: armanSami, linkedin: "https://linkedin.com/in/armansami", github: "https://github.com/armansami" },
    { name: "Laraib Wazeer", role: "Team Member", image: laraib, linkedin: "https://linkedin.com/in/laraib", github: "https://github.com/laraib" },
    { name: "Hamza Hussain Shah", role: "Team Member", image: hamza, linkedin: "https://linkedin.com/in/hamza", github: "https://github.com/hamza" },
    { name: "Ghulam Rasool", role: "Team Member", image: ghulam, linkedin: "https://linkedin.com/in/ghulam", github: "https://github.com/ghulam" },
    { name: "Muhammad Ali", role: "Team Member", image: muhammadAli, linkedin: "https://linkedin.com/in/ali", github: "https://github.com/ali" },
    { name: "Mahnoor", role: "Team Member", image: mahnoor, linkedin: "https://linkedin.com/in/mahnoor", github: "https://github.com/mahnoor" },
    { name: "Rimsha", role: "Team Member", image: rimsha, linkedin: "https://linkedin.com/in/rimsha", github: "https://github.com/rimsha" },
    { name: "Anus Khalil", role: "Team Member", image: anus, linkedin: "https://linkedin.com/in/anus", github: "https://github.com/anus" },
    { name: "Usman Ali Shah", role: "Team Member", image: usman, linkedin: "https://linkedin.com/in/usman", github: "https://github.com/usman" },
    { name: "Syeda Mifrah Sajid", role: "Team Member", image: mifrah, linkedin: "https://linkedin.com/in/mifrah", github: "https://github.com/mifrah" },
    { name: "Asad", role: "Team Member", image: asad, linkedin: "https://linkedin.com/in/asad", github: "https://github.com/asad" },
    { name: "Laiba Sheikh", role: "Team Member", image: laiba, linkedin: "https://linkedin.com/in/laiba", github: "https://github.com/laiba" },
    { name: "Mahnoor Kamal", role: "Team Member", image: mahnoorKamal, linkedin: "https://linkedin.com/in/mahnoorKamal", github: "https://github.com/mahnoorKamal" },
    { name: "Abdul Ghani", role: "Team Member", image: abGhani, linkedin: "https://linkedin.com/in/abGhani", github: "https://github.com/abGhani" },
    { name: "Noman", role: "Team Member", image: noman, linkedin: "https://linkedin.com/in/noman", github: "https://github.com/noman" },
    { name: "Eeman", role: "Team Member", image: eeman, linkedin: "https://linkedin.com/in/eeman", github: "https://github.com/eeman" },
    { name: "Aqsa", role: "Team Member", image: aqsa, linkedin: "https://linkedin.com/in/aqsa", github: "https://github.com/aqsa" },
    { name: "Syed Alwaz", role: "Team Member", image: syedAlwaz, linkedin: "https://linkedin.com/in/alwaz", github: "https://github.com/alwaz" },
    { name: "Rawaid Khan", role: "Team Member", image: rawaidKhan, linkedin: "https://linkedin.com/in/rawaidKhan", github: "https://github.com/rawaidKhan" },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="container-team max-w-6xl mx-auto px-6 py-10 overflow-hidden" id="OurTeam">
      <Slider {...settings} className="main-team-slider">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-slide text-center p-5 bg-white rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="image-wrapper flex justify-center items-center mb-4">
              <img src={member.image} alt={member.name} className="team-member-image w-30 h-30 rounded-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
            <p className="text-base text-gray-600">{member.role}</p>
            <div className="social-links flex justify-center gap-4 mt-4">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon text-xl text-gray-600 hover:text-blue-600 transition-colors">
                <FaLinkedin />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-icon text-xl text-gray-600 hover:text-gray-900 transition-colors">
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamGrid;