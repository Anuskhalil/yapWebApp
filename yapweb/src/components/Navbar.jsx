import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt } from "react-icons/fa"; // Added icons for user and logout
import logo from "../images/yap_logo_white.png";
import "./Navbar.css";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  const handleToggle = () => setExpanded(!expanded);
  const handleNavItemClick = (navigateTo) => {
    setExpanded(false);
    navigate(navigateTo);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token
    localStorage.removeItem("userName"); // Clear the user's name
    navigate("/login"); // Redirect to Login Page
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
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
          className="navbar-toggle bg-light"
        />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-link fw-bold" onClick={() => handleNavItemClick('/')}>Home</Nav.Link>
            <NavDropdown
              title="Philosophy"
              id="philosophy-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item onClick={() => handleNavItemClick('/AboutYap')}>
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/missionVisionValues')}>
                Mission, Vision & Values
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/upcomingEvents')}>
                Upcoming Events
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/')}>
                Our Societies
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="fw-bold" onClick={() => handleNavItemClick('/ourCourses')}>
              Our Courses
            </Nav.Link>

            <NavDropdown
              title="Events"
              id="events-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item onClick={() => handleNavItemClick('/InternationalWorkshops')}>
                International Workshops
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/yapEvents')}>
                YAP Events/Workshops
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Network"
              id="network-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item onClick={() => handleNavItemClick('/')}>
                Our MoU's
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="nav-link fw-bold" onClick={() => handleNavItemClick('/library')}>
              Library
            </Nav.Link>

            <NavDropdown
              title="Work With Us"
              id="work-with-us-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item onClick={() => handleNavItemClick('/volunteering')}>
                Volunteering
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/internees')}>
                Internship Opportunities
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/')}>
                Contact
              </NavDropdown.Item>
            </NavDropdown>

            <Button
              className="nav-button fw-bold"
              onClick={() => handleNavItemClick('/our-team')}
            >
              Our Team
            </Button>

            {/* User Section */}
            {userName && (
              <NavDropdown
                title={
                  <span className="user-section">
                    <FaUser className="user-icon me-2" />
                    {userName}
                  </span>
                }
                id="user-dropdown"
                className="nav-dropdown"
              >
                <NavDropdown.Item onClick={handleLogout}>
                  <FaSignOutAlt className="logout-icon" />
                  <span className="logout-icon">Logout</span>
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