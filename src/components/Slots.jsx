import React from 'react';
import styles from './Slots.module.css';

const Slots = React.forwardRef((props, reelRef) => {
  return (
    <div className="w-24 h-36 border-2 rounded-md overflow-hidden border-[#C278F0] bg-[#C278F0] bg-opacity-15 flex items-center justify-center">
      <div
        ref={reelRef}
        className={`h-[155px] w-full bg-cover reel ${styles.reelBackground}`}
      />
    </div>
  );
});

export default Slots;
