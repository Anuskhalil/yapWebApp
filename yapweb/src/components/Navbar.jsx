import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../images/yap_hero_img.png';
import './Navbar.css';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false); // Track navbar state
  const navigate = useNavigate();

  const handleToggle = () => setExpanded(!expanded); // Toggle navbar
  const handleNavItemClick = (navigateTo) => {
    setExpanded(false); // Collapse the navbar
    navigate(navigateTo); // Navigate to the desired route
  };

  return (
    <Navbar expand="lg" id="navbar" className="fixed-top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Youth Ambassador Programme Logo"
            className="navbar-logo"
            onClick={() => window.location.reload()} // Refresh the page
            style={{ cursor: 'pointer' }} // Optional: Change cursor to pointer
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle} // Handle toggle for collapse
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4" id="navItems">
            <Nav.Link onClick={() => handleNavItemClick('/')}>Home</Nav.Link>
            <Nav.Link href='#societyHeader' onClick={() => handleNavItemClick('/')}>
              Our Societies
            </Nav.Link>
            <Nav.Link onClick={() => handleNavItemClick('/AboutYap')}>
              About Us
            </Nav.Link>

            {/* Dropdown for Why Join Us */}
            <NavDropdown
              title={<span>Why Join Us</span>}
              id="why-join-us-dropdown"
            >
              <NavDropdown.Item onClick={() => handleNavItemClick('/yap-event-access')}>
                YAP Event Access
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/courses')}>
                Courses that we Offer
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/ourWorkshops')}>
                Our Workshops
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/internships')}>
                Internships
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/volunteering')}>
                Volunteering in Big Events
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavItemClick('/acp-events')}>
                ACP Events
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link onClick={() => handleNavItemClick('#contact')}>
              Contact
            </Nav.Link>
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
