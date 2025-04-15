"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowRight, Award, Lightbulb, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutPage = () => {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Notre Présentation" },
  ];

  const expertiseAreas = [
    "Électricité et sécurité incendie",
    "Sécurité électronique",
    "Équipements électromécaniques",
    "Réseaux et télécommunications",
    "Énergies renouvelables",
    "Climatisation et plomberie",
    "Gestion technique de bâtiment (GTB)",
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-abricot" />,
      title: "Qualité",
      description:
        "Nous nous engageons à offrir des services de qualité supérieure, respectant les normes techniques et de sécurité les plus strictes.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-abricot" />,
      title: "Innovation",
      description:
        "Nous restons à la pointe des nouvelles technologies pour proposer des solutions innovantes et adaptées aux besoins actuels et futurs.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-abricot" />,
      title: "Durabilité",
      description:
        "Nous priorisons l'utilisation de solutions écologiques et d'énergies renouvelables afin de contribuer au développement durable.",
    },
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
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
                  Notre <span className="text-abricot">Présentation</span>
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
                  Découvrez qui nous sommes, notre expertise et notre vision
                  pour l&apos;avenir des solutions technologiques en Afrique de
                  l&apos;Ouest.
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
                  alt="about_page"
                  className="w-full h-full max-h-[140px] max-w-[220px] object-cover object-center flex !z-20"
                  width={220}
                  height={140}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full text-default-text">
        <section className="py-4 sm:py-16 xl:max-w-[1420px] px-8 xl:w-full  mx-auto relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-abricot/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-3xl"></div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={1}
            className="relative z-10"
          >
            <h2 className="text-3xl font-bold text-center mb-4">
              PRÉSENTATION DE{" "}
              <span className="text-abricot">LB2S TECHNOLOGY CORP</span>
            </h2>
            <div className="w-24 h-1 bg-abricot mx-auto mb-8 rounded-full"></div>
            <p className="text-lg max-w-4xl mx-auto text-center mb-16">
              Nous proposons une gamme complète de services techniques et de
              solutions sur mesure pour répondre aux besoins des entreprises,
              institutions et particuliers en Afrique de l&apos;Ouest et
              au-delà.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={2}
              className="relative z-10"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-abricot/10 rounded-full"></div>
                <h3 className="text-2xl font-semibold mb-6 relative">
                  Nos domaines d&apos;
                  <span className="text-abricot">expertise</span>
                </h3>
              </div>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-4"
              >
                {expertiseAreas.map((area, index) => (
                  <motion.li
                    key={index}
                    variants={itemFade}
                    className="flex items-start group"
                  >
                    <div className="p-2 bg-abricot/10 rounded-full mr-4 group-hover:bg-abricot/20 transition-colors duration-300">
                      <ArrowRight className="h-5 w-5 text-abricot" />
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {area}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={3}
              className="relative h-96 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <Image
                src="/gifs/presentation.gif"
                alt="Expertise Areas"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-4 sm:py-16 xl:max-w-[1420px] px-8 xl:w-full bg-gray-50 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={1}
            >
              <h2 className="text-3xl font-bold text-center mb-4">
                Nos <span className="text-abricot">valeurs</span>
              </h2>
              <div className="w-24 h-1 bg-abricot mx-auto mb-12 rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                  custom={index + 2}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-abricot"
                >
                  <div className="w-16 h-16 bg-abricot/10 rounded-full flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <span className="text-[#121820]">{value.title}</span>
                  </h3>
                  <p className="text-gray-700">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-4 sm:py-16 xl:max-w-[1420px] px-8 xl:w-full mx-auto relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-abricot/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-gray-100 to-transparent rounded-full blur-3xl"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={1}
              className="relative h-96 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/mission.png"
                alt="Our Vision"
                fill
                style={{ objectFit: "contain" }}
                className="rounded-xl p-4 bg-white"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={2}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-abricot/10 rounded-full"></div>
                <h2 className="text-3xl font-bold mb-6 relative">
                  Notre <span className="text-abricot">vision</span>
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Faire de LB2S Technology Corp un leader en solutions
                technologiques et en installations techniques en Afrique de
                l&apos;Ouest, tout en promouvant un développement durable à
                travers des projets innovants.
              </p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                custom={3}
                className="p-8 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#121820]">
                  Contact
                </h3>
                <p className="text-gray-700 mb-6">
                  Pour toute information ou demande de projet, LB2S Technology
                  Corp est disponible pour vous accompagner avec des solutions
                  adaptées à vos besoins.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-abricot text-white font-medium rounded-full shadow-lg hover:shadow-abricot/30 hover:bg-abricot/90 transition-all duration-300"
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
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 px-4 sm:px-6 lg:px-8 bg-[#121820] text-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                LB2S Technology en{" "}
                <span className="text-abricot">chiffres</span>
              </h2>
              <div className="w-24 h-1 bg-abricot mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-abricot mb-2">10+</div>
                <div className="text-gray-300">Années d&apos;expérience</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-abricot mb-2">200+</div>
                <div className="text-gray-300">Projets réalisés</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-abricot mb-2">50+</div>
                <div className="text-gray-300">Clients satisfaits</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-abricot mb-2">24/7</div>
                <div className="text-gray-300">Support technique</div>
              </div>
            </div>
          </div>
        </motion.section>
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

export default AboutPage;
