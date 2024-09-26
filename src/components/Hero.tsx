import { Plus } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <main className="relative z-10">
      <div className="absolute inset-0 bg-black opacity-80" />
      <section className="relative h-screen flex flex-row items-center xl:max-w-[1420px] px-8 xl:w-full mx-auto">
        <div className="z-10 text-white min-[1200px]:w-8/12 w-full">
          <h2 className="text-lg sm:mb-[60px] mb-[30px]">
            <span className="text-[#E9806E] leading-[140%]">
              LB2S Technology Corp
            </span>{" "}
            – High-tech & Solutions de Sécurité Innovantes
          </h2>
          <h1 className="text-3xl sm:text-[42px] lg:text-[60px] leading-[140%] space-y-5 font-bold mb-[30px] sm:mb-[60px]">
            <span className="flex">OFFRES DE SERVICES</span>
            <span className="flex md:space-x-4 flex-col md:flex-row lg:flex-col xl:flex-row">
              <span className="flex">ET SOLUTIONS </span>
              <span className="text-[#E9806E] text-2xl sm:text-[40px] lg:text-[36px] flex items-center md:justify-center lg:justify-start xl:justify-center cursive-text">
                Aux Entreprises
              </span>
            </span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center items-start md:space-x-4 space-x-0">
            <div className="">
              <a
                href="/contact"
                className="bg-transparent cursor-pointer px-[60px] border-[#E9806E] h-[70px] text-[16px] whitespace-nowrap inline-flex items-center justify-center text-center text-white font-bold rounded-full border-2 shadow-[inset_0_0_0_0_#E9806E] hover:shadow-[inset_0_0_0_1px_#E9806E] backdrop-blur-sm transition-[cubic-bezier(0,0,.3642,1)] duration-300"
              >
                Discutons
              </a>
            </div>
            <p className="w-full md:w-[450px] text-sm text-justify md:text-left md:pl-[60px] pl-0 text-[hsl(0,0%,100%,.5)] font-bold mt-[40px] sm:mt-[60px] md:mt-0">
              Protégez votre entreprise avec des solutions technologiques de
              pointe, conçues pour garantir votre sécurité et optimiser vos
              performances.
            </p>
          </div>
        </div>
        <div className="z-10 min-[1200px]:w-4/12 min-[1200px]:flex justify-between items-stretch flex-col hidden relative h-[280px]">
          {/* Provided */}
          <div className="relative ml-[10%] flex items-center space-x-2 pointer-events-[all]">
            <div className="relative group pointer-events-[all]">
              {/* Tooltip content */}
              <div className="absolute pointer-events-[all] opacity-0 group-hover:opacity-100 pointer-events-none transform translate-y-[10px] scale-[.98] bottom-[75px] left-[-60px] shadow-md bg-white w-[250px] transition-all duration-400 ease-in-out rounded-md">
                <div className="relative p-8">
                  <h5 className="mb-2 text-[#121820] text-lg font-bold leading-[140%]">
                    Experts
                  </h5>
                  <div className="w-6 h-0.5 bg-[#f57c00] mb-2"></div>
                  <p className="text-gray-600 text-[13px]">
                    And here some amazing content. It is very engaging. Right?
                  </p>
                </div>
                {/* Tooltip arrow */}
                <div className="absolute pointer-events-[all] bottom-[-10px] left-[calc(50%-10px)] w-5 h-5 bg-white transform rotate-45"></div>
              </div>

              {/* Trigger element */}
              <div className="flex items-center cursor-pointer transition-[cubic-bezier(0, 0, 0.3642, 1)] duration-500 text-white hover:text-orange-500 group">
                <div className="group-hover:bg-orange-500 duration-500 group-hover:animate-custom-pulse font-extralight w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <span className="ml-2 opacity-80 text-base font-bold custom-syne">
                  Dedicated Team
                </span>
              </div>
            </div>
          </div>
          <div className="relative ml-auto flex items-center space-x-2 pointer-events-[all]">
            <div className="relative group pointer-events-[all]">
              {/* Tooltip content */}
              <div className="absolute pointer-events-[all] opacity-0 group-hover:opacity-100 pointer-events-none transform translate-y-[10px] scale-[.98] bottom-[75px] left-[-60px] shadow-md bg-white w-[250px] transition-all duration-400 ease-in-out rounded-md">
                <div className="relative p-8">
                  <h5 className="mb-2 text-[#121820] text-lg font-bold leading-[140%]">
                    Experts
                  </h5>
                  <div className="w-6 h-0.5 bg-[#f57c00] mb-2"></div>
                  <p className="text-gray-600 text-[13px]">
                    And here some amazing content. It is very engaging. Right?
                  </p>
                </div>
                {/* Tooltip arrow */}
                <div className="absolute pointer-events-[all] bottom-[-10px] left-[calc(50%-10px)] w-5 h-5 bg-white transform rotate-45"></div>
              </div>

              {/* Trigger element */}
              <div className="flex items-center cursor-pointer transition-[cubic-bezier(0, 0, 0.3642, 1)] duration-500 text-white hover:text-orange-500 group">
                <div className="group-hover:bg-orange-500 duration-500 group-hover:animate-custom-pulse font-extralight w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <span className="ml-2 opacity-80 text-base font-bold custom-syne">
                  Developpers
                </span>
              </div>
            </div>
          </div>
          <div className="relative ml-[30%] flex items-center space-x-2 pointer-events-[all]">
            <div className="relative group pointer-events-[all]">
              {/* Tooltip content */}
              <div className="absolute pointer-events-[all] opacity-0 group-hover:opacity-100 pointer-events-none transform translate-y-[10px] scale-[.98] bottom-[75px] left-[-60px] shadow-md bg-white w-[250px] transition-all duration-400 ease-in-out rounded-md">
                <div className="relative p-8">
                  <h5 className="mb-2 text-[#121820] text-lg font-bold leading-[140%]">
                    Experts
                  </h5>
                  <div className="w-6 h-0.5 bg-[#f57c00] mb-2"></div>
                  <p className="text-gray-600 text-[13px]">
                    And here some amazing content. It is very engaging. Right?
                  </p>
                </div>
                {/* Tooltip arrow */}
                <div className="absolute pointer-events-[all] bottom-[-10px] left-[calc(50%-10px)] w-5 h-5 bg-white transform rotate-45"></div>
              </div>

              {/* Trigger element */}
              <div className="flex items-center cursor-pointer transition-[cubic-bezier(0, 0, 0.3642, 1)] duration-500 text-white hover:text-orange-500 group">
                <div className="group-hover:bg-orange-500 duration-500 group-hover:animate-custom-pulse font-extralight w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <span className="ml-2 opacity-80 text-base font-bold custom-syne">
                  Designers
                </span>
              </div>
            </div>
          </div>
          {/* Provided */}
        </div>
      </section>
    </main>
  );
};

export default Hero;
