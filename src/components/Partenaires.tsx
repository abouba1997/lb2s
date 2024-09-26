/* eslint-disable @next/next/no-img-element */
import React from "react";

import IMAGE from "@/assets/logo/lb2s_logo_sans_font.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Partenaires = () => {
  const data = [
    {
      image: IMAGE.src,
      title: "Partenaire 1",
    },
    {
      image: IMAGE.src,
      title: "Partenaire 2",
    },
    {
      image: IMAGE.src,
      title: "Partenaire 3",
    },
    {
      image: IMAGE.src,
      title: "Partenaire 4",
    },
    {
      image: IMAGE.src,
      title: "Partenaire 5",
    },
    {
      image: IMAGE.src,
      title: "Partenaire 6",
    },
    {
      image: IMAGE.src,
      title: "Partenaire 7",
    },
    {
      image: IMAGE.src,
      title: "Partenaire 8",
    },
    {
      image: IMAGE.src,
      title: "Partenaire 9",
    },
    {
      image: IMAGE.src,
      title: "Partenaire 10",
    },
  ];

  return (
    <div className="bg-white pt-24 pb-14">
      <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8">
        <Swiper
          slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          className="h-16 md:h-32 w-full swiper"
          loop={true}
          speed={4000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
        >
          {data.map((item) => (
            <SwiperSlide key={item.title} className="h-16 md:h-32">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partenaires;
