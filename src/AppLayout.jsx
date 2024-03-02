import React from 'react';
import AppCSS from './App.module.css';
import congrats from './assets/images/congrats.svg';
import prizered from './assets/images/prizered.svg';
import prizewhite from './assets/images/prizewhite.svg';
import Slots from './components/Slots';
import SpinBtn from './components/SpinBtn';

function AppLayout() {
  return (
    <div
      className={`h-screen w-screen overflow-hidden relative ${AppCSS.mainbg}`}
    >
      <div className="flex flex-col h-5/6 justify-center items-center relative">
        <img src={congrats} alt="congrats" className="w-2/3" />
        <img
          src={prizered}
          alt="congrats"
          className=" w-1/3 -ml-14  absolute top-44"
        />
        <img
          src={prizewhite}
          alt="congrats"
          className=" w-1/3 -ml-14  absolute top-44"
        />
        <div className={`h-80 w-full relative  ${AppCSS.highlightbg}`}>
          <div className="flex items-center justify-center gap-x-2.5 mt-24">
            <Slots />
            <Slots />
            <Slots />
            <Slots />
            <Slots />
            <Slots />
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10">
        <SpinBtn />
      </div>
    </div>
  );
}

export default AppLayout;
