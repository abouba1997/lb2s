// /* eslint-disable @next/next/no-img-element */
// import React from "react";

// import IMAGE from "@/assets/logo/lb2s_logo_sans_font.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

// const Partenaires = () => {
//   const data = [
//     {
//       image: IMAGE.src,
//       title: "Partenaire 1",
//     },
//     {
//       image: IMAGE.src,
//       title: "Partenaire 2",
//     },
//     {
//       image: IMAGE.src,
//       title: "Partenaire 3",
//     },
//     {
//       image: IMAGE.src,
//       title: "Partenaire 4",
//     },
//     {
//       image: IMAGE.src,
//       title: "Partenaire 5",
//     },
//     {
//       image: IMAGE.src,
//       title: "Partenaire 6",
//     },
//     {
//       image: IMAGE.src,
//       title: "Partenaire 7",
//     },
//     {
//       image: IMAGE.src,
//       title: "Partenaire 8",
//     },
//     {
//       image: IMAGE.src,
//       title: "Partenaire 9",
//     },
//     {
//       image: IMAGE.src,
//       title: "Partenaire 10",
//     },
//   ];

//   return (
//     <div className="bg-white pt-24 pb-14">
//       <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8">
//         <Swiper
//           slidesPerView={3}
//           breakpoints={{
//             640: {
//               slidesPerView: 4,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 5,
//               spaceBetween: 40,
//             },
//             1024: {
//               slidesPerView: 6,
//               spaceBetween: 50,
//             },
//           }}
//           className="h-16 md:h-32 w-full swiper"
//           loop={true}
//           speed={4000}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           modules={[Autoplay, Navigation]}
//         >
//           {data.map((item) => (
//             <SwiperSlide key={item.title} className="h-16 md:h-32">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Partenaires;

/* eslint-disable @next/next/no-img-element */
"use client";
import IMAGE from "@/assets/logo/lb2s_logo_sans_font.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

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
    <div className="bg-white py-24">
      <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] md:text-[42px] leading-[140%] font-semibold text-gray-900 custom-syne mb-4">
            Nos <span className="text-abricot">Partenaires</span> de Confiance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous collaborons avec les meilleures entreprises pour vous offrir
            des solutions technologiques de pointe et un service irréprochable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Gradient overlays for carousel edges */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 60,
              },
            }}
            className="h-24 md:h-32 w-full swiper py-4"
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            modules={[Autoplay, Navigation]}
          >
            {data.map((item) => (
              <SwiperSlide
                key={item.title}
                className="h-16 md:h-24 flex items-center justify-center"
              >
                <div className="group relative h-full w-full flex items-center justify-center p-4 transition-all duration-300 hover:scale-110">
                  <div className="absolute inset-0 bg-gray-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Partenaires;
