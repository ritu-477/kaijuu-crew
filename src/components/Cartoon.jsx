import React from "react";
import Slider from "react-slick";
import { CONTINUE_SLIDER_DATA } from "../utils/Helper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cartoon = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 2000, 
    autoplay: true,
    autoplaySpeed: 0, 
    cssEase: "linear", 
    slidesToShow: 9,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div className="overflow-hidden w-full mx-auto h-[160px] md:h-[200px] xl:h-[295px] mt-4 md:mt-8">
      <Slider {...settings} className="slider_collaboration">
        {CONTINUE_SLIDER_DATA.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="pointer-events-none h-[160px] md:h-[200px] xl:h-[295px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cartoon;
