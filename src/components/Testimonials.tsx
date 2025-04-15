// "use client";

// /* eslint-disable @next/next/no-img-element */
// import { SquareArrowLeft, SquareArrowRight, Star } from "lucide-react";
// import ReviewIcon from "@/assets/images/iconreview.svg";
// import Image1 from "@/assets/images/lb2s_1.jpg";
// import { useState } from "react";

// const testimonialsData = [
//   {
//     name: "Chaka Traore",
//     role: "Directeur General BNDA",
//     review: 5,
//     img: Image1.src,
//     message:
//       "Nous avons beaucoup de clients qui ont besoin de des solutions efficaces et performantes. LB2S a fait une magnifique contribution a nos clients. ",
//   },
//   {
//     name: "Ousmane Traore",
//     role: "DAF BMS",
//     review: 4,
//     img: Image1.src,
//     message:
//       "Nous avons beaucoup de clients qui ont besoin de des solutions efficaces et performantes. LB2S a fait une magnifique contribution a nos clients. ",
//   },
//   {
//     name: "Allasane Kouma",
//     role: "CEO HITECH",
//     review: 5,
//     img: Image1.src,
//     message:
//       "Nous avons beaucoup de clients qui ont besoin de des solutions efficaces et performantes. LB2S a fait une magnifique contribution a nos clients. ",
//   },
//   {
//     name: "Moussa Konate",
//     role: "DGA MSN",
//     review: 5,
//     img: Image1.src,
//     message:
//       "Nous avons beaucoup de clients qui ont besoin de des solutions efficaces et performantes. LB2S a fait une magnifique contribution a nos clients. ",
//   },
// ];

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const projectLength = testimonialsData.length;

//   const nextTestimonial = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) =>
//           prevIndex + 1 >= projectLength ? 0 : prevIndex + 1
//         );
//         setIsTransitioning(false);
//       }, 500);
//     }
//   };

//   const prevTestimonial = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) =>
//           prevIndex - 1 < 0 ? projectLength - 1 : prevIndex - 1
//         );
//         setIsTransitioning(false);
//       }, 500);
//     }
//   };

//   return (
//     <section className="bg-white pt-32 pb-7 relative z-0">
//       {/* Background Image */}
//       <div className="absolute bg-lb2s bg-contain bg-no-repeat bg-center z-30 w-56 h-36 top-0 right-[20%]"></div>
//       <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8 z-10">
//         {/* Title */}
//         <div className="flex flex-wrap mb-[90px] items-end">
//           <div className="w-1/2">
//             <h2 className="text-base flex items-center justify-start relative pl-5 font-medium custom-syne text-[#121820] mb-8 before:absolute before:content-[''] before:top-1/2 before:translate-y-[-50%] before:rounded-full before:left-0 before:w-2 before:h-2 before:bg-abricot">
//               Témoignages
//             </h2>
//             <h1 className="text-4xl capitalize font-bold text-[#121820]">
//               Ce Que Disent Nos <span className="text-abricot">Clients</span>
//             </h1>
//           </div>
//           <div className="w-1/2 mb-2">
//             <div className="text-right">
//               <div className="flex justify-end space-x-4 custom-syne text-[#121820] font-semibold">
//                 <button
//                   onClick={prevTestimonial}
//                   disabled={currentIndex === 0}
//                   className="hover:text-abricot flex items-center mr-8 transition-all duration-500 disabled:text-[#121820]/50 disabled:cursor-not-allowed"
//                 >
//                   <SquareArrowLeft className="mr-2" /> Precedent
//                 </button>
//                 <button
//                   onClick={nextTestimonial}
//                   disabled={currentIndex === projectLength - 2}
//                   className="hover:text-abricot flex items-center transition-all duration-500 disabled:text-[#121820]/50 disabled:cursor-not-allowed"
//                 >
//                   Suivant <SquareArrowRight className="ml-2" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Testimonials Cards */}
//         <div className="relative overflow-hidden w-full mb-[60px]">
//           <div
//             className="flex transition-transform duration-500 ease-in-out gap-4"
//             style={{
//               transform: `translateX(-${
//                 (currentIndex / projectLength) * 100
//               }%)`,
//               width: `${(testimonialsData.length / 3) * 100}%`,
//             }}
//           >
//             {testimonialsData.map((test, index) => (
//               <div key={index} className="flex flex-col mb-[30px]">
//                 {/* Review */}
//                 <div className="flex items-center justify-start mb-7 ml-2">
//                   <img
//                     src={ReviewIcon.src}
//                     alt="Review stars"
//                     className="w-6 h-6 object-contain"
//                   />
//                   {Array.from({ length: test.review }, (_, i) => (
//                     <Star key={i} className="w-5 h-5 text-abricot ml-1" />
//                   ))}
//                 </div>
//                 <div className="text-gray-400 font-thin mb-7 text-sm">
//                   {test.message}
//                 </div>
//                 <div className="flex items-center justify-start space-x-4 mb-8">
//                   <img
//                     src={test.img}
//                     alt={test.name}
//                     className="w-12 h-12 rounded-full"
//                   />
//                   <div>
//                     <h3 className="text-lg font-medium text-[#121820]">
//                       {test.name}
//                     </h3>
//                     <p className="text-gray-500">{test.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

"use client";

