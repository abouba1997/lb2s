// import { Plus } from "lucide-react";
// import React from "react";

// const Hero = () => {
//   return (
//     <main className="relative z-10">
//       <div className="absolute inset-0 bg-black opacity-80" />
//       <section className="relative h-screen flex flex-row items-center xl:max-w-[1420px] px-8 xl:w-full mx-auto">
//         <div className="z-10 text-white min-[1200px]:w-8/12 w-full">
//           <h2 className="text-lg sm:mb-[60px] mb-[30px]">
//             <span className="text-[#E9806E] leading-[140%]">
//               LB2S Technology Corp
//             </span>{" "}
//             – High-tech & Solutions de Sécurité Innovantes
//           </h2>
//           <h1 className="text-3xl sm:text-[42px] lg:text-[60px] leading-[140%] space-y-5 font-bold mb-[30px] sm:mb-[60px]">
//             <span className="flex">OFFRES DE SERVICES</span>
//             <span className="flex md:space-x-4 flex-col md:flex-row lg:flex-col xl:flex-row">
//               <span className="flex">ET SOLUTIONS </span>
//               <span className="text-[#E9806E] text-2xl sm:text-[40px] lg:text-[36px] flex items-center md:justify-center lg:justify-start xl:justify-center cursive-text">
//                 Aux Entreprises
//               </span>
//             </span>
//           </h1>
//           <div className="flex flex-col md:flex-row md:items-center items-start md:space-x-4 space-x-0">
//             <div className="">
//               <a
//                 href="/contact"
//                 className="bg-transparent cursor-pointer px-[60px] border-[#E9806E] h-[70px] text-[16px] whitespace-nowrap inline-flex items-center justify-center text-center text-white font-bold rounded-full border-2 shadow-[inset_0_0_0_0_#E9806E] hover:shadow-[inset_0_0_0_1px_#E9806E] backdrop-blur-sm transition-[cubic-bezier(0,0,.3642,1)] duration-300"
//               >
//                 Discutons
//               </a>
//             </div>
//             <p className="w-full md:w-[450px] text-sm text-justify md:text-left md:pl-[60px] pl-0 text-[hsl(0,0%,100%,.5)] font-bold mt-[40px] sm:mt-[60px] md:mt-0">
//               Protégez votre entreprise avec des solutions technologiques de
//               pointe, conçues pour garantir votre sécurité et optimiser vos
//               performances.
//             </p>
//           </div>
//         </div>
//         <div className="z-10 min-[1200px]:w-4/12 min-[1200px]:flex justify-between items-stretch flex-col hidden relative h-[280px]">
//           {/* Provided */}
//           <div className="relative ml-[10%] flex items-center space-x-2 pointer-events-[all]">
//             <div className="relative group pointer-events-[all]">
//               {/* Tooltip content */}
//               <div className="absolute pointer-events-[all] opacity-0 group-hover:opacity-100 pointer-events-none transform translate-y-[10px] scale-[.98] bottom-[75px] left-[-60px] shadow-md bg-white w-[250px] transition-all duration-400 ease-in-out rounded-md">
//                 <div className="relative p-8">
//                   <h5 className="mb-2 text-[#121820] text-lg font-bold leading-[140%]">
//                     Notre Équipe
//                   </h5>
//                   <div className="w-6 h-0.5 bg-[#f57c00] mb-2"></div>
//                   <p className="text-gray-600 text-[13px]">
//                     Une équipe de professionnels de haut niveau avec une
//                     expérience dans le domaine.
//                   </p>
//                 </div>
//                 {/* Tooltip arrow */}
//                 <div className="absolute pointer-events-[all] bottom-[-10px] left-[calc(50%-10px)] w-5 h-5 bg-white transform rotate-45"></div>
//               </div>

//               {/* Trigger element */}
//               <div className="flex items-center cursor-pointer transition-[cubic-bezier(0, 0, 0.3642, 1)] duration-500 text-white hover:text-orange-500 group">
//                 <div className="group-hover:bg-orange-500 duration-500 group-hover:animate-custom-pulse font-extralight w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
//                   <Plus className="w-6 h-6 text-white" />
//                 </div>
//                 <span className="ml-2 opacity-80 text-base font-bold custom-syne">
//                   Une Équipe Dédiée
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Updated Developers Section */}
//           <div className="relative ml-auto flex items-center space-x-2 pointer-events-[all]">
//             <div className="relative group pointer-events-[all]">
//               {/* Tooltip content */}
//               <div className="absolute pointer-events-[all] opacity-0 group-hover:opacity-100 pointer-events-none transform translate-y-[10px] scale-[.98] bottom-[75px] left-[-60px] shadow-md bg-white w-[250px] transition-all duration-400 ease-in-out rounded-md">
//                 <div className="relative p-8">
//                   <h5 className="mb-2 text-[#121820] text-lg font-bold leading-[140%]">
//                     Solutions Technologiques
//                   </h5>
//                   <div className="w-6 h-0.5 bg-[#f57c00] mb-2"></div>
//                   <p className="text-gray-600 text-[13px]">
//                     Protégez votre entreprise avec des solutions comme les
//                     logiciels personnalisés, conçues pour améliorer vos
//                     performances et votre sécurité.
//                   </p>
//                 </div>
//                 {/* Tooltip arrow */}
//                 <div className="absolute pointer-events-[all] bottom-[-10px] left-[calc(50%-10px)] w-5 h-5 bg-white transform rotate-45"></div>
//               </div>

