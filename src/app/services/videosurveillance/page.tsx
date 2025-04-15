"use client";

import Image from "next/image";
import Link from "next/link";
import { Camera, Shield, Eye, Server, ArrowRight, Video } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function VideosurveillancePage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Vidéosurveillance" },
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
                  <span className="text-abricot">Vidéosurveillance</span> (CCTV)
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
                  Des solutions de vidéosurveillance avancées pour sécuriser vos
                  locaux et protéger vos biens et vos collaborateurs.
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
                  alt="videosurveillance_page"
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
        <section className="xl:max-w-[1420px] px-8 xl:w-full py-4 sm:py-16 mx-auto relative overflow-hidden">
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={1}
            className="text-center mb-16 relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#121820] mb-4">
              Surveillance Vidéo de <span className="text-abricot">Pointe</span>
            </h2>
            <div className="w-24 h-1 bg-abricot mx-auto mt-4 mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions de vidéosurveillance avancées pour sécuriser vos
              locaux et protéger vos biens et vos collaborateurs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={2}
              className="rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden w-full h-full">
                <Image
                  src="/services/videosurveillance.jpg"
                  alt="Système de vidéosurveillance"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={3}
              className="flex flex-col justify-center"
            >
              <div className="relative mb-4">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-abricot/10 rounded-full"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#121820] relative">
                  Surveillance vidéo de{" "}
                  <span className="text-abricot">pointe</span>
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Chez LB2S Technology Corp, nous concevons et installons des
                systèmes de vidéosurveillance sur mesure qui répondent aux
                besoins spécifiques de votre entreprise ou de votre domicile.
              </p>
              <p className="text-gray-600 mb-8">
                Nos solutions de vidéosurveillance utilisent les technologies
                les plus récentes pour vous offrir une sécurité optimale et une
                tranquillité d&apos;esprit totale.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center px-6 py-3 bg-abricot text-white font-medium rounded-full shadow-md hover:shadow-abricot/30 hover:bg-abricot/90 transition-all duration-300"
                >
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={4}
            className="bg-white rounded-lg p-8 shadow-lg mb-16 border border-gray-100 relative z-10"
          >
            <h2 className="text-2xl font-bold mb-8 text-center text-[#121820]">
              Nos <span className="text-abricot">solutions</span> de
              vidéosurveillance
            </h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
            >
              <motion.div variants={itemFade} className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="bg-abricot/10 p-3 rounded-full mr-4">
                    <Camera className="h-6 w-6 text-abricot" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#121820]">
                    Caméras IP haute définition
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Nos caméras IP offrent une qualité d&apos;image
                  exceptionnelle, même dans des conditions de faible luminosité,
                  pour une surveillance efficace 24h/24 et 7j/7.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-abricot mr-2">•</span>
                    <span className="text-gray-700">
                      Résolution 4K Ultra HD
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abricot mr-2">•</span>
                    <span className="text-gray-700">
                      Vision nocturne infrarouge
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abricot mr-2">•</span>
                    <span className="text-gray-700">
                      Caméras intérieures et extérieures
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abricot mr-2">•</span>
                    <span className="text-gray-700">
                      Caméras PTZ (Pan-Tilt-Zoom)
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={itemFade} className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="bg-abricot/10 p-3 rounded-full mr-4">
                    <Server className="h-6 w-6 text-abricot" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#121820]">
                    Enregistreurs vidéo numériques
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Nos enregistreurs NVR (Network Video Recorder) permettent de
                  stocker et de gérer efficacement vos enregistrements vidéo
                  pour une consultation facile.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-abricot mr-2">•</span>
                    <span className="text-gray-700">
                      Stockage sécurisé des données
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abricot mr-2">•</span>
                    <span className="text-gray-700">
                      Capacité d&apos;enregistrement évolutive
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abricot mr-2">•</span>
                    <span className="text-gray-700">
                      Compression H.265 pour optimiser l&apos;espace
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abricot mr-2">•</span>
                    <span className="text-gray-700">
                      Recherche intelligente d&apos;événements
                    </span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div variants={itemFade} className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="bg-abricot/10 p-3 rounded-full mr-4">
                    <Eye className="h-6 w-6 text-abricot" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#121820]">
                    Surveillance à distance
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Accédez à vos caméras de surveillance en temps réel depuis
                  n&apos;importe où dans le monde grâce à nos solutions de
                  surveillance à distance sécurisées.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-abricot mr-2">•</span>
                    <span className="text-gray-700">
                      Applications mobiles dédiées
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abricot mr-2">•</span>
                    <span className="text-gray-700">
                      Interface web sécurisée
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abricot mr-2">•</span>
                    <span className="text-gray-700">
                      Notifications d&apos;alertes en temps réel
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abricot mr-2">•</span>
                    <span className="text-gray-700">
                      Contrôle à distance des caméras PTZ
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={itemFade} className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="bg-abricot/10 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-abricot" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#121820]">
                    Analyse vidéo intelligente
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Nos systèmes intègrent des fonctionnalités d&apos;analyse
                  vidéo avancées pour détecter automatiquement les comportements
                  suspects et améliorer votre sécurité.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-abricot mr-2">•</span>
                    <span className="text-gray-700">
                      Détection de mouvement intelligente
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abricot mr-2">•</span>
                    <span className="text-gray-700">
                      Reconnaissance faciale
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abricot mr-2">•</span>
                    <span className="text-gray-700">
                      Détection de franchissement de ligne
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abricot mr-2">•</span>
                    <span className="text-gray-700">Comptage de personnes</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={5}
            className="mb-16 relative z-10"
          >
            <h2 className="text-2xl font-bold mb-8 text-center text-[#121820]">
              Applications de nos <span className="text-abricot">systèmes</span>{" "}
              de vidéosurveillance
            </h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div
                variants={itemFade}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-abricot transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#121820] flex items-center">
                  <div className="bg-abricot/10 p-2 rounded-full mr-3">
                    <Video className="h-5 w-5 text-abricot" />
                  </div>
                  Entreprises et commerces
                </h3>
                <p className="text-gray-600 mb-6">
                  Protégez vos locaux, vos employés et vos marchandises contre
                  le vol et le vandalisme. Surveillez les zones sensibles et
                  contrôlez les accès à vos bâtiments.
                </p>
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/services/videosurveillance-entreprise.jpg"
                    alt="Vidéosurveillance pour entreprises"
                    width={300}
                    height={150}
                    className="w-full h-auto rounded-md transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>
              <motion.div
                variants={itemFade}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-abricot transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#121820] flex items-center">
                  <div className="bg-abricot/10 p-2 rounded-full mr-3">
                    <Video className="h-5 w-5 text-abricot" />
                  </div>
                  Sites industriels
                </h3>
                <p className="text-gray-600 mb-6">
                  Sécurisez vos installations industrielles et surveillez les
                  processus de production. Assurez la sécurité du personnel et
                  prévenez les accidents.
                </p>
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/services/videosurveillance-sites-insdustrielsjpg.jpg"
                    alt="Vidéosurveillance pour sites industriels"
                    width={300}
                    height={150}
                    className="w-full h-auto rounded-md transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>
              <motion.div
                variants={itemFade}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-abricot transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#121820] flex items-center">
                  <div className="bg-abricot/10 p-2 rounded-full mr-3">
                    <Video className="h-5 w-5 text-abricot" />
                  </div>
                  Résidences et copropriétés
                </h3>
                <p className="text-gray-600 mb-6">
                  Protégez votre domicile et votre famille avec des systèmes de
                  vidéosurveillance discrets et efficaces. Surveillez les
                  entrées et les zones extérieures.
                </p>
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/services/videosurveillance-maison.jpg"
                    alt="Vidéosurveillance pour résidences"
                    width={300}
                    height={150}
                    className="w-full h-auto rounded-md transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={6}
            className="bg-gray-50 rounded-xl p-8 mb-16 relative z-10 shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-8 text-center text-[#121820]">
              Notre <span className="text-abricot">approche</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-abricot/10 p-3 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <span className="font-bold text-2xl text-abricot">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-[#121820]">
                  Étude des besoins
                </h3>
                <p className="text-gray-600 text-center">
                  Analyse de votre site et de vos exigences spécifiques pour une
                  solution adaptée.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-abricot/10 p-3 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <span className="font-bold text-2xl text-abricot">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-[#121820]">
                  Conception
                </h3>
                <p className="text-gray-600 text-center">
                  Élaboration d&apos;une solution sur mesure adaptée à vos
                  besoins et contraintes.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-abricot/10 p-3 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <span className="font-bold text-2xl text-abricot">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-[#121820]">
                  Installation
                </h3>
                <p className="text-gray-600 text-center">
                  Mise en place professionnelle de votre système de
                  vidéosurveillance par nos experts.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-abricot/10 p-3 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <span className="font-bold text-2xl text-abricot">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-[#121820]">
                  Maintenance
                </h3>
                <p className="text-gray-600 text-center">
                  Suivi et entretien régulier pour garantir la performance et la
                  durabilité de votre système.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={7}
            className="text-center mb-16 relative z-10"
          >
            <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#121820]">
                Besoin d&apos;un{" "}
                <span className="text-abricot">
                  système de vidéosurveillance
                </span>{" "}
                fiable ?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins
                en matière de vidéosurveillance et obtenir un devis
                personnalisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center px-8 py-4 bg-abricot text-white font-medium rounded-full shadow-lg hover:shadow-abricot/30 hover:bg-abricot/90 transition-all duration-300"
                  >
                    Demander un devis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-abricot text-abricot font-medium rounded-full shadow-md hover:bg-abricot/10 transition-all duration-300"
                  >
                    Nous contacter
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
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
}
