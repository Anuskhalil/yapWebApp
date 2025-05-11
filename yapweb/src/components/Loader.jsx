import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../LoaderIcon.json';

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
    <div className="loader-container flex justify-center items-center h-screen bg-gradient-to-br from-gray-100 to-white">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default Loader;