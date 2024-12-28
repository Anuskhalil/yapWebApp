// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../images/yap_hero_img.png';
import './Navbar.css';
// import LoginModal from './LoginModal';
// import SignUpModal from './SignUpModal';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate()

  const handleTeamClick = () => {
    navigate('/our-team');
  };

  // const [showLogin, setShowLogin] = useState(false);
  // const [showSignUp, setShowSignUp] = useState(false);

  // const handleLoginClose = () => setShowLogin(false);
  // const handleLoginShow = () => setShowLogin(true);

  // const handleSignUpClose = () => setShowSignUp(false);
  // const handleSignUpShow = () => setShowSignUp(true);

  const home = () => {
    navigate('/')
  }
  const aboutYAP = () => {
    navigate('/AboutYap')
  }
  const event = () =>{
    navigate('/events')
  }

  return (
    <>
      <Navbar expand="lg" id='navbar' className="fixed-top">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src={logo}
              alt="Youth Ambassador Programme Logo"
              className="navbar-logo"
            />
            {/* <span className="ms-2">Youth Ambassadors Programme</span> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4" id='navItems'>
              <Nav.Link href="" onClick={home}>Home</Nav.Link>
              <Nav.Link href="#OurSociety" onClick={home}>Our Societies</Nav.Link>
              <Nav.Link href="" onClick={aboutYAP}>About Us</Nav.Link>
              <Nav.Link href="" onClick={event}>Events</Nav.Link>
              {/* <Nav.Link href="#blog">Blog</Nav.Link> */}
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Button variant="dark" className="fw-bold nav-btn" onClick={handleTeamClick}>
                <span>Our Team</span>
              </Button>
              {/* <Nav.Link href="#login">
                <Button variant="dark" className='fw-bold' onClick={handleLoginShow}>Log In</Button>
              </Nav.Link>
              <Nav.Link href="#signup">
                <Button variant="dark" className='fw-bold' onClick={handleSignUpShow}>Sign Up</Button>
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <LoginModal show={showLogin} handleClose={handleLoginClose} />
      <SignUpModal show={showSignUp} handleClose={handleSignUpClose} /> */}
    </>
  );
};

export default NavigationBar;
