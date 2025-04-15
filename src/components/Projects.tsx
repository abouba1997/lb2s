// /* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ArrowRight, SquareArrowLeft, SquareArrowRight } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/lib/constants";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const projects = caseStudies.slice(0, 4);
  const projectLength = projects.length;

  // Increment by 2 since we are showing two projects at once
  const nextProject = () => {
    if (!isTransitioning && currentIndex < projectLength - 1) {
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
    if (!isTransitioning && currentIndex > 0) {
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
    <div className="bg-white pt-32 pb-24 relative z-0 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-abricot/5 to-transparent rounded-full blur-3xl"></div>

      {/* Logo watermark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute bg-lb2s bg-contain bg-no-repeat bg-center z-0 w-96 h-96 top-1/4 right-1/3"
      ></motion.div>

      <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8 z-10">
        <div className="flex justify-between mb-[60px] items-center flex-wrap">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-left w-full md:w-1/2 mb-6 md:mb-0"
          >
            <h2 className="text-[32px] md:text-[42px] !mb-[15px] leading-[140%] font-semibold text-gray-900 custom-syne">
              Nos <span className="text-abricot">derniers Projets</span>
            </h2>
            <p className="text-gray-600 max-w-md">
              Découvrez nos réalisations récentes et comment nous avons aidé nos
              clients à atteindre leurs objectifs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-1/2"
          >
            <div className="flex justify-start md:justify-end space-x-4 custom-syne text-[#121820] font-semibold ">
              <button
                onClick={prevProject}
                disabled={currentIndex === 0}
                className="hover:text-abricot flex items-center px-4 mr-4 md:mr-8 transition-all duration-300 disabled:text-[#121820]/30 disabled:cursor-not-allowed group"
              >
                <div className="relative overflow-hidden rounded-md mr-2 group-hover:bg-abricot/10 transition-colors duration-300">
                  <SquareArrowLeft
                    className={`transition-transform duration-300 ${
                      currentIndex === 0
                        ? "opacity-30"
                        : "group-hover:-translate-x-1"
                    }`}
                  />
                </div>
                <span className={currentIndex === 0 ? "opacity-30" : ""}>
                  Precedent
                </span>
              </button>

              <button
                onClick={nextProject}
                disabled={currentIndex === projectLength - 1}
                className="hover:text-abricot flex items-center transition-all duration-300 disabled:text-[#121820]/30 disabled:cursor-not-allowed group"
              >
                <span
                  className={
                    currentIndex === projectLength - 1 ? "opacity-30" : ""
                  }
                >
                  Suivant
                </span>
                <div className="relative overflow-hidden rounded-md ml-2 group-hover:bg-abricot/10 transition-colors duration-300">
                  <SquareArrowRight
                    className={`transition-transform duration-300 ${
                      currentIndex === projectLength - 1
                        ? "opacity-30"
                        : "group-hover:translate-x-1"
                    }`}
                  />
                </div>
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden w-full md:mb-[60px] mb-[30px]"
        >
          <div
            className={`flex transition-transform duration-700 ease-out`}
            style={{
              transform: `translateX(-${
                (currentIndex / projectLength) * 100
              }%)`,
              width: `${projects.length * 100}%`,
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-full md:w-1/2 px-2"
                style={{ width: `${100 / projects.length}%` }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full">
                  <div className="relative overflow-hidden rounded-t-xl group cursor-pointer h-64">
                    <img
                      src={project.image[0] || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 filter group-hover:grayscale-0 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-abricot text-white text-sm rounded-full">
                        {project.category || "Projet"}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-abricot mb-2 text-sm font-medium">
                      Client: {project.client}
                    </p>
                    <h3 className="text-xl font-bold mb-3 text-[#121820] group-hover:text-abricot transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mt-6 flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {project?.date || "Récent"}
                      </span>
                      <Link
                        href={`/case-studies/${project.id}`}
                        className="text-abricot hover:underline text-sm font-medium flex items-center"
                      >
                        Voir détails
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center space-x-2 py-2">
            {projects.map((_, index) => (
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
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-0"
        >
          <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center">
            <Link
              href="/case-studies"
              className="custom-syne group text-[16px] leading-4 text-[#121820] font-semibold whitespace-nowrap inline-flex items-center decoration-0"
            >
              <span className="capitalize">Voir tous les projects</span>
              <div className="flex items-center justify-center rounded-full bg-abricot text-white w-10 h-10 ml-4 group-hover:transform group-hover:translate-x-2 transition-all duration-500 shadow-md group-hover:shadow-lg">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <Link
              href="/contact"
              className="bg-transparent cursor-pointer px-[40px] md:px-[60px] border-[#E9806E] h-[60px] md:h-[70px] text-[16px] whitespace-nowrap inline-flex items-center justify-center text-center text-[#121820] font-bold rounded-full border-2 shadow-[inset_0_0_0_0_#E9806E] hover:shadow-[inset_0_0_0_100px_#E9806E] hover:text-white backdrop-blur-sm transition-all duration-500"
            >
              Discutons
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