//               {/* Trigger element */}
//               <div className="flex items-center cursor-pointer transition-[cubic-bezier(0, 0, 0.3642, 1)] duration-500 text-white hover:text-orange-500 group">
//                 <div className="group-hover:bg-orange-500 duration-500 group-hover:animate-custom-pulse font-extralight w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
//                   <Plus className="w-6 h-6 text-white" />
//                 </div>
//                 <span className="ml-2 opacity-80 text-base font-bold custom-syne">
//                   Développement Logiciel
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Updated Designers Section */}
//           <div className="relative ml-[30%] flex items-center space-x-2 pointer-events-[all]">
//             <div className="relative group pointer-events-[all]">
//               {/* Tooltip content */}
//               <div className="absolute pointer-events-[all] opacity-0 group-hover:opacity-100 pointer-events-none transform translate-y-[10px] scale-[.98] bottom-[75px] left-[-60px] shadow-md bg-white w-[250px] transition-all duration-400 ease-in-out rounded-md">
//                 <div className="relative p-8">
//                   <h5 className="mb-2 text-[#121820] text-lg font-bold leading-[140%]">
//                     Sécurité Avancée
//                   </h5>
//                   <div className="w-6 h-0.5 bg-[#f57c00] mb-2"></div>
//                   <p className="text-gray-600 text-[13px]">
//                     Garantissez la sécurité de vos locaux avec nos caméras de
//                     surveillance et systèmes de contrôle d&apos;accès de pointe.
//                   </p>
//                 </div>
//                 {/* Tooltip arrow */}
//                 <div className="absolute pointer-events-[all] bottom-[-10px] left-[calc(50%-10px)] w-5 h-5 bg-white transform rotate-45"></div>
//               </div>

//               {/* Trigger element */}
//               <div className="flex items-center cursor-pointer transition-[cubic-bezier(0, 0, 0.3642, 1)] duration-500 text-white hover:text-orange-500 group">
//                 <div className="group-hover:bg-orange-500 duration-500 group-hover:animate-custom-pulse font-extralight w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
//                   <Plus className="w-6 h-6 text-white" />
//                 </div>
//                 <span className="ml-2 opacity-80 text-base font-bold custom-syne">
//                   Contrôle & Surveillance
//                 </span>
//               </div>
//             </div>
//           </div>
//           {/* Provided */}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Hero;

"use client";

import { Plus } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: custom * 0.1,
    },
  }),
};

