// import { ArrowRight } from "lucide-react";
// import Link from "next/link";
// import React from "react";

// interface Skill {
//   name: string;
//   percentage: number;
// }

// const skills: Skill[] = [
//   { name: "Systèmes de Vidéosurveillance", percentage: 99 },
//   { name: "Contrôle d'Accès", percentage: 99 },
//   { name: "Consultation IT", percentage: 89 },
//   { name: "Développement Logiciel", percentage: 85 },
//   { name: "Développement Web", percentage: 90 },
//   { name: "Développement d'Applications", percentage: 95 },
//   { name: "Cybersécurité", percentage: 85 },
//   { name: "Déploiement de Réseaux", percentage: 80 },
//   { name: "Maintenance Informatique", percentage: 90 },
// ];

// const Skills = () => {
//   return (
//     <section className="bg-white pt-32 pb-24 relative z-0">
//       <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8 z-10">
//         <div className="flex flex-wrap mb-[90px]">
//           <div className="w-1/2">
//             <h2 className="text-base flex items-center justify-start relative pl-5 font-medium custom-syne text-[#121820] mb-8 before:absolute before:content-[''] before:top-1/2 before:translate-y-[-50%] before:rounded-full before:left-0 before:w-2 before:h-2 before:bg-abricot">
//               Notre Expertise
//             </h2>
//             <h2 className="text-[42px] text-[#121820] mb-8 custom-syne font-semibold leading-[140%]">
//               <span className="text-abricot">Réussite</span> en Affaires Grâce à
//               la Technologie
//             </h2>
//           </div>
//           <p className="text-gray-500 mb-10 w-1/2 flex items-end">
//             Nous offrons une large gamme de compétences techniques pour
//             accompagner la transformation numérique de votre entreprise.
//             Découvrez nos domaines d&apos;expertise ci-dessous
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {skills.map((skill, index) => (
//             <div key={index}>
//               <div className="flex justify-between items-center">
//                 <span className="font-semibold leading-[140%] text-[#121820] custom-syne mb-7">
//                   {skill.name}
//                 </span>
//                 <span className="text-gray-500 mb-7">{skill.percentage}%</span>
//               </div>
//               <div className="relative mb-[60px] w-full h-1 bg-gray-200 rounded-full">
//                 <div
//                   className="absolute top-0 left-0 h-1 rounded-full bg-abricot"
//                   style={{ width: `${skill.percentage}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//           <div className="flex items-center mb-5">
//             <Link
//               href="/about"
//               className="custom-syne group text-[16px] leading-4 text-[#121820] font-semibold whitespace-nowrap inline-flex items-center decoration-0"
//             >
//               <span className="capitalize">En savoir plus</span>
//               <div className="flex items-center rounded-full bg-abricot m-4 p-1 group-hover:transform group-hover:translate-x-2 transition-all duration-500">
//                 <ArrowRight className="w-6 h-6" />
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  percentage: number;
  category?: string;
}

const skills: Skill[] = [
  {
    name: "Systèmes de Vidéosurveillance",
    percentage: 99,
    category: "Sécurité",
  },
  { name: "Contrôle d'Accès", percentage: 99, category: "Sécurité" },
  { name: "Consultation IT", percentage: 89, category: "Services" },
  { name: "Développement Logiciel", percentage: 85, category: "Développement" },
  { name: "Développement Web", percentage: 90, category: "Développement" },
  {
    name: "Développement d'Applications",
    percentage: 95,
    category: "Développement",
  },
  { name: "Cybersécurité", percentage: 85, category: "Sécurité" },
  {
    name: "Déploiement de Réseaux",
    percentage: 80,
    category: "Infrastructure",
  },
  { name: "Maintenance Informatique", percentage: 90, category: "Services" },
];

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setWidth(skill.percentage);
      }, 100 + index * 100); // Stagger the animations
      return () => clearTimeout(timer);
    }
  }, [inView, skill.percentage, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
    >
      <div className="flex justify-between items-center mb-3">
        <div>
          <span className="text-xs text-abricot font-medium">
            {skill.category || "Expertise"}
          </span>
          <h3 className="font-semibold text-[#121820] custom-syne">
            {skill.name}
          </h3>
        </div>
        <div className="relative">
          <span className="text-3xl font-bold text-[#121820] group-hover:text-abricot transition-colors duration-300">
            {width}
            <span className="text-lg text-gray-400">%</span>
          </span>
        </div>
      </div>

      <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-abricot to-abricot/80 rounded-full"
          style={{ width: `${width}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-white pt-32 pb-24 relative z-0 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-gray-100 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-abricot/5 to-transparent rounded-full blur-3xl"></div>

      {/* Logo watermark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute bg-lb2s bg-contain bg-no-repeat bg-center z-0 w-96 h-96 top-1/4 left-1/3"
      ></motion.div>

      <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row flex-wrap mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-base flex items-center justify-start relative pl-5 font-medium custom-syne text-[#121820] mb-4 before:absolute before:content-[''] before:top-1/2 before:translate-y-[-50%] before:rounded-full before:left-0 before:w-2 before:h-2 before:bg-abricot">
              Notre Expertise
            </h2>
            <h2 className="text-[32px] md:text-[42px] text-[#121820] mb-4 custom-syne font-semibold leading-[140%]">
              <span className="text-abricot">Réussite</span> en Affaires Grâce à
              la Technologie
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <p className="text-gray-600 md:pl-8 mb-4">
              Nous offrons une large gamme de compétences techniques pour
              accompagner la transformation numérique de votre entreprise.
              Découvrez nos domaines d&apos;expertise ci-dessous.
            </p>
            <div className="md:pl-8">
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-abricot mr-2"></div>
                  <span className="text-sm text-gray-600">Expertise</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-gray-200 mr-2"></div>
                  <span className="text-sm text-gray-600">
                    En développement
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} index={index} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: skills.length * 0.1 }}
            className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md"
          >
            <Link
              href="/about"
              className="custom-syne group text-[16px] leading-4 text-[#121820] font-semibold whitespace-nowrap inline-flex items-center decoration-0"
            >
              <span className="capitalize">En savoir plus</span>
              <div className="flex items-center justify-center rounded-full bg-abricot text-white w-10 h-10 ml-4 group-hover:transform group-hover:translate-x-2 transition-all duration-500 shadow-md group-hover:shadow-lg">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <h3 className="text-4xl font-bold text-abricot mb-2">10+</h3>
            <p className="text-gray-600 text-sm">Années d&apos;expérience</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <h3 className="text-4xl font-bold text-abricot mb-2">200+</h3>
            <p className="text-gray-600 text-sm">Projets réalisés</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <h3 className="text-4xl font-bold text-abricot mb-2">50+</h3>
            <p className="text-gray-600 text-sm">Clients satisfaits</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <h3 className="text-4xl font-bold text-abricot mb-2">24/7</h3>
            <p className="text-gray-600 text-sm">Support technique</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
