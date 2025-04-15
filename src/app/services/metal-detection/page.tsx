"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ScanLine,
  Package,
  Shield,
  Building,
  ArrowRight,
  Zap,
  Lock,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function MetalDetectionPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Détection Métaux & Rayon X" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="w-full h-full bg-white/90">
      <div className="w-full relative min-[998px]:h-[550px] min-[998px]:pt-[220px] pb-[90px] pt-[190px] flex items-center">
        <div className="w-full !z-20">
          <Header />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute bg-map-other bg-cover bg-no-repeat bg-center !z-[-1] w-full h-full inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent"></div>
          </motion.div>
          <div className="flex w-full min-h-full items-center justify-between relative bg-transparent">
            <div className="xl:max-w-[1420px] px-8 xl:w-full flex justify-between items-center mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col justify-center items-start space-y-8"
              >
                <Breadcrumb items={breadcrumbItems} />
                <h1 className="text-2xl sm:text-[32px] lg:text-[42px] text-[#121820] leading-[140%] space-y-5 font-bold">
                  Détection Métaux & Rayon X
                </h1>
                <p className="text-lg text-gray-700 max-w-xl">
                  Solutions de sécurité avancées pour le contrôle des accès et
                  la détection d&apos;objets dangereux
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 90 }}
                transition={{ duration: 0.8, delay: 0.5 }}
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

      <div className="bg-white w-full text-default-text">
        <motion.section
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="py-10 sm:py-16 xl:max-w-[1420px] px-8 xl:w-full  mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block mb-3">
              <div className="h-1.5 w-20 bg-[#FF7F50] rounded-full mb-1.5 mx-auto"></div>
              <div className="h-1.5 w-12 bg-[#FF7F50] rounded-full mx-auto"></div>
            </div>
            <h1 className="text-4xl font-bold text-[#FF7F50] mb-4">
              Détection Métaux & Rayon X
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions de détection avancées pour sécuriser vos accès et
              contrôler efficacement les personnes et les bagages.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          >
            <div className="rounded-lg overflow-hidden shadow-lg group">
              <div className="relative overflow-hidden">
                <Image
                  src="/services/detection-metaux.jpeg"
                  alt="Portique de détection de métaux"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="h-1 w-16 bg-[#FF7F50] rounded-full mb-6"></div>
              <h2 className="text-3xl font-bold mb-4">
                Sécurité et contrôle avancés
              </h2>
              <p className="text-muted-foreground mb-6">
                Chez L2BS Technology Corp, nous proposons des solutions de
                détection de métaux et de contrôle par rayons X de haute
                performance pour sécuriser vos accès et protéger vos
                installations.
              </p>
              <p className="text-muted-foreground mb-8">
                Nos équipements de détection utilisent les technologies les plus
                récentes pour vous offrir une sécurité optimale tout en
                facilitant le flux des personnes et des objets.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center text-[#FF7F50] font-medium hover:text-[#FF7F50]/80 transition-colors group"
              >
                <span>Demander un devis</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              custom={0}
              variants={cardVariants}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#FF7F50] group hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="relative">
                  <div className="bg-[#FF7F50]/10 p-3 rounded-full mr-4">
                    <ScanLine className="h-6 w-6 text-[#FF7F50]" />
                  </div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute -top-1 -right-1 -bottom-1 -left-1 rounded-full border border-[#FF7F50]/30 animate-ping-slow"
                  ></motion.div>
                </div>
                <h3 className="text-xl font-semibold">
                  Portiques de détection de métaux
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nos portiques de détection de métaux permettent
                d&apos;identifier rapidement et efficacement les objets
                métalliques dissimulés sur les personnes.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Haute sensibilité et discrimination précise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Localisation par zones des objets détectés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Comptage automatique des passages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Paramétrage personnalisable selon vos besoins</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              custom={1}
              variants={cardVariants}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#FF7F50] group hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="relative">
                  <div className="bg-[#FF7F50]/10 p-3 rounded-full mr-4">
                    <Package className="h-6 w-6 text-[#FF7F50]" />
                  </div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute -top-1 -right-1 -bottom-1 -left-1 rounded-full border border-[#FF7F50]/30 animate-ping-slow"
                  ></motion.div>
                </div>
                <h3 className="text-xl font-semibold">
                  Scanners à rayons X pour bagages
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nos scanners à rayons X permettent d&apos;inspecter le contenu
                des bagages, colis et objets sans avoir à les ouvrir, pour une
                sécurité optimale.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Images haute résolution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Détection automatique des objets dangereux</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Différenciation des matériaux par couleur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Traitement rapide des bagages</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              custom={2}
              variants={cardVariants}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#FF7F50] group hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="relative">
                  <div className="bg-[#FF7F50]/10 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-[#FF7F50]" />
                  </div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="absolute -top-1 -right-1 -bottom-1 -left-1 rounded-full border border-[#FF7F50]/30 animate-ping-slow"
                  ></motion.div>
                </div>
                <h3 className="text-xl font-semibold">
                  Détecteurs manuels et portatifs
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nos détecteurs manuels complètent les portiques fixes pour des
                contrôles plus précis et ciblés des personnes et des objets.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Détecteurs de métaux portatifs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Détecteurs d&apos;explosifs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Miroirs d&apos;inspection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Équipements légers et ergonomiques</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              custom={3}
              variants={cardVariants}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#FF7F50] group hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="relative">
                  <div className="bg-[#FF7F50]/10 p-3 rounded-full mr-4">
                    <Building className="h-6 w-6 text-[#FF7F50]" />
                  </div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="absolute -top-1 -right-1 -bottom-1 -left-1 rounded-full border border-[#FF7F50]/30 animate-ping-slow"
                  ></motion.div>
                </div>
                <h3 className="text-xl font-semibold">Solutions intégrées</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nous proposons des solutions complètes intégrant détection de
                métaux, contrôle par rayons X et autres systèmes de sécurité
                pour une protection globale.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Intégration avec le contrôle d&apos;accès</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Connexion à la vidéosurveillance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Gestion centralisée des alertes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Rapports et statistiques détaillés</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 mb-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7F50]/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF7F50]/5 rounded-full -ml-32 -mb-32"></div>

            <h2 className="text-2xl font-bold mb-6 text-center relative z-10">
              Applications de nos solutions de détection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#FF7F50]"
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Zap className="h-5 w-5 text-[#FF7F50] mr-2" />
                  Aéroports et transports
                </h3>
                <p className="text-muted-foreground">
                  Sécurisez les flux de passagers et de bagages dans les
                  aéroports, gares et autres infrastructures de transport pour
                  prévenir les menaces.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#FF7F50]"
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Lock className="h-5 w-5 text-[#FF7F50] mr-2" />
                  Bâtiments publics
                </h3>
                <p className="text-muted-foreground">
                  Protégez les tribunaux, administrations, musées et autres
                  lieux recevant du public contre l&apos;introduction
                  d&apos;objets dangereux.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#FF7F50]"
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Users className="h-5 w-5 text-[#FF7F50] mr-2" />
                  Événements et manifestations
                </h3>
                <p className="text-muted-foreground">
                  Assurez la sécurité des concerts, conférences, salons et
                  autres événements rassemblant un grand nombre de personnes.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Avantages de nos solutions de détection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Sécurité renforcée",
                  description:
                    "Détectez efficacement les objets dangereux ou interdits avant qu'ils ne pénètrent dans vos locaux, pour une protection optimale des personnes et des biens.",
                },
                {
                  title: "Fluidité des contrôles",
                  description:
                    "Nos équipements permettent des contrôles rapides et efficaces, limitant les files d'attente et les désagréments pour les personnes contrôlées.",
                },
                {
                  title: "Conformité réglementaire",
                  description:
                    "Nos solutions respectent les normes et réglementations en vigueur en matière de sécurité et de protection contre les rayonnements.",
                },
                {
                  title: "Adaptabilité",
                  description:
                    "Nos systèmes s'adaptent à vos besoins spécifiques et à la configuration de vos locaux, pour une sécurité sur mesure.",
                },
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg border border-gray-100"
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#FF7F50]">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {advantage.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center mb-16 bg-gradient-to-br from-[#FF7F50]/10 to-white p-10 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7F50]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF7F50]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

            <h2 className="text-3xl font-bold mb-6 relative z-10">
              Besoin de solutions de détection fiables ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto relative z-10">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins
              en matière de détection de métaux et de contrôle par rayons X, et
              obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/quote"
                  className="bg-[#FF7F50] text-white hover:bg-[#FF7F50]/90 px-8 py-3 rounded-md font-medium inline-block"
                >
                  Demander un devis
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-white text-[#FF7F50] border border-[#FF7F50] hover:bg-gray-50 px-8 py-3 rounded-md font-medium inline-block"
                >
                  Nous contacter
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </div>
      <Footer />

      <style jsx global>{`
        @keyframes ping-slow {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: scale(0.8);
            opacity: 0.8;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 3s infinite;
        }
      `}</style>
    </div>
  );
}
