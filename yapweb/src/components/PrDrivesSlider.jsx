import React, { useEffect, useState, useMemo } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './PrDrives.css';

// Import images for PR Drives
import prDrive1 from '../images/PrDrives/pr1.jpg';
import prDrive2 from '../images/PrDrives/pr2.jpg';
import prDrive3 from '../images/PrDrives/pr3.jpg';
import prDrive4 from '../images/PrDrives/pr4.jpg';
import prDrive5 from '../images/PrDrives/pr5.jpg';
import prDrive6 from '../images/PrDrives/pr6.jpg';
import prDrive7 from '../images/PrDrives/pr7.jpg';
import prDrive8 from '../images/PrDrives/pr8.jpg';
import prDrive9 from '../images/PrDrives/pr9.jpg';
import prDrive10 from '../images/PrDrives/pr10.jpg';
import prDrive11 from '../images/PrDrives/pr11.jpg';
import prDrive12 from '../images/PrDrives/pr12.jpg';

const PrDrives = () => {
  const prDrivesPhotos = useMemo(() => [
    { title: 'PR Drive 1', image: prDrive1 },
    { title: 'PR Drive 2', image: prDrive2 },
    { title: 'PR Drive 3', image: prDrive3 },
    { title: 'PR Drive 4', image: prDrive4 },
    { title: 'PR Drive 5', image: prDrive5 },
    { title: 'PR Drive 6', image: prDrive6 },
    { title: 'PR Drive 7', image: prDrive7 },
    { title: 'PR Drive 8', image: prDrive8 },
    { title: 'PR Drive 9', image: prDrive9 },
    { title: 'PR Drive 10', image: prDrive10 },
    { title: 'PR Drive 11', image: prDrive11 },
    { title: 'PR Drive 12', image: prDrive12 },
  ], []);

  const itemsPerPage = 8; // Number of images per page
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedPhotos, setPaginatedPhotos] = useState([]);

  // Pagination Logic
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedPhotos(prDrivesPhotos.slice(startIndex, endIndex));
  }, [currentPage, prDrivesPhotos]);

  // Initialize AOS for animations and reset it on every page visit
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false, // Make sure animations trigger each time content appears
    });

    // Refresh AOS on every page visit to re-trigger animations
    AOS.refresh();
  }, [currentPage]);

  // State for Modal
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const totalPages = Math.ceil(prDrivesPhotos.length / itemsPerPage);

  return (
    <Container className="pr-drives-container">
      <div className="pr-drives-title animated-content fs-1 fw-bold">
        PR Drives Gallery
      </div>
      <Row>
        {paginatedPhotos.map((photo, index) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            className="pr-drives-photo-col"
            data-aos="fade-up" // Trigger AOS animations
          >
            <div
              className="pr-drives-photo-wrapper"
              onClick={() => handleImageClick(photo.image)}
            >
              <img
                className="img-fluid pr-drives-photo"
                src={photo.image}
                alt={photo.title}
              />
              <div className="pr-drives-photo-caption">
                <p>{photo.title}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <Button
          className="fw-bold hero-button"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          className="fw-bold hero-button"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>

      {/* Modal for Lightbox */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        <Modal.Body className="text-center modal-body">
          <img
            src={currentImage}
            alt="PR Drive"
            className="img-fluid large-modal-image"
            style={{
              borderRadius: '10px',
              maxHeight: '90vh',
              objectFit: 'contain',
            }}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default PrDrives;
