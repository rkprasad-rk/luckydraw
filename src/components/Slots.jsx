import React from 'react';
import num0 from '../assets/images/num0.svg';
import num1 from '../assets/images/num1.svg';
import num2 from '../assets/images/num2.svg';
import num3 from '../assets/images/num3.svg';
import num4 from '../assets/images/num4.svg';
import num5 from '../assets/images/num5.svg';
import num6 from '../assets/images/num6.svg';
import num7 from '../assets/images/num7.svg';
import num8 from '../assets/images/num8.svg';
import num9 from '../assets/images/num9.svg';

function Slots() {
  return (
    <div className="w-20 h-32 border-2 rounded-md border-[#C278F0] bg-[#C278F0] bg-opacity-15 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <img src={num0} alt="num0" />
        <img src={num1} alt="num1" />
        <img src={num2} alt="num2" />
        <img src={num3} alt="num3" />
        <img src={num4} alt="num4" />
        <img src={num5} alt="num5" />
        <img src={num6} alt="num6" />
        <img src={num7} alt="num7" />
        <img src={num8} alt="num8" />
        <img src={num9} alt="num9" />
      </div>
    </div>
  );
}

export default Slots;
