// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer py-5 mt-5 text-white">
      <Container>
        <Row className="justify-content-between">
          {/* About Section */}
          <Col xs={12} md={4} className="mb-4">
            <h3 className="mb-3">ACP-YAP</h3>
            <p className="footer-text">
              As a Youth Ambassador, you will get special access to events, our modern library, and chances to improve your skills. Meet new people, work on projects together, and enjoy discounts at our cafe. This program helps you grow and get involved in the arts. Don't miss this chance to learn and make a difference.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col xs={6} md={3} className="mb-4">
            <h3 className="mb-3 ms-4">Quick Links</h3>
            <Nav className="flex-column">
              <Nav.Link className="footer-link text-decoration-none" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="footer-link text-decoration-none" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="footer-link text-decoration-none" href="#service">
                Service
              </Nav.Link>
              <Nav.Link className="footer-link text-decoration-none" href="#blog">
                Blog
              </Nav.Link>
              <Nav.Link className="footer-link text-decoration-none" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Col>

          {/* Contact Section */}
          <Col xs={6} md={4} className="mb-3">
            <h3 className="mb-3">Get In Touch</h3>
            <p className="footer-text">
              <FaMapMarkerAlt className="contact-icons me-2" />
              7400. M.R Kiyani Road, Saddar Town Karachi, Pakistan
            </p>
            <p className="footer-text">
              <FaPhone className="contact-icons me-2" />
              +92 300-0802391
            </p>
            <p className="footer-text">
              <FaEnvelope className="contact-icons me-2" />
              info@acpkhi.com
            </p>
            <div className="social-icons mt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaYoutube />
              </a>
            </div>
          </Col>
        </Row>

        {/* Bottom Row */}
        <Row>
          <Col className="text-center mt-4">
            <p className="footer-bottom-text">© 2024 Youth Ambassador Program. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
