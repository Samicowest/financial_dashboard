import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Card1 from "img/card1.png";
// import Card2 from "img/card2.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

export default function SwiperSlides() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        style={{
          "--swiper-navigation-top-offset": "85%",
          "--swiper-navigation-size": "15px",
          // "--swiper-navigation-sides-offset": "80px",
          "--swiper-navigation-color": "black",
          "--swiper-pagination-color": "black",
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{ width: "100%" }}>
            <img src="img/card1.png" alt="Logo" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: "100%" }}>
            <img src="img/card2.png" alt="Logo" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
