import React, { useState, useEffect } from 'react';
import { CONTINUE_SLIDER_DATA } from '../utils/Helper';

const Cartoon = () => {
  const [sliderData, setSliderData] = useState(CONTINUE_SLIDER_DATA);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 768; // Adjust breakpoint as needed
      setSliderData(isDesktop ? CONTINUE_SLIDER_DATA.slice(0, 9) : CONTINUE_SLIDER_DATA);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="overflow-hidden mx-auto max-w-[1920px] h-[295px]">
        <div className="sm:mt-8 mt-6 flex slider-container overflow-hidden">
          {[...sliderData, ...sliderData].map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex !items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="pointer-events-none"
                style={{ maxWidth: logo.maxWidth }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cartoon;
