import React from 'react';

function MissionVisionValues() {
  return (
    <div className="mission-vision-container max-w-6xl mx-auto py-5 mt-40 text-center">
      <div className="mission-section mb-10 p-5 bg-gradient-to-br from-gray-100 to-white rounded-lg shadow-md">
        <h1 className="section-title text-4xl md:text-5xl text-gray-800 font-bold mb-5">
          Our Mission
        </h1>
        <p className="section-text text-lg md:text-xl text-gray-600 leading-relaxed">
          To nurture the youth of Pakistan as custodians of our rich heritage, values, and traditions, equipping them with the skills and wisdom to serve their communities, strengthen national unity, and contribute to a brighter future.
        </p>
      </div>
      <div className="vision-section mb-10 p-5 bg-gradient-to-br from-gray-100 to-white rounded-lg shadow-md">
        <h1 className="section-title text-4xl md:text-5xl text-gray-800 font-bold mb-5">
          Our Vision
        </h1>
        <p className="section-text text-lg md:text-xl text-gray-600 leading-relaxed">
          To inspire a generation of young Pakistanis who uphold our cultural legacy, embody the spirit of resilience and service, and lead the nation with honor, integrity, and a commitment to progress.
        </p>
      </div>
    </div>
  );
}

export default MissionVisionValues;