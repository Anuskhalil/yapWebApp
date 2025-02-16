import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa"; // Import icons
import logo from "../images/yap_hero_img.png";
import "./Navbar.css";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  const handleToggle = () => setExpanded(!expanded);
  const handleNavItemClick = (navigateTo) => {
    setExpanded(false); // Close the navbar when a link is clicked
    navigate(navigateTo);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="custom-navbar fixed-top" expanded={expanded}>
      <Container fluid> {/* Use fluid container for full width */}
        {/* Logo */}
        <Navbar.Brand as="div" className="custom-navbar-brand">
          <img
            src={logo}
            alt="Youth Ambassador Programme Logo"
            className="navbar-logo"
            onClick={() => handleNavItemClick("/")} // Use handleNavItemClick for consistency
            style={{ cursor: "pointer" }}
          />
        </Navbar.Brand>

        {/* Toggle Button (Hamburger/Close Icon) */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggle}
          className="navbar-toggler"
        >
          {expanded ? <FaTimes /> : <FaBars />} {/* Change icon based on expanded state */}
        </Navbar.Toggle>

        {/* Navbar Links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {/* Home Link */}
            <Nav.Link
              onClick={() => handleNavItemClick("/")}
              className="nav-link"
            >
              Home
            </Nav.Link>

            {/* Philosophy Dropdown */}
            <NavDropdown
              title="Philosophy"
              id="philosophy-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item onClick={() => handleNavItemClick("/AboutYap")}>
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleNavItemClick("/missionVisionValues")}
              >
                Mission, Vision & Values
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleNavItemClick("/upcomingEvents")}
              >
                Upcoming Events
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick("/")}>
                Our Societies
              </NavDropdown.Item>
            </NavDropdown>

            {/* Our Courses Link */}
            <Nav.Link
              onClick={() => handleNavItemClick("/ourCourses")}
              className="nav-link"
            >
              Our Courses
            </Nav.Link>

            {/* Events Dropdown */}
            <NavDropdown
              title="Events"
              id="events-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item
                onClick={() => handleNavItemClick("/InternationalWorkshops")}
              >
                International Workshops
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick("/yapEvents")}>
                YAP Events/Workshops
              </NavDropdown.Item>
            </NavDropdown>

            {/* Network Dropdown */}
            <NavDropdown
              title="Network"
              id="network-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item onClick={() => handleNavItemClick("/")}>
                Our MoU's
              </NavDropdown.Item>
            </NavDropdown>

            {/* Library Link */}
            <Nav.Link
              onClick={() => handleNavItemClick("/library")}
              className="nav-link"
            >
              Library
            </Nav.Link>

            {/* Work With Us Dropdown */}
            <NavDropdown
              title="Work With Us"
              id="work-with-us-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item onClick={() => handleNavItemClick("/volunteering")}>
                Volunteering
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick("/internees")}>
                Internship Opportunities
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick("/")}>
                Contact
              </NavDropdown.Item>
            </NavDropdown>

            {/* Our Team Button */}
            <Button
              onClick={() => handleNavItemClick("/our-team")}
              className="nav-button"
            >
              Our Team
            </Button>

            {/* User Section (Conditional Rendering) */}
            {userName && (
              <NavDropdown
                title={
                  <span className="user-section">
                    <FaUser className="user-icon" />
                    {userName}
                  </span>
                }
                id="user-dropdown"
                className="nav-dropdown"
              >
                <NavDropdown.Item onClick={handleLogout}>
                  <FaSignOutAlt className="logout-icon" />
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;