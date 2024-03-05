// PlayApp.js
import React, { useRef, useState, useEffect } from 'react';
import styles from './PlayApp.module.css';
import congratsImage from '../assets/congrats.svg';
import SpinBtn from '../components/SpinBtn';
import FirstPrizeImage from '../components/FirstPrize';
import roll from '../constants/CommonFunction';
import Slots from '../components/Slots';

function PlayApp() {
  const reelsRef = useRef([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showFirstPrize, setShowFirstPrize] = useState(false);

  useEffect(() => {
    if (isSpinning) {
      setShowFirstPrize(false);

      const rollPromises = reelsRef.current.map((reel, i) => roll(reel, i));

      Promise.all(rollPromises).then(() => {
        setShowFirstPrize(true);
      });
    }
  }, [isSpinning]);

  const startSlotMachine = () => {
    if (!isSpinning) {
      setIsSpinning(true);
    }
  };

  return (
    <div
      className={`h-screen w-screen overflow-hidden select-none relative ${styles.mainBackground}`}
    >
      <div className="flex flex-col h-5/6 justify-center items-center">
        <img src={congratsImage} alt="Congratulations" className="w-2/3" />

        <FirstPrizeImage
          opacity={showFirstPrize ? 'opacity-100' : 'opacity-0'}
        />

        <div
          className={`h-96 w-full bg-no-repeat -mt-20 ${styles.highlightBackground}`}
        >
          <div className="flex items-center justify-center gap-x-3 mt-32">
            {[...Array(6).keys()].map((index) => {
              const reelRef = (ref) => {
                reelsRef.current[index] = ref;
              };

              return <Slots ref={reelRef} key={index} />;
            })}
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10">
        <SpinBtn onClick={startSlotMachine} disabled={isSpinning} />
      </div>
    </div>
  );
}

export default PlayApp;
