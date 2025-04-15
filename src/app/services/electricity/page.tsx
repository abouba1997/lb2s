"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Lightbulb,
  Battery,
  Wrench,
  ArrowRight,
  CheckCircle,
  Shield,
} from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ElectricityPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Électricité" },
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
                  <span className="text-abricot">Électricité</span> &
                  Installations
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
                  Des installations électriques fiables, sécurisées et efficaces
                  pour vos bâtiments résidentiels, commerciaux et industriels.
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
                  alt="electricity_page"
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
              Solutions <span className="text-abricot">Électriques</span>{" "}
              Complètes
            </h2>
            <div className="w-24 h-1 bg-abricot mx-auto mt-4 mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des installations électriques fiables, sécurisées et efficaces
              pour vos bâtiments résidentiels, commerciaux et industriels.
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
              <div className="relative w-full aspect-auto min-h-80 overflow-hidden">
                <Image
                  src="/services/systeme-electrique.webp"
                  alt="Installation électrique professionnelle"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                  Solutions électriques{" "}
                  <span className="text-abricot">complètes</span>
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Chez LB2S Technology Corp, nous concevons, installons et
                maintenons des systèmes électriques de haute qualité pour tous
                types de bâtiments. Notre expertise couvre l&apos;ensemble des
                besoins électriques, de l&apos;installation initiale à la
                maintenance préventive.
              </p>
              <p className="text-gray-600 mb-8">
                Nos équipes qualifiées respectent les normes les plus strictes
                pour garantir la sécurité et la fiabilité de vos installations
                électriques.
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
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative z-10"
          >
            <motion.div
              variants={itemFade}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-abricot transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="bg-abricot/10 p-3 rounded-full mr-4">
                  <Zap className="h-6 w-6 text-abricot" />
                </div>
                <h3 className="text-xl font-semibold text-[#121820]">
                  Installation Électrique Bâtiments & Industries
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Nous réalisons des installations électriques complètes pour tous
                types de bâtiments, des résidences aux complexes industriels, en
                respectant les normes de sécurité.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Câblage électrique complet
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Tableaux électriques et armoires de distribution
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Systèmes de mise à la terre et protection
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Installations électriques industrielles
                  </span>
                </li>
              </ul>
              <div className="rounded-lg relative w-full overflow-hidden">
                <Image
                  src="/services/installation-batiment.jpg"
                  alt="Schéma de distribution électrique"
                  width={400}
                  height={200}
                  className="w-full  object-contain rounded-md transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div
              variants={itemFade}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-abricot transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="bg-abricot/10 p-3 rounded-full mr-4">
                  <Lightbulb className="h-6 w-6 text-abricot" />
                </div>
                <h3 className="text-xl font-semibold text-[#121820]">
                  Éclairage et Automatisation
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Nous proposons des solutions d&apos;éclairage modernes et
                économes en énergie, ainsi que des systèmes
                d&apos;automatisation pour optimiser le confort et
                l&apos;efficacité énergétique.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Éclairage LED intérieur et extérieur
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Capteurs de mouvement et de luminosité
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Systèmes de gestion d&apos;éclairage
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Domotique et automatisation du bâtiment
                  </span>
                </li>
              </ul>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/services/eclairage.jpg"
                  alt="Bureau avec éclairage intelligent"
                  width={400}
                  height={200}
                  className="w-full rounded-md transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div
              variants={itemFade}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-abricot transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="bg-abricot/10 p-3 rounded-full mr-4">
                  <Battery className="h-6 w-6 text-abricot" />
                </div>
                <h3 className="text-xl font-semibold text-[#121820]">
                  Onduleurs et Groupes Électrogènes
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Nous installons des solutions de secours électrique pour assurer
                la continuité de vos activités en cas de coupure de courant.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Onduleurs (UPS) pour équipements sensibles
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Groupes électrogènes de secours
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Systèmes de commutation automatique
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Maintenance et tests périodiques
                  </span>
                </li>
              </ul>
              <div className="rounded-lg w-full h-64 overflow-hidden">
                <Image
                  src="/services/generator-inverter.jpg"
                  alt="Onduleur connecté à un serveur"
                  width={400}
                  height={200}
                  className="w-full h-full rounded-md transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div
              variants={itemFade}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-abricot transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="bg-abricot/10 p-3 rounded-full mr-4">
                  <Wrench className="h-6 w-6 text-abricot" />
                </div>
                <h3 className="text-xl font-semibold text-[#121820]">
                  Audit et Sécurité Électrique
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Nous réalisons des audits complets de vos installations
                électriques pour identifier les risques potentiels et garantir
                la conformité aux normes en vigueur.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Diagnostic des installations existantes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Vérification de la conformité aux normes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Mesures et tests électriques
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Recommandations d&apos;amélioration
                  </span>
                </li>
              </ul>
              <div className="rounded-lg w-full h-64 overflow-hidden">
                <Image
                  src="/services/audit-installation-electrique.webp"
                  alt="Technicien testant une installation"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover rounded-md transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={4}
            className="bg-gray-50 rounded-xl p-8 mb-16 relative z-10 shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-[#121820]">
              Nos <span className="text-abricot">engagements</span> pour vos
              installations électriques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-abricot/10 rounded-full flex items-center justify-center mr-4">
                    <Shield className="h-5 w-5 text-abricot" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#121820]">
                    Sécurité
                  </h3>
                </div>
                <p className="text-gray-600">
                  Nous accordons une importance primordiale à la sécurité de vos
                  installations électriques, en respectant scrupuleusement les
                  normes et réglementations en vigueur.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-abricot/10 rounded-full flex items-center justify-center mr-4">
                    <Lightbulb className="h-5 w-5 text-abricot" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#121820]">
                    Efficacité énergétique
                  </h3>
                </div>
                <p className="text-gray-600">
                  Nos solutions sont conçues pour optimiser votre consommation
                  d&apos;énergie, réduire vos coûts et minimiser votre impact
                  environnemental.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-abricot/10 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-5 w-5 text-abricot" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#121820]">
                    Fiabilité
                  </h3>
                </div>
                <p className="text-gray-600">
                  Nous utilisons des équipements et des matériaux de haute
                  qualité pour garantir la durabilité et la fiabilité de vos
                  installations électriques.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={5}
            className="text-center mb-16 relative z-10"
          >
            <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#121820]">
                Besoin d&apos;une installation{" "}
                <span className="text-abricot">électrique fiable</span> ?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins
                en matière d&apos;électricité et obtenir un devis personnalisé.
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
