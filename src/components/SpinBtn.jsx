import React from 'react';
import spinbtn1 from '../assets/images/btn-1.svg';
import spinbtn2 from '../assets/images/btn-2.svg';

function SpinBtn() {
  return (
    <button type="button" aria-label="spin">
      <img src={spinbtn1} alt="spin-btn1" className="w-60 xl:w-80 " />
      <img src={spinbtn2} alt="spin-btn2" className="w-60 xl:w-80 hidden" />
    </button>
  );
}

export default SpinBtn;
