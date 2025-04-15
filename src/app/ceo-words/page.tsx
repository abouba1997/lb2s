"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const CEOWords = () => {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Mot du Président" },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: custom * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <div className="w-full h-full bg-white/90">
      <div className="w-full relative min-[998px]:h-[550px] min-[998px]:pt-[220px] pb-[90px] pt-[190px] flex items-center">
        <div className="w-full !z-20">
          <Header />
          <div className="absolute bg-map-other bg-cover bg-no-repeat bg-center !z-[-1] w-full h-full inset-0">
            {/* Animated overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent"
            ></motion.div>
          </div>
          <div className="flex w-full min-h-full items-center justify-between relative bg-transparent">
            <div className="xl:max-w-[1420px] px-8 xl:w-full flex justify-between items-center mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-center items-start space-y-8"
              >
                <Breadcrumb items={breadcrumbItems} />
                <h1 className="text-2xl sm:text-[32px] lg:text-[42px] text-[#121820] leading-[140%] space-y-5 font-bold">
                  Mot du <span className="text-abricot">Président</span>
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-gray-600 max-w-md"
                >
                  Découvrez la vision et l&apos;engagement de notre président
                  pour faire de LB2S Technology un leader des solutions
                  technologiques en Afrique de l&apos;Ouest.
                </motion.p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 90 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative !z-30 sm:flex hidden"
              >
                <Image
                  src="/images/bg-lb2s-abricot.svg"
                  alt="ceo_words"
                  className="w-full h-full max-h-[140px] max-w-[220px] object-cover object-center flex !z-20"
                  width={220}
                  height={140}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-abricot/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-3xl"></div>

        {/* Logo watermark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute bg-lb2s bg-contain bg-no-repeat bg-center z-0 w-96 h-96 top-1/4 right-1/4"
        ></motion.div>

        <div className="xl:max-w-[1420px] px-8 xl:w-full mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <motion.div custom={1} variants={fadeIn} className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-abricot/10 rounded-full"></div>
                <h2 className="text-3xl font-bold text-[#121820] relative">
                  Mot du <span className="text-abricot">Président</span>
                </h2>
              </motion.div>

              <motion.div
                custom={2}
                variants={scaleIn}
                className="relative group overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <Image
                  src="/gifs/earth_2.gif"
                  alt="CEO Portrait"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-xs text-abricot">Président & Fondateur</p>
                </div>
              </motion.div>

              <motion.blockquote
                custom={3}
                variants={fadeIn}
                className="relative p-8 bg-gray-50 rounded-xl shadow-sm border-l-4 border-abricot"
              >
                <div className="absolute top-4 right-4 text-abricot/20">
                  <Quote size={48} />
                </div>
                <p className="italic text-lg text-gray-700 relative z-10">
                  « Chers partenaires, collaborateurs et clients, Je suis honoré
                  de vous accueillir chez LB2S Technology Corp. Depuis notre
                  fondation, notre ambition est de construire une entreprise de
                  référence en solutions technologiques et en installations
                  avancées. Nous croyons fermement en l&apos;innovation et en
                  l&apos;excellence, et notre mission est d&apos;offrir des
                  solutions durables et adaptées à vos besoins. Je remercie
                  chaleureusement nos clients et partenaires pour leur confiance
                  et leur soutien. Ensemble, construisons un avenir sûr et
                  innovant. »
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-12 h-1 bg-abricot rounded-full"></div>
                </div>
              </motion.blockquote>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8 md:mt-16"
            >
              <motion.div
                custom={4}
                variants={fadeIn}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-abricot"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-abricot/10 flex items-center justify-center text-abricot mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#121820]">
                    Notre Vision
                  </h3>
                </div>
                <p className="text-gray-700">
                  Chez LB2S Technology Corp, nous aspirons à être le leader
                  incontesté des solutions technologiques en Afrique de
                  l&apos;Ouest. Notre vision est de créer un environnement où la
                  technologie améliore la vie quotidienne, renforce la sécurité
                  et favorise le développement durable.
                </p>
              </motion.div>

              <motion.div
                custom={5}
                variants={fadeIn}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-abricot"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-abricot/10 flex items-center justify-center text-abricot mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#121820]">
                    Notre Engagement
                  </h3>
                </div>
                <p className="text-gray-700">
                  Nous nous engageons à fournir des solutions sur mesure qui
                  répondent aux défis uniques de chaque client. Notre équipe
                  d&apos;experts travaille sans relâche pour intégrer les
                  dernières innovations technologiques dans nos projets,
                  garantissant ainsi des installations à la pointe de la
                  modernité et de l&apos;efficacité.
                </p>
              </motion.div>

              <motion.div
                custom={6}
                variants={fadeIn}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-abricot"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-abricot/10 flex items-center justify-center text-abricot mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#121820]">
                    L&apos;Innovation au Cœur de Notre ADN
                  </h3>
                </div>
                <p className="text-gray-700">
                  L&apos;innovation est le moteur de notre croissance. Nous
                  investissons continuellement dans la recherche et le
                  développement pour rester à l&apos;avant-garde des avancées
                  technologiques. Cette approche nous permet d&apos;offrir des
                  solutions toujours plus performantes et adaptées aux besoins
                  évolutifs du marché africain.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Call to action section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#121820] mb-4">
                Rejoignez-nous dans cette aventure
              </h3>
              <p className="text-gray-700 mb-6">
                Découvrez comment LB2S Technology peut transformer votre
                entreprise grâce à des solutions technologiques innovantes et
                sur mesure.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-abricot text-white font-medium rounded-full shadow-lg hover:shadow-abricot/30 hover:bg-abricot/90 transition-all duration-300 transform hover:-translate-y-1"
              >
                Contactez-nous
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
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white"
      >
        <div className="relative flex xl:max-w-[1420px] px-8 bg-white xl:w-full mx-auto sm:px-6 lg:px-8">
          <div className="w-full h-1 bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot after:content-[''] after:w-[25px] after:border-l-[5px] after:border-l-[#FFFFFF] after:absolute after:h-full after:right-0 after:top-0 after:bg-abricot "></div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default CEOWords;