/* eslint-disable @next/next/no-img-element */
import { SquareArrowLeft, SquareArrowRight, Star, Quote } from "lucide-react";
import Image1 from "@/assets/images/lb2s_1.jpg";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "Chaka Traore",
    role: "Directeur General BNDA",
    review: 5,
    img: Image1.src,
    message:
      "Nous avons beaucoup de clients qui ont besoin de des solutions efficaces et performantes. LB2S a fait une magnifique contribution a nos clients.",
  },
  {
    name: "Ousmane Traore",
    role: "DAF BMS",
    review: 4,
    img: Image1.src,
    message:
      "Nous avons beaucoup de clients qui ont besoin de des solutions efficaces et performantes. LB2S a fait une magnifique contribution a nos clients.",
  },
  {
    name: "Allasane Kouma",
    role: "CEO HITECH",
    review: 5,
    img: Image1.src,
    message:
      "Nous avons beaucoup de clients qui ont besoin de des solutions efficaces et performantes. LB2S a fait une magnifique contribution a nos clients.",
  },
  {
    name: "Moussa Konate",
    role: "DGA MSN",
    review: 5,
    img: Image1.src,
    message:
      "Nous avons beaucoup de clients qui ont besoin de des solutions efficaces et performantes. LB2S a fait une magnifique contribution a nos clients.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const testimonialLength = testimonialsData.length;
  const visibleTestimonials = 3;

  const nextTestimonial = useCallback(() => {
    if (
      !isTransitioning &&
      currentIndex < testimonialLength - visibleTestimonials
    ) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex + 1 >= testimonialLength - visibleTestimonials + 1
            ? 0
            : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500);
    } else if (!isTransitioning) {
      // Loop back to the beginning
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(0);
        setIsTransitioning(false);
      }, 500);
    }
  }, [currentIndex, isTransitioning, testimonialLength, visibleTestimonials]);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextTestimonial();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, isTransitioning, currentIndex, nextTestimonial]);

  const prevTestimonial = () => {
    if (!isTransitioning && currentIndex > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex - 1 < 0
            ? testimonialLength - visibleTestimonials
            : prevIndex - 1
        );
        setIsTransitioning(false);
      }, 500);
    } else if (!isTransitioning) {
      // Loop to the end
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(testimonialLength - visibleTestimonials);
        setIsTransitioning(false);
      }, 500);
    }
  };

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <section className="bg-white pt-32 pb-24 relative z-0 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-abricot/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-3xl"></div>

      {/* Logo watermark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute bg-lb2s bg-contain bg-no-repeat bg-center z-0 w-96 h-96 top-1/4 right-1/4"
      ></motion.div>

      <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8 z-10">
        {/* Title */}
        <div className="flex flex-col md:flex-row flex-wrap mb-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-base flex items-center justify-start relative pl-5 font-medium custom-syne text-[#121820] mb-4 before:absolute before:content-[''] before:top-1/2 before:translate-y-[-50%] before:rounded-full before:left-0 before:w-2 before:h-2 before:bg-abricot">
              Témoignages
            </h2>
            <h1 className="text-3xl md:text-4xl capitalize font-bold text-[#121820]">
              Ce Que Disent Nos <span className="text-abricot">Clients</span>
            </h1>
            <p className="text-gray-600 mt-4 max-w-md">
              Découvrez les expériences de nos clients et comment nos solutions
              ont transformé leurs entreprises.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-1/2"
          >
            <div className="flex justify-start md:justify-end space-x-4 custom-syne text-[#121820] font-semibold">
              <button
                onClick={prevTestimonial}
                className="hover:text-abricot flex items-center mr-4 md:mr-8 transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <div className="relative overflow-hidden rounded-md mr-2 group-hover:bg-abricot/10 transition-colors duration-300">
                  <SquareArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                </div>
                <span className="hidden sm:inline">Precedent</span>
              </button>

              <button
                onClick={nextTestimonial}
                className="hover:text-abricot flex items-center transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <span className="hidden sm:inline">Suivant</span>
                <div className="relative overflow-hidden rounded-md ml-2 group-hover:bg-abricot/10 transition-colors duration-300">
                  <SquareArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden w-full mb-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`flex transition-transform duration-700 ease-out gap-6`}
            style={{
              transform: `translateX(-${
                (currentIndex / testimonialLength) * 100
              }%)`,
              width: `${(testimonialLength / 1) * 100}%`, // Adjust for mobile view
            }}
          >
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 px-2"
                style={{ width: `${100 / testimonialLength}%` }}
              >
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-500 h-full flex flex-col relative group">
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 text-gray-100 opacity-50 group-hover:text-abricot/20 group-hover:scale-110 transition-all duration-500">
                    <Quote size={48} />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4 relative z-10">
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.review
                              ? "text-abricot"
                              : "text-gray-300"
                          }`}
                          fill={i < testimonial.review ? "#e9806e" : "none"}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">
                      {testimonial.review}.0
                    </span>
                  </div>

                  {/* Testimonial message */}
                  <div className="text-gray-600 mb-6 flex-grow relative z-10">
                    <p className="italic">&quot;{testimonial.message}&quot;</p>
                  </div>

                  {/* Author info */}
                  <div className="flex items-center space-x-4 mt-auto relative z-10">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-abricot/20 shadow-md">
                      <img
                        src={
                          testimonial.img ||
                          "/placeholder.svg?height=100&width=100"
                        }
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#121820] group-hover:text-abricot transition-colors duration-300">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({
              length: testimonialLength - visibleTestimonials + 1,
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsTransitioning(false);
                    }, 500);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-abricot w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-8"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-abricot text-white font-medium rounded-full shadow-lg hover:shadow-abricot/30 hover:bg-abricot/90 transition-all duration-300 transform hover:-translate-y-1"
          >
            Partagez votre expérience
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
