import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";

// import style
import "./slider.css";

import "swiper/css";

// import slider0 from "../../img/slider0.jpg";
// import slider1 from "../../img/slider1.jpeg";
// import slider2 from "../../img/slider2.jpeg";

const Slider = () => {
  return (
    <>
      <div style={{ width: "100%", color: "black" }} className="slider-contain">
        <Swiper
          navigation={true}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="img--0"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img--1"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img--2"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
