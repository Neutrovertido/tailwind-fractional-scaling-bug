import React from "react";
import Header from "./components/Header";
import { useEffect } from 'react';

const App = () => {
  // Workaround for troublesome mx-auto not detecting fractional scaling
  useEffect(() => {
    function detectFractionalScaling() {
      const pixelRatio = window.devicePixelRatio;
      return pixelRatio >= 1.25 && pixelRatio % 1 !== 0; // If fractional scaling is on or above 125%
    }
    
    // This function will add a class that fixes the spacing with fractional scaling
    function adjustContainerForScaling() {
      const container = document.querySelector('.headercontainer');
      if (detectFractionalScaling() && container) {
        container.classList.add('px-16');
      } else if (container) {
        container.classList.remove('px-16');
      }
    }

    // These two functions will remove the spacing if the equivalent to XL viewport is not met
    function isXL() {
      return window.innerWidth >= 1280;
    }

    function resizeIfScaling() {
      const container = document.querySelector('.headercontainer');
      if (container.classList.contains('px-16') && !isXL()) {
        container.classList.remove('px-16');
        container.classList.add('px-4');
      } else if (container.classList.contains('px-4') && isXL()) {
        container.classList.remove('px-4');
        container.classList.add('px-16');
      }
    }

    // Run at website load
    adjustContainerForScaling();

    // Listen for resize events
    window.addEventListener('resize', resizeIfScaling);
    return () => window.removeEventListener('resize', resizeIfScaling);
  }, []);

  return (
    <div className="dark bg-gradient-to-tl from-slate-300 to-slate-500 text-neutral-200 min-h-screen">
      <div className="headercontainer container mx-auto p-4">
        <Header />
      </div>
    </div>
  );
};

export default App;
