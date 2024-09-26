"use client";

/* eslint-disable @next/next/no-img-element */
import { SquareArrowLeft, SquareArrowRight, Star } from "lucide-react";
import ReviewIcon from "@/assets/images/iconreview.svg";
import Image1 from "@/assets/images/lb2s_1.jpg";
import { useState } from "react";

const testimonialsData = [
  {
    name: "Chaka Traore",
    role: "Directeur General BNDA",
    review: 5,
    img: Image1.src,
    message:
      "Nous avons beaucoup de clients qui ont besoin de des solutions efficaces et performantes. LB2S a fait une magnifique contribution a nos clients. ",
  },
  {
    name: "Ousmane Traore",
    role: "DAF BMS",
    review: 4,
    img: Image1.src,
    message:
      "Nous avons beaucoup de clients qui ont besoin de des solutions efficaces et performantes. LB2S a fait une magnifique contribution a nos clients. ",
  },
  {
    name: "Allasane Kouma",
    role: "CEO HITECH",
    review: 5,
    img: Image1.src,
    message:
      "Nous avons beaucoup de clients qui ont besoin de des solutions efficaces et performantes. LB2S a fait une magnifique contribution a nos clients. ",
  },
  {
    name: "Moussa Konate",
    role: "DGA MSN",
    review: 5,
    img: Image1.src,
    message:
      "Nous avons beaucoup de clients qui ont besoin de des solutions efficaces et performantes. LB2S a fait une magnifique contribution a nos clients. ",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const projectLength = testimonialsData.length;

  const nextTestimonial = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex + 1 >= projectLength ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500);
    }
  };

  const prevTestimonial = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex - 1 < 0 ? projectLength - 1 : prevIndex - 1
        );
        setIsTransitioning(false);
      }, 500);
    }
  };

  return (
    <section className="bg-white pt-32 pb-7 relative z-0">
      {/* Background Image */}
      <div className="absolute bg-lb2s bg-contain bg-no-repeat bg-center z-30 w-56 h-36 top-0 right-[20%]"></div>
      <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8 z-10">
        {/* Title */}
        <div className="flex flex-wrap mb-[90px] items-end">
          <div className="w-1/2">
            <h2 className="text-base flex items-center justify-start relative pl-5 font-medium custom-syne text-[#121820] mb-8 before:absolute before:content-[''] before:top-1/2 before:translate-y-[-50%] before:rounded-full before:left-0 before:w-2 before:h-2 before:bg-abricot">
              Témoignages
            </h2>
            <h1 className="text-4xl capitalize font-bold text-[#121820]">
              Ce Que Disent Nos <span className="text-abricot">Clients</span>
            </h1>
          </div>
          <div className="w-1/2 mb-2">
            <div className="text-right">
              <div className="flex justify-end space-x-4 custom-syne text-[#121820] font-semibold">
                <button
                  onClick={prevTestimonial}
                  disabled={currentIndex === 0}
                  className="hover:text-abricot flex items-center mr-8 transition-all duration-500 disabled:text-[#121820]/50 disabled:cursor-not-allowed"
                >
                  <SquareArrowLeft className="mr-2" /> Precedent
                </button>
                <button
                  onClick={nextTestimonial}
                  disabled={currentIndex === projectLength - 2}
                  className="hover:text-abricot flex items-center transition-all duration-500 disabled:text-[#121820]/50 disabled:cursor-not-allowed"
                >
                  Suivant <SquareArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="relative overflow-hidden w-full mb-[60px]">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{
              transform: `translateX(-${
                (currentIndex / projectLength) * 100
              }%)`,
              width: `${(testimonialsData.length / 3) * 100}%`,
            }}
          >
            {testimonialsData.map((test, index) => (
              <div key={index} className="flex flex-col mb-[30px]">
                {/* Review */}
                <div className="flex items-center justify-start mb-7 ml-2">
                  <img
                    src={ReviewIcon.src}
                    alt="Review stars"
                    className="w-6 h-6 object-contain"
                  />
                  {Array.from({ length: test.review }, (_, i) => (
                    <Star key={i} className="w-5 h-5 text-abricot ml-1" />
                  ))}
                </div>
                <div className="text-gray-400 font-thin mb-7 text-sm">
                  {test.message}
                </div>
                <div className="flex items-center justify-start space-x-4 mb-8">
                  <img
                    src={test.img}
                    alt={test.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-[#121820]">
                      {test.name}
                    </h3>
                    <p className="text-gray-500">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
