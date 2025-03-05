/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { ArrowRight, SquareArrowLeft, SquareArrowRight } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/lib/constants";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const projects = caseStudies.slice(0, 4);
  const projectLength = projects.length;

  // Increment by 2 since we are showing two projects at once
  const nextProject = () => {
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

  const prevProject = () => {
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
    <div className="bg-white pt-32 pb-24 relative z-0">
      <div className="absolute bg-lb2s bg-contain bg-no-repeat bg-center z-30 w-56 h-36 top-0 right-[40%]"></div>
      <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8 z-0">
        <div className="flex justify-between mb-[60px] items-center flex-wrap z-10">
          <div className="text-left w-1/2">
            <h2 className="text-[42px] !mb-[30px] leading-[140%] font-semibold text-gray-900 custom-syne">
              Nos <span className="text-abricot">derniers Projets</span>
            </h2>
          </div>
          <div className="w-1/2">
            <div className="text-right">
              <div className="flex justify-end space-x-4 custom-syne text-[#121820] font-semibold">
                <button
                  onClick={prevProject}
                  disabled={currentIndex === 0}
                  className="hover:text-abricot flex items-center mr-8 transition-all duration-500 disabled:text-[#121820]/50 disabled:cursor-not-allowed"
                >
                  <SquareArrowLeft className="mr-2" /> Precedent
                </button>
                <button
                  onClick={nextProject}
                  disabled={currentIndex === projectLength - 1}
                  className="hover:text-abricot flex items-center transition-all duration-500 disabled:text-[#121820]/50 disabled:cursor-not-allowed"
                >
                  Suivant <SquareArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden w-full mb-[60px]">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{
              transform: `translateX(-${
                (currentIndex / projectLength) * 100
              }%)`,
              width: `${(projects.length / 2) * 100}%`,
            }}
          >
            {projects.map((project) => (
              <div key={project.id} className="w-1/2" style={{ width: "50%" }}>
                <div className="flex flex-row items-start justify-center relative rounded-lg group overflow-hidden cursor-pointer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 filter grayscale group-hover:grayscale-0 object-cover rounded-lg group-hover:scale-125 transition-all duration-500"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold mb-2 text-[#121820]">
                    {project.title}
                  </h3>
                  <p className="text-abricot mb-2">by: {project.client}</p>
                  <p className="text-gray-500">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/2 flex justify-start items-center">
            <Link
              href="/case-studies"
              className="custom-syne group text-[16px] leading-4 text-[#121820] font-semibold whitespace-nowrap inline-flex items-center decoration-0"
            >
              <span className="capitalize">Voir tous les projects</span>
              <div className="flex items-center rounded-full bg-abricot m-4 p-1 group-hover:transform group-hover:translate-x-2 transition-all duration-500">
                <ArrowRight className="w-6 h-6" />
              </div>
            </Link>
          </div>
          <div className="w-1/2 flex justify-end">
            <Link
              href="/contact"
              className="bg-transparent cursor-pointer px-[60px] border-[#E9806E] h-[70px] text-[16px] whitespace-nowrap inline-flex items-center justify-center text-center text-[#121820] font-bold rounded-full border-2 shadow-[inset_0_0_0_0_#E9806E] hover:shadow-[inset_0_0_0_1px_#E9806E] backdrop-blur-sm transition-[cubic-bezier(0,0,.3642,1)] duration-300"
            >
              Discutons
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
