/* eslint-disable @next/next/no-img-element */
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

type BackgroundSwiperProps = {
  data: {
    image?: string;
    title?: string;
    subTitle?: string;
    interval?: number;
  }[];
};

const BackgroundSwiper = ({ data }: BackgroundSwiperProps) => {
  return (
    <Swiper
      slidesPerView={1}
      className="min-h-screen w-full swiper"
      loop={true}
      centeredSlides={true}
      effect={"fade"}
      speed={4000}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Parallax, EffectFade, Autoplay, Navigation]}
    >
      {data.map((item) => (
        <SwiperSlide key={item.title} className="h-screen peel-slide">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BackgroundSwiper;
