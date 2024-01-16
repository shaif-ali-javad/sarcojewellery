import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";

// import style
import "./slider.css";

import "swiper/css";

import slider0 from "../../img/slider0.jpg";
import slider1 from "../../img/slider1.jpeg";
import slider2 from "../../img/slider2.jpeg";

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
            <img src={slider0} style={{ width: "100%" }} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider1} style={{ width: "100%" }} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} style={{ width: "100%" }} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
