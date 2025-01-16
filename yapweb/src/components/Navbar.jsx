import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { FaCog, FaUsers, FaBriefcase, FaCalendarAlt, FaNetworkWired, FaBook, FaHandshake } from "react-icons/fa";
import logo from "../images/yap_hero_img.png";
import "./Navbar.css";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false); // Track navbar state
  const navigate = useNavigate();

  const handleToggle = () => setExpanded(!expanded); // Toggle navbar
  const handleNavItemClick = (navigateTo) => {
    setExpanded(false); // Collapse the navbar
    navigate(navigateTo); // Navigate to the desired route
  };

  return (
    <Navbar expand="lg" className="custom-navbar fixed-top" expanded={expanded}>
      <Container>
        {/* Logo */}
        <Navbar.Brand className="custom-navbar-brand">
          <img
            src={logo}
            alt="Youth Ambassador Programme Logo"
            className="navbar-logo"
            onClick={() => window.location.reload()} // Refresh the page
            style={{ cursor: "pointer" }}
          />
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleNavItemClick('/')}>Home</Nav.Link>
            {/* Philosophy Dropdown */}
            <NavDropdown
              title={
                <span>
                  {/* <FaCog className="me-2" /> */}
                  Philosophy
                </span>
              }
              id="philosophy-dropdown"
            >
              <NavDropdown.Item onClick={() => handleNavItemClick('/about-us')}>
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/mission-vision-values')}>
                Mission, Vision & Values
              </NavDropdown.Item>
              <NavDropdown.Item href="#OurSociety" onClick={() => handleNavItemClick('/')}>
                Our Societies
              </NavDropdown.Item>
              {/* <NavDropdown.Item onClick={() => handleNavItemClick('/sustainability')}>
                How We Sustain
              </NavDropdown.Item> */}
            </NavDropdown>

            {/* People Dropdown */}
            <NavDropdown
              title={
                <span>
                  {/* <FaUsers className="me-2" /> */}
                  People
                </span>
              }
              id="people-dropdown"
            >
              <NavDropdown.Item onClick={() => handleNavItemClick('/trainers-consultants')}>
                Trainers & Consultants
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/board-of-directors')}>
                Board of Directors
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/advisory-council')}>
                Advisory Council
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/team')}>
                Team
              </NavDropdown.Item>
            </NavDropdown>

            {/* Work Dropdown */}
            <NavDropdown
              title={
                <span>
                  {/* <FaBriefcase className="me-2" /> */}
                  Work
                </span>
              }
              id="work-dropdown"
            >
              <NavDropdown.Item onClick={() => handleNavItemClick('/education')}>
                Education
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/key-projects')}>
                Key Projects
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/initiatives')}>
                Initiatives
              </NavDropdown.Item>
            </NavDropdown>

            {/* Events Dropdown */}
            <NavDropdown
              title={
                <span>
                  {/* <FaCalendarAlt className="me-2" /> */}
                  Events
                </span>
              }
              id="events-dropdown"
            >
              <NavDropdown.Item onClick={() => handleNavItemClick('/workshops')}>
                International Workshops
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/yapEvents')}>
                YAP Events
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/yapEvents')}>
                Our Societies Events
              </NavDropdown.Item>
            </NavDropdown>

            {/* Network Dropdown */}
            <NavDropdown
              title={
                <span>
                  {/* <FaNetworkWired className="me-2" /> */}
                  Network
                </span>
              }
              id="network-dropdown"
            >
              {/* <NavDropdown.Item onClick={() => handleNavItemClick('/clientele')}>
                Clientele
              </NavDropdown.Item> */}
              <NavDropdown.Item href="#mouSignedUni" onClick={() => handleNavItemClick('/')}>
                Our MoU's
              </NavDropdown.Item>
            </NavDropdown>

            {/* Library Dropdown */}
            <Nav.Link onClick={() => handleNavItemClick('/library')}>
              {/* <FaBook className="me-2" /> */}
              Library
            </Nav.Link>

            {/* Work With Us Dropdown */}
            <NavDropdown
              title={
                <span>
                  {/* <FaHandshake className="me-2" /> */}
                  Work With Us
                </span>
              }
              id="work-with-us-dropdown"
            >
              <NavDropdown.Item onClick={() => handleNavItemClick('/volunteering')}>
                Volunteering
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/internees')}>
                Internship Opportunities
              </NavDropdown.Item>
              <NavDropdown.Item href="#contact" onClick={() => handleNavItemClick('/')}>
                Contact
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/faqs')}>
                FAQs
              </NavDropdown.Item>
            </NavDropdown>
            <Button
              variant="dark"
              className="fw-bold nav-btn"
              onClick={() => handleNavItemClick('/our-team')}
            >
              <span>Our Team</span>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

