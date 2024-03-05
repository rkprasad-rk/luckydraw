/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import prizered from '../assets/prizered.svg';
import prizewhite from '../assets/prizewhite.svg';

function FirstPrizeImage({ opacity }) {
  const [currentImage, setCurrentImage] = useState(prizered);

  useEffect(() => {
    const imageToggleInterval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === prizered ? prizewhite : prizered
      );
    }, 500);

    return () => clearInterval(imageToggleInterval);
  }, []);

  return (
    <img
      src={currentImage}
      alt="congrats"
      className={`${opacity} w-1/3 -ml-14 -mt-7`}
    />
  );
}

export default FirstPrizeImage;
