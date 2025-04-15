// /* eslint-disable @next/next/no-img-element */
// import React from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, EffectFade, Parallax } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

// type BackgroundSwiperProps = {
//   data: {
//     image?: string;
//     title?: string;
//     subTitle?: string;
//     interval?: number;
//   }[];
// };

// const BackgroundSwiper = ({ data }: BackgroundSwiperProps) => {
//   return (
//     <Swiper
//       slidesPerView={1}
//       className="min-h-screen w-full swiper"
//       loop={true}
//       centeredSlides={true}
//       effect={"fade"}
//       speed={4000}
//       autoplay={{
//         delay: 3000,
//         disableOnInteraction: false,
//       }}
//       modules={[Parallax, EffectFade, Autoplay, Navigation]}
//     >
//       {data.map((item) => (
//         <SwiperSlide key={item.title} className="h-screen peel-slide">
//           <img
//             src={item.image}
//             alt={item.title}
//             className="w-full h-screen object-cover"
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default BackgroundSwiper;

/* eslint-disable @next/next/no-img-element */

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade, Parallax } from "swiper/modules";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative w-full h-full"
    >
      <Swiper
        slidesPerView={1}
        className="min-h-screen w-full swiper"
        loop={true}
        centeredSlides={true}
        effect={"fade"}
        speed={2000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Parallax, EffectFade, Autoplay, Navigation]}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={item.title || index}
            className="h-screen peel-slide"
          >
            <div className="relative w-full h-full">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title || "Slide image"}
                className="w-full h-screen object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default BackgroundSwiper;
