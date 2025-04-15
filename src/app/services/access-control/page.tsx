"use client";

import Image from "next/image";
import Link from "next/link";
import {
  KeyRound,
  Fingerprint,
  Clock,
  Shield,
  ArrowRight,
  Lock,
  Users,
  Building,
} from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AccessControlPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Contrôle d'Accès" },
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
                  Contrôle <span className="text-abricot">d&apos;Accès</span>
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
                  Des solutions de contrôle d&apos;accès intelligentes pour
                  sécuriser vos locaux et gérer efficacement les entrées et
                  sorties.
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
                  alt="access_control_page"
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
        <section className="py-10 sm:py-16 xl:max-w-[1420px] px-8 xl:w-full mx-auto relative overflow-hidden">
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
              Contrôle d&apos;Accès{" "}
              <span className="text-abricot">Sécurisé</span>
            </h2>
            <div className="w-24 h-1 bg-abricot mx-auto mt-4 mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions de contrôle d&apos;accès intelligentes pour
              sécuriser vos locaux et gérer efficacement les entrées et sorties.
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
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/services/access-control.webp"
                  alt="Système de contrôle d'accès"
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
                  Contrôle d&apos;accès{" "}
                  <span className="text-abricot">sécurisé</span>
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Chez LB2S Technology Corp, nous concevons et installons des
                systèmes de contrôle d&apos;accès sur mesure qui répondent aux
                besoins spécifiques de votre entreprise ou de votre institution.
              </p>
              <p className="text-gray-600 mb-8">
                Nos solutions de contrôle d&apos;accès utilisent les
                technologies les plus récentes pour vous offrir une sécurité
                optimale tout en facilitant la gestion des accès.
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
                  <KeyRound className="h-6 w-6 text-abricot" />
                </div>
                <h3 className="text-xl font-semibold text-[#121820]">
                  Badges RFID et cartes à puce
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Nos systèmes de contrôle d&apos;accès par badges RFID et cartes
                à puce offrent une solution fiable et facile à gérer pour
                sécuriser vos locaux.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">Badges personnalisables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Technologie RFID sécurisée
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Cartes à puce avec cryptage avancé
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Lecteurs de badges élégants et discrets
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
                  <Fingerprint className="h-6 w-6 text-abricot" />
                </div>
                <h3 className="text-xl font-semibold text-[#121820]">
                  Biométrie
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Nos solutions biométriques offrent un niveau de sécurité
                supérieur en utilisant les caractéristiques physiques uniques de
                chaque individu.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Lecteurs d&apos;empreintes digitales
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">Reconnaissance faciale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Reconnaissance de l&apos;iris
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Authentification multi-facteurs
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
                  <Clock className="h-6 w-6 text-abricot" />
                </div>
                <h3 className="text-xl font-semibold text-[#121820]">
                  Gestion des accès et horaires
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Notre logiciel de gestion des accès vous permet de définir
                précisément qui peut accéder à quelles zones et à quels moments,
                pour un contrôle total.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Définition de plages horaires d&apos;accès
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Gestion des niveaux d&apos;autorisation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Rapports d&apos;activité détaillés
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Intégration avec les systèmes RH
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
                  <Shield className="h-6 w-6 text-abricot" />
                </div>
                <h3 className="text-xl font-semibold text-[#121820]">
                  Intégration et sécurité
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Nos systèmes de contrôle d&apos;accès s&apos;intègrent
                parfaitement avec vos autres équipements de sécurité pour une
                protection complète.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Intégration avec la vidéosurveillance
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Connexion aux systèmes d&apos;alarme
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Gestion centralisée de la sécurité
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-abricot mr-2">•</span>
                  <span className="text-gray-700">
                    Protocoles de communication sécurisés
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
            <h2 className="text-2xl font-bold mb-8 text-center text-[#121820]">
              Applications de nos <span className="text-abricot">systèmes</span>{" "}
              de contrôle d&apos;accès
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
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-abricot/10 p-3 rounded-full mr-4">
                    <Building className="h-6 w-6 text-abricot" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#121820]">
                    Entreprises
                  </h3>
                </div>
                <p className="text-gray-600">
                  Sécurisez vos bureaux et zones sensibles. Gérez les accès des
                  employés, visiteurs et prestataires. Suivez les entrées et
                  sorties pour améliorer la sécurité et la gestion du personnel.
                </p>
              </motion.div>
              <motion.div
                variants={itemFade}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-abricot/10 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-abricot" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#121820]">
                    Institutions
                  </h3>
                </div>
                <p className="text-gray-600">
                  Protégez les établissements publics, écoles, hôpitaux et
                  administrations. Contrôlez les flux de personnes et sécurisez
                  les zones réservées au personnel autorisé.
                </p>
              </motion.div>
              <motion.div
                variants={itemFade}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-abricot/10 p-3 rounded-full mr-4">
                    <Lock className="h-6 w-6 text-abricot" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#121820]">
                    Résidences
                  </h3>
                </div>
                <p className="text-gray-600">
                  Sécurisez les immeubles résidentiels et copropriétés. Gérez
                  les accès des résidents et visiteurs. Améliorez la sécurité
                  tout en facilitant la vie quotidienne des habitants.
                </p>
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
              Avantages de nos <span className="text-abricot">systèmes</span> de
              contrôle d&apos;accès
            </h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div
                variants={itemFade}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-abricot transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#121820] flex items-center">
                  <div className="bg-abricot/10 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-abricot" />
                  </div>
                  Sécurité renforcée
                </h3>
                <p className="text-gray-600">
                  Limitez l&apos;accès à vos locaux aux seules personnes
                  autorisées. Protégez vos biens, vos données et vos
                  collaborateurs contre les intrusions.
                </p>
              </motion.div>
              <motion.div
                variants={itemFade}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-abricot transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#121820] flex items-center">
                  <div className="bg-abricot/10 p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-abricot" />
                  </div>
                  Gestion simplifiée
                </h3>
                <p className="text-gray-600">
                  Fini les clés perdues ou dupliquées. Gérez facilement les
                  droits d&apos;accès depuis une interface centralisée. Ajoutez
                  ou supprimez des utilisateurs en quelques clics.
                </p>
              </motion.div>
              <motion.div
                variants={itemFade}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-abricot transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#121820] flex items-center">
                  <div className="bg-abricot/10 p-2 rounded-full mr-3">
                    <Clock className="h-5 w-5 text-abricot" />
                  </div>
                  Traçabilité complète
                </h3>
                <p className="text-gray-600">
                  Suivez tous les mouvements d&apos;entrée et de sortie. Générez
                  des rapports détaillés pour analyser les flux et identifier
                  d&apos;éventuelles anomalies.
                </p>
              </motion.div>
              <motion.div
                variants={itemFade}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-abricot transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#121820] flex items-center">
                  <div className="bg-abricot/10 p-2 rounded-full mr-3">
                    <ArrowRight className="h-5 w-5 text-abricot" />
                  </div>
                  Évolutivité
                </h3>
                <p className="text-gray-600">
                  Nos systèmes s&apos;adaptent à l&apos;évolution de vos
                  besoins. Ajoutez facilement de nouveaux points d&apos;accès ou
                  de nouvelles fonctionnalités selon vos exigences.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={6}
            className="text-center mb-16 relative z-10"
          >
            <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#121820]">
                Besoin d&apos;un{" "}
                <span className="text-abricot">
                  système de contrôle d&apos;accès
                </span>{" "}
                fiable ?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins
                en matière de contrôle d&apos;accès et obtenir un devis
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
