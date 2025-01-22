import React from 'react';
import './MissionVisionValues.css';

function MissionVisionValues() {
  return (
    <div className="mission-vision-container">
      <div className="mission-section">
        <h1 className="section-title">Our Mission</h1>
        <p className="section-text">
          To nurture the youth of Pakistan as custodians of our rich heritage, values, and traditions, equipping them with the skills and wisdom to serve their communities, strengthen national unity, and contribute to a brighter future.
        </p>
      </div>
      <div className="vision-section">
        <h1 className="section-title">Our Vision</h1>
        <p className="section-text">
          To inspire a generation of young Pakistanis who uphold our cultural legacy, embody the spirit of resilience and service, and lead the nation with honor, integrity, and a commitment to progress.
        </p>
      </div>
    </div>
  );
}

export default MissionVisionValues;