const Hero = () => {
  return (
    <main className="relative z-10">
      <div className="absolute inset-0 bg-black opacity-80" />
      <section className="relative h-screen flex flex-row items-center xl:max-w-[1420px] px-8 xl:w-full mx-auto">
        <div className="z-10 text-white min-[1200px]:w-8/12 w-full">
          <motion.h2
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg sm:mb-[60px] mb-[30px]"
          >
            <span className="text-[#E9806E] leading-[140%]">
              LB2S Technology Corp
            </span>{" "}
            – High-tech & Solutions de Sécurité Innovantes
          </motion.h2>

          <div className="space-y-5 mb-[30px] sm:mb-[60px]">
            <motion.h1
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-3xl sm:text-[42px] lg:text-[60px] leading-[140%] font-bold"
            >
              <span className="flex">OFFRES DE SERVICES</span>
            </motion.h1>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex md:space-x-4 flex-col md:flex-row lg:flex-col xl:flex-row"
            >
              <span className="text-3xl sm:text-[42px] lg:text-[60px] leading-[140%] font-bold flex">
                ET SOLUTIONS{" "}
              </span>
              <span className="text-[#E9806E] text-2xl sm:text-[40px] lg:text-[36px] flex items-center md:justify-center lg:justify-start xl:justify-center cursive-text">
                Aux Entreprises
              </span>
            </motion.div>
          </div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-center items-start md:space-x-4 space-x-0"
          >
            <div className="">
              <motion.a
                whileHover={{
                  boxShadow: "inset 0 0 0 2em #E9806E",
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="bg-transparent cursor-pointer px-[60px] border-[#E9806E] h-[70px] text-[16px] whitespace-nowrap inline-flex items-center justify-center text-center text-white font-bold rounded-full border-2 shadow-[inset_0_0_0_0_#E9806E] backdrop-blur-sm transition-all duration-300"
              >
                Discutons
              </motion.a>
            </div>
            <motion.p
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="w-full md:w-[450px] text-sm text-justify md:text-left md:pl-[60px] pl-0 text-[hsl(0,0%,100%,.5)] font-bold mt-[40px] sm:mt-[60px] md:mt-0"
            >
              Protégez votre entreprise avec des solutions technologiques de
              pointe, conçues pour garantir votre sécurité et optimiser vos
              performances.
            </motion.p>
          </motion.div>
        </div>

        <div className="z-10 min-[1200px]:w-4/12 min-[1200px]:flex justify-between items-stretch flex-col hidden relative h-[280px]">
          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative ml-[10%] flex items-center space-x-2 pointer-events-[all]"
          >
            <div className="relative group pointer-events-[all]">
              <div className="absolute pointer-events-[all] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 pointer-events-none transform translate-y-[10px] scale-[.98] bottom-[75px] left-[-60px] shadow-md bg-white w-[250px] transition-all duration-400 ease-in-out rounded-md">
                <div className="relative p-8">
                  <h5 className="mb-2 text-[#121820] text-lg font-bold leading-[140%]">
                    Notre Équipe
                  </h5>
                  <div className="w-6 h-0.5 bg-[#f57c00] mb-2"></div>
                  <p className="text-gray-600 text-[13px]">
                    Une équipe de professionnels de haut niveau avec une
                    expérience dans le domaine.
                  </p>
                </div>
                <div className="absolute pointer-events-[all] bottom-[-10px] left-[calc(50%-10px)] w-5 h-5 bg-white transform rotate-45"></div>
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center cursor-pointer transition-all duration-500 text-white hover:text-orange-500 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="group-hover:bg-orange-500 duration-500 group-hover:animate-custom-pulse font-extralight w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg"
                >
                  <Plus className="w-6 h-6 text-white" />
                </motion.div>
                <span className="ml-2 opacity-80 text-base font-bold custom-syne">
                  Une Équipe Dédiée
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            custom={7}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative ml-auto flex items-center space-x-2 pointer-events-[all]"
          >
            <div className="relative group pointer-events-[all]">
              <div className="absolute pointer-events-[all] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 pointer-events-none transform translate-y-[10px] scale-[.98] bottom-[75px] left-[-60px] shadow-md bg-white w-[250px] transition-all duration-400 ease-in-out rounded-md">
                <div className="relative p-8">
                  <h5 className="mb-2 text-[#121820] text-lg font-bold leading-[140%]">
                    Solutions Technologiques
                  </h5>
                  <div className="w-6 h-0.5 bg-[#f57c00] mb-2"></div>
                  <p className="text-gray-600 text-[13px]">
                    Protégez votre entreprise avec des solutions comme les
                    logiciels personnalisés, conçues pour améliorer vos
                    performances et votre sécurité.
                  </p>
                </div>
                <div className="absolute pointer-events-[all] bottom-[-10px] left-[calc(50%-10px)] w-5 h-5 bg-white transform rotate-45"></div>
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center cursor-pointer transition-all duration-500 text-white hover:text-orange-500 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="group-hover:bg-orange-500 duration-500 group-hover:animate-custom-pulse font-extralight w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg"
                >
                  <Plus className="w-6 h-6 text-white" />
                </motion.div>
                <span className="ml-2 opacity-80 text-base font-bold custom-syne">
                  Développement Logiciel
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            custom={8}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative ml-[30%] flex items-center space-x-2 pointer-events-[all]"
          >
            <div className="relative group pointer-events-[all]">
              <div className="absolute pointer-events-[all] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 pointer-events-none transform translate-y-[10px] scale-[.98] bottom-[75px] left-[-60px] shadow-md bg-white w-[250px] transition-all duration-400 ease-in-out rounded-md">
                <div className="relative p-8">
                  <h5 className="mb-2 text-[#121820] text-lg font-bold leading-[140%]">
                    Sécurité Avancée
                  </h5>
                  <div className="w-6 h-0.5 bg-[#f57c00] mb-2"></div>
                  <p className="text-gray-600 text-[13px]">
                    Garantissez la sécurité de vos locaux avec nos caméras de
                    surveillance et systèmes de contrôle d&apos;accès de pointe.
                  </p>
                </div>
                <div className="absolute pointer-events-[all] bottom-[-10px] left-[calc(50%-10px)] w-5 h-5 bg-white transform rotate-45"></div>
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center cursor-pointer transition-all duration-500 text-white hover:text-orange-500 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="group-hover:bg-orange-500 duration-500 group-hover:animate-custom-pulse font-extralight w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg"
                >
                  <Plus className="w-6 h-6 text-white" />
                </motion.div>
                <span className="ml-2 opacity-80 text-base font-bold custom-syne">
                  Contrôle & Surveillance
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
