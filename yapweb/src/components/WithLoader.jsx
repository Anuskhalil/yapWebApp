import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const WithLoader = (Component) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsLoading(false); 
      }, 1000); 
      return () => clearTimeout(timeout);
    }, []);

    return isLoading ? <Loader /> : <Component {...props} />;
  };
};

export default WithLoader;
