// npm install react-lottie

import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../LoaderIcon.json';
import './Loader.css';

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="loader-container">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default Loader;