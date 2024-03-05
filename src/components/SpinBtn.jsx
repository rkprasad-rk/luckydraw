/* eslint-disable react/prop-types */
import React from 'react';
import SpinBtn1 from '../assets/btn-1.png';
import SpinBtn2 from '../assets/btn-2.png';

function SpinBtn({ onClick, disabled }) {
  return (
    <button
      type="button"
      aria-label="spin"
      onClick={onClick}
      disabled={disabled}
      className=""
    >
      {!disabled ? (
        <img src={SpinBtn1} alt="spin-btn1" className="w-60 xl:w-80 " />
      ) : (
        <img src={SpinBtn2} alt="spin-btn2" className="w-60 xl:w-80 " />
      )}
    </button>
  );
}

export default SpinBtn;
