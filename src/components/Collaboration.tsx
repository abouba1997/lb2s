// import { Wrench, Flag, Rocket, Scale } from "lucide-react";

// const cardData = [
//   {
//     icon: Wrench,
//     title: "Penser Grand",
//     description:
//       "Chez LB2S, nous concevons des solutions sur mesure qui répondent aux besoins spécifiques de nos clients, tout en anticipant leur évolution future.",
//   },
//   {
//     icon: Flag,
//     title: "Commencer Petit",
//     description:
//       "Nous croyons en l’importance de démarrer avec des projets ciblés qui s'adaptent facilement à la croissance et aux défis futurs.",
//   },
//   {
//     icon: Rocket,
//     title: "Créer Rapidement",
//     description:
//       "Grâce à notre approche agile, nous délivrons rapidement des solutions efficaces pour sécuriser vos infrastructures et systèmes informatiques.",
//   },
//   {
//     icon: Scale,
//     title: "Innover à Grande Échelle",
//     description:
//       "Nous accompagnons la croissance de votre entreprise avec des solutions scalables et innovantes pour un avenir sécurisé et performant.",
//   },
// ];

// const Collaboration = () => {
//   return (
//     <section className="bg-gray-100 pt-32 pb-24 relative z-0">
//       {/* Background Image */}
//       <div className="absolute bg-lb2s bg-contain bg-no-repeat bg-center z-30 w-56 h-36 top-0 right-[20%]"></div>
//       <div className="absolute bg-lb2s rotate-180 bg-contain bg-no-repeat bg-center z-30 w-56 h-36 bottom-0 left-[20%]"></div>
//       <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8 z-10">
//         {/* Title */}
//         <h2 className="text-base flex items-center justify-start relative pl-5 font-medium custom-syne text-[#121820] mb-8 before:absolute before:content-[''] before:top-1/2 before:translate-y-[-50%] before:rounded-full before:left-0 before:w-2 before:h-2 before:bg-abricot">
//           Découvrez Notre Entreprise
//         </h2>
//         <h1 className="text-4xl capitalize font-bold text-[#121820] mb-20">
//           Comment peut-on <span className="text-abricot">Collaborer</span> Avec
//           Vous
//         </h1>

//         {/* Collaboration Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex-wrap">
//           {cardData.map((card, index) => (
//             <div key={index} className="flex flex-col mb-[60px]">
//               <div className="flex items-center justify-start space-x-4 mb-8">
//                 <card.icon className="text-abricot w-6 h-6" />
//                 <h3 className="text-xl font-bold text-[#121820]">
//                   {card.title}
//                 </h3>
//               </div>
//               <div>
//                 <p className="text-gray-500">{card.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Buttons */}
//         {/* <div className="flex flex-wrap">
//           <div className="w-1/2 flex justify-start items-center">
//             <Link
//               href="/projects"
//               className="custom-syne group text-[16px] leading-4 text-[#121820] font-semibold whitespace-nowrap inline-flex items-center decoration-0"
//             >
//               <span className="capitalize">En savoir plus</span>
//               <div className="flex items-center rounded-full bg-abricot m-4 p-1 group-hover:transform group-hover:translate-x-2 transition-all duration-500">
//                 <ArrowRight className="w-6 h-6" />
//               </div>
//             </Link>
//           </div>
//           <div className="w-1/2 flex justify-end">
//             <Link
//               href="/careers"
//               className="bg-transparent cursor-pointer px-[60px] border-[#E9806E] h-[70px] text-[16px] whitespace-nowrap inline-flex items-center justify-center text-center text-[#121820] font-bold rounded-full border-2 shadow-[inset_0_0_0_0_#E9806E] hover:shadow-[inset_0_0_0_1px_#E9806E] backdrop-blur-sm transition-[cubic-bezier(0,0,.3642,1)] duration-300"
//             >
//               Carrières
//             </Link>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Collaboration;

"use client";

import { Wrench, Flag, Rocket, Scale } from "lucide-react";
import { motion } from "framer-motion";

const cardData = [
  {
    icon: Wrench,
    title: "Penser Grand",
    description:
      "Chez LB2S, nous concevons des solutions sur mesure qui répondent aux besoins spécifiques de nos clients, tout en anticipant leur évolution future.",
  },
  {
    icon: Flag,
    title: "Commencer Petit",
    description:
      "Nous croyons en l'importance de démarrer avec des projets ciblés qui s'adaptent facilement à la croissance et aux défis futurs.",
  },
  {
    icon: Rocket,
    title: "Créer Rapidement",
    description:
      "Grâce à notre approche agile, nous délivrons rapidement des solutions efficaces pour sécuriser vos infrastructures et systèmes informatiques.",
  },
  {
    icon: Scale,
    title: "Innover à Grande Échelle",
    description:
      "Nous accompagnons la croissance de votre entreprise avec des solutions scalables et innovantes pour un avenir sécurisé et performant.",
  },
];

const Collaboration = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-pattern bg-gray-50 pt-32 pb-24 relative z-0 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-abricot/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-gray-200 to-transparent rounded-full blur-3xl"></div>

      {/* Logo watermarks */}
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 0.03, rotate: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute bg-lb2s bg-contain bg-no-repeat bg-center z-0 w-64 h-64 top-20 right-[20%]"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, rotate: 10 }}
        animate={{ opacity: 0.03, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bg-lb2s rotate-180 bg-contain bg-no-repeat bg-center z-0 w-64 h-64 bottom-20 left-[20%]"
      ></motion.div>

      <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8 z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-base flex items-center justify-start relative pl-5 font-medium custom-syne text-[#121820] mb-4 before:absolute before:content-[''] before:top-1/2 before:translate-y-[-50%] before:rounded-full before:left-0 before:w-2 before:h-2 before:bg-abricot">
            Découvrez Notre Entreprise
          </h2>
          <h1 className="text-3xl md:text-4xl capitalize font-bold text-[#121820] mb-6">
            Comment peut-on <span className="text-abricot">Collaborer</span>{" "}
            Avec Vous
          </h1>
          <p className="text-gray-600 max-w-2xl mb-16">
            Notre approche de collaboration est fondée sur quatre principes clés
            qui nous permettent de vous offrir des solutions adaptées,
            évolutives et performantes.
          </p>
        </motion.div>

        {/* Collaboration Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-abricot/10 flex items-center justify-center text-abricot">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#121820]">
                  {card.title}
                </h3>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-gray-600">{card.description}</p>
              </div>
              <div className="mt-auto pt-6">
                <div className="w-8 h-1 bg-abricot rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-abricot text-white font-medium rounded-full shadow-lg hover:shadow-abricot/30 hover:bg-abricot/90 transition-all duration-300 transform hover:-translate-y-1"
          >
            Démarrer une collaboration
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

export default Collaboration;
