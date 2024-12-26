import React, { useEffect, useState, useMemo } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './MeetupSlider.css'; // Assuming you have a separate CSS file


// Import images for Meetup
// Page 01
import meetupimg1 from '../images/MeetUp/meetupimg1.jpg';
import meetupimg2 from '../images/MeetUp/meetupimg2.jpg';
import meetupimg3 from '../images/MeetUp/meetupimg3.jpg';
import meetupimg4 from '../images/MeetUp/meetupimg4.jpg';
import meetupimg5 from '../images/MeetUp/meetupimg5.jpg';
import meetupimg6 from '../images/MeetUp/meetupimg6.jpg';
import meetupimg7 from '../images/MeetUp/meetupimg7.jpg';
import meetupimg8 from '../images/MeetUp/meetupimg8.jpg';

// Page 02
import meetupimg9 from '../images/MeetUp/meetupimg9.jpg';
import meetupimg10 from '../images/MeetUp/meetupimg10.jpg';
import meetupimg11 from '../images/MeetUp/meetupimg11.jpg';
import meetupimg12 from '../images/MeetUp/meetupimg12.jpg';
import meetupimg13 from '../images/MeetUp/meetupimg13.jpg';
import meetupimg14 from '../images/MeetUp/meetupimg14.jpg';
import meetupimg15 from '../images/MeetUp/meetupimg15.jpg';
import meetupimg16 from '../images/MeetUp/meetupimg16.jpg';

// Page 03
import meetupimg17 from '../images/MeetUp/meetupimg17.jpg';
import meetupimg18 from '../images/MeetUp/meetupimg18.jpg';
import meetupimg19 from '../images/MeetUp/meetupimg19.jpg';
import meetupimg20 from '../images/MeetUp/meetupimg20.jpg';
import meetupimg21 from '../images/MeetUp/meetupimg21.jpg';
import meetupimg22 from '../images/MeetUp/meetupimg22.jpg';
import meetupimg23 from '../images/MeetUp/meetupimg23.jpg';
import meetupimg24 from '../images/MeetUp/meetupimg24.jpg';

// Page 04
import meetupimg25 from '../images/MeetUp/meetupimg25.jpg';
import meetupimg26 from '../images/MeetUp/meetupimg26.jpg';
import meetupimg27 from '../images/MeetUp/meetupimg27.jpg';
import meetupimg28 from '../images/MeetUp/meetupimg28.jpg';
import meetupimg29 from '../images/MeetUp/meetupimg29.jpg';
import meetupimg30 from '../images/MeetUp/meetupimg30.jpg';
import meetupimg31 from '../images/MeetUp/meetupimg31.jpg';
import meetupimg32 from '../images/MeetUp/meetupimg32.jpg';

const Meetup = () => {
  const meetupPhotos = useMemo(() => [
    // Replace with your images for Meetup
    { title: 'Meetup 25', image: meetupimg25 },
    { title: 'Meetup 26', image: meetupimg26 },
    { title: 'Meetup 27', image: meetupimg27 },
    { title: 'Meetup 28', image: meetupimg28 },
    { title: 'Meetup 29', image: meetupimg29 },
    { title: 'Meetup 30', image: meetupimg30 },
    { title: 'Meetup 31', image: meetupimg31 },
    { title: 'Meetup 32', image: meetupimg32 },
    { title: 'Meetup 1', image: meetupimg1 },
    { title: 'Meetup 2', image: meetupimg2 },
    { title: 'Meetup 3', image: meetupimg3 },
    { title: 'Meetup 4', image: meetupimg4 },
    { title: 'Meetup 5', image: meetupimg5 },
    { title: 'Meetup 6', image: meetupimg6 },
    { title: 'Meetup 7', image: meetupimg7 },
    { title: 'Meetup 8', image: meetupimg8 },
    { title: 'Meetup 9', image: meetupimg9 },
    { title: 'Meetup 10', image: meetupimg10 },
    { title: 'Meetup 11', image: meetupimg11 },
    { title: 'Meetup 12', image: meetupimg12 },
    { title: 'Meetup 13', image: meetupimg13 },
    { title: 'Meetup 14', image: meetupimg14 },
    { title: 'Meetup 15', image: meetupimg15 },
    { title: 'Meetup 16', image: meetupimg16 },
    { title: 'Meetup 17', image: meetupimg17 },
    { title: 'Meetup 18', image: meetupimg18 },
    { title: 'Meetup 19', image: meetupimg19 },
    { title: 'Meetup 20', image: meetupimg20 },
    { title: 'Meetup 21', image: meetupimg21 },
    { title: 'Meetup 22', image: meetupimg22 },
    { title: 'Meetup 23', image: meetupimg23 },
    { title: 'Meetup 24', image: meetupimg24 },
    // Add more images as needed
  ], []);

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedPhotos, setPaginatedPhotos] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedPhotos(meetupPhotos.slice(startIndex, endIndex));
  }, [currentPage]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
    AOS.refresh();
  }, [currentPage]);

  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const totalPages = Math.ceil(meetupPhotos.length / itemsPerPage);

  return (
    <Container className="meetup-container">
      <div className="meetup-title animated-content fs-1 fw-bold">
        Meetup Gallery
      </div>
      <Row>
        {paginatedPhotos.map((photo, index) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            className="meetup-photo-col"
            data-aos="fade-up" // Adding AOS animations to each photo
          >
            <div
              className="meetup-photo-wrapper"
              onClick={() => handleImageClick(photo.image)}
            >
              <img
                className="img-fluid meetup-photo"
                src={photo.image}
                alt={photo.title}
              />
              <div className="meetup-photo-caption">
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
            alt="Meetup"
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

export default Meetup;
