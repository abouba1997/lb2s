"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Droplets,
  FileText,
  PenToolIcon as Tool,
  GraduationCap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function SecurityPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Sécurité Incendie" },
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
                  Sécurité <span className="text-abricot">Incendie</span>
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
                  Protégez vos biens et vos collaborateurs avec nos solutions
                  complètes de sécurité incendie, conformes aux normes
                  internationales.
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
                  alt="security_page"
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
              Sécurité <span className="text-abricot">Incendie</span>
            </h2>
            <div className="w-24 h-1 bg-abricot mx-auto mt-4 mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Protégez vos biens et vos collaborateurs avec nos solutions
              complètes de sécurité incendie, conformes aux normes
              internationales et adaptées à vos besoins spécifiques.
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
              <div className="relative overflow-hidden">
                <Image
                  src="/services/security-incendie.jpg"
                  alt="Système de sécurité incendie"
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
                  Protection complète contre les{" "}
                  <span className="text-abricot">incendies</span>
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Chez LB2S Technology Corp, nous proposons des solutions de
                sécurité incendie de pointe pour protéger vos installations
                contre les risques d&apos;incendie. Notre approche globale
                comprend la détection, l&apos;alerte, l&apos;extinction, la
                formation et la maintenance.
              </p>
              <p className="text-gray-600 mb-8">
                Nos experts vous accompagnent dans toutes les étapes de votre
                projet, de l&apos;étude initiale à la maintenance régulière, en
                passant par l&apos;installation et la mise en service.
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative z-10"
          >
            <motion.div
              variants={itemFade}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-abricot transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="bg-abricot/10 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-abricot" />
                </div>
                <h3 className="text-xl font-semibold text-[#121820]">
                  Détection et Alerte Incendie
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Nos systèmes de détection précoce et d&apos;alerte permettent
                d&apos;identifier rapidement tout départ de feu et
                d&apos;alerter les occupants pour une évacuation rapide et
                sécurisée.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Détecteurs de fumée et chaleur
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Alarmes sonores et visuelles
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Centrales de détection incendie
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemFade}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-abricot transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="bg-abricot/10 p-3 rounded-full mr-4">
                  <Droplets className="h-6 w-6 text-abricot" />
                </div>
                <h3 className="text-xl font-semibold text-[#121820]">
                  Extinction Automatique
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Nos systèmes d&apos;extinction automatique interviennent
                rapidement pour contenir et éteindre les incendies, limitant
                ainsi les dégâts et protégeant les personnes.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">Systèmes de sprinklers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Extinction par gaz inerte
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Extincteurs portatifs et RIA
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemFade}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-abricot transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="bg-abricot/10 p-3 rounded-full mr-4">
                  <FileText className="h-6 w-6 text-abricot" />
                </div>
                <h3 className="text-xl font-semibold text-[#121820]">
                  Plans et Conformité
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Nous réalisons des études techniques complètes et veillons à la
                conformité de vos installations avec les normes internationales
                en vigueur.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Études techniques selon normes NFPA et ISO
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Plans d&apos;évacuation et d&apos;intervention
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Audit de conformité réglementaire
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemFade}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-abricot transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="bg-abricot/10 p-3 rounded-full mr-4">
                  <Tool className="h-6 w-6 text-abricot" />
                </div>
                <h3 className="text-xl font-semibold text-[#121820]">
                  Maintenance et Vérifications
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Nous assurons la maintenance régulière de vos équipements de
                sécurité incendie pour garantir leur bon fonctionnement en cas
                d&apos;urgence.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Contrôle périodique des équipements
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Maintenance préventive et corrective
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Rapports détaillés et registre de sécurité
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemFade}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-abricot transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="bg-abricot/10 p-3 rounded-full mr-4">
                  <GraduationCap className="h-6 w-6 text-abricot" />
                </div>
                <h3 className="text-xl font-semibold text-[#121820]">
                  Formation et Prévention
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Nous formons vos équipes à la prévention des incendies et aux
                bonnes pratiques à adopter en cas d&apos;urgence pour minimiser
                les risques.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Sensibilisation et exercices d&apos;évacuation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Formation à l&apos;utilisation des extincteurs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Simulations d&apos;incendie et gestion de crise
                  </span>
                </li>
              </ul>
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
              Pourquoi choisir{" "}
              <span className="text-abricot">LB2S Technology Corp</span> pour
              votre sécurité incendie ?
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
                    <CheckCircle className="h-5 w-5 text-abricot" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#121820]">
                    Expertise technique
                  </h3>
                </div>
                <p className="text-gray-600">
                  Notre équipe d&apos;ingénieurs et de techniciens spécialisés
                  possède une expertise approfondie dans le domaine de la
                  sécurité incendie.
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
                    <CheckCircle className="h-5 w-5 text-abricot" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#121820]">
                    Solutions sur mesure
                  </h3>
                </div>
                <p className="text-gray-600">
                  Nous concevons des solutions adaptées à vos besoins
                  spécifiques et à la configuration de vos locaux pour une
                  protection optimale.
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
                    Conformité aux normes
                  </h3>
                </div>
                <p className="text-gray-600">
                  Nos installations respectent les normes internationales (NFPA,
                  ISO) et les réglementations locales en vigueur pour garantir
                  votre sécurité.
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
                Prêt à sécuriser vos{" "}
                <span className="text-abricot">installations</span> ?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins
                en matière de sécurité incendie et obtenir un devis
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
