"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Zap, Award, Users, Lightbulb, Target } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const TeamPage = () => {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Notre Équipe" },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Lamine Traore",
      role: "Responsable",
      image: "/team/img1.jpg",
    },
    {
      id: 2,
      name: "Bah Kaou Sissoko",
      role: "Responsable",
      image: "/team/img2.jpg",
    },
    {
      id: 3,
      name: "Souleymane Abba Dicko",
      role: "Responsable",
      image: "/team/img3.jpg",
    },
    {
      id: 4,
      name: "Souleymane Boire",
      role: "Responsable",
      image: "/team/img4.jpg",
    },
  ];

  const values = [
    {
      id: "01",
      icon: <Target className="w-10 h-10 text-abricot" />,
      title: "Productivité",
      description:
        "Nous nous efforçons d'atteindre les plus hauts niveaux d'efficacité et de performance dans chaque projet, en utilisant des solutions technologiques innovantes pour répondre aux besoins de nos clients.",
    },
    {
      id: "02",
      icon: <Users className="w-10 h-10 text-abricot" />,
      title: "Transparence",
      description:
        "La transparence est au cœur de notre relation avec nos clients, partenaires et collaborateurs. Nous croyons en une communication honnête et ouverte à chaque étape de nos projets.",
    },
    {
      id: "03",
      icon: <Lightbulb className="w-10 h-10 text-abricot" />,
      title: "Personnalisation",
      description:
        "Nous adaptons nos services aux besoins uniques de chaque client, en fournissant des solutions sur mesure qui garantissent des résultats optimaux et un haut niveau de satisfaction.",
    },
    {
      id: "04",
      icon: <Award className="w-10 h-10 text-abricot" />,
      title: "Engagement",
      description:
        "Notre volonté de réussir et notre engagement envers l'excellence sont ce qui nous distingue. Nous travaillons sans relâche pour offrir des services de qualité tout en respectant nos valeurs fondamentales.",
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
                  Notre <span className="text-abricot">Équipe</span> de
                  Direction
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
                  Découvrez les experts passionnés qui dirigent LB2S Technology
                  et qui s&apos;engagent à transformer vos projets en succès.
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
                  alt="team_page"
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
        <div className="xl:max-w-[1420px] px-8 xl:w-full mx-auto py-4 sm:py-16 relative overflow-hidden">
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

          {/* Hero Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={1}
            className="text-center mb-20 relative z-10"
          >
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold leading-tight xl:max-w-[1420px] px-8 xl:w-full mx-auto w-full">
              Découvrez l&apos;équipe dynamique et passionnée de{" "}
              <span className="text-abricot">LB2S Technology Corp</span>, des
              experts engagés à transformer vos projets en succès grâce à leur
              savoir-faire et leur dévouement.
            </h2>
            <div className="w-24 h-1 bg-abricot mx-auto mt-8 rounded-full"></div>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 xl:max-w-[1420px] xl:w-full mx-auto py-4 sm:py-16 relative z-10"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={itemFade}
                className="flex flex-col items-center group team-member"
              >
                <div className="relative transition-all duration-500 overflow-hidden">
                  {/* Profile Image Container */}
                  <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 right-0 rounded-full bg-abricot opacity-0 group-hover:opacity-100 w-20 h-20 transition-all duration-500 flex items-center justify-center"
                  >
                    <Zap className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Name and Role */}
                <motion.h3
                  variants={fadeIn}
                  custom={index + 1}
                  className="mt-6 text-xl font-semibold text-[#121820] group-hover:text-abricot transition-colors duration-300"
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  variants={fadeIn}
                  custom={index + 1.5}
                  className="mt-2 text-gray-600 group-hover:text-abricot transition-all duration-500"
                >
                  {member.role}
                </motion.p>
              </motion.div>
            ))}
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

      <div className="w-full bg-gray-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>

        <section className="xl:max-w-[1420px] px-8 xl:w-full py-4 sm:py-16 mx-auto text-default-text relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={1}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Les valeurs qui <span className="text-abricot">Nous Guident</span>
            </h2>
            <div className="w-24 h-1 bg-abricot mx-auto mt-4 mb-6 rounded-full"></div>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600">
              Nos valeurs fondamentales définissent notre approche et notre
              engagement envers nos clients, partenaires et collaborateurs.
              Elles sont au cœur de chaque décision et action que nous
              entreprenons.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            {values.map((value) => (
              <motion.div
                key={value.id}
                variants={itemFade}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 bg-abricot/10 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-abricot rounded-full" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-abricot font-medium">
                      {value.id}.
                    </span>
                    <h3 className="text-xl font-semibold text-[#121820]">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#121820] mb-4">
                Rejoignez notre équipe
              </h3>
              <p className="text-gray-700 mb-6">
                Vous êtes passionné par la technologie et l&apos;innovation ?
                Découvrez nos opportunités de carrière et rejoignez une équipe
                dynamique et engagée.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-abricot text-white font-medium rounded-full shadow-lg hover:shadow-abricot/30 hover:bg-abricot/90 transition-all duration-300"
              >
                Voir nos offres d&apos;emploi
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
              </motion.a>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default TeamPage;
