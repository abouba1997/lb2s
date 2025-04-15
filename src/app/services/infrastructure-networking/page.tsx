"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Network,
  Cable,
  Server,
  Wifi,
  Lock,
  Phone,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function InfrastructureNetworkingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Infrastructure Réseau & Câblage" },
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
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: custom * 0.1 + 0.3,
      },
    }),
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
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
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center items-start space-y-8"
              >
                <Breadcrumb items={breadcrumbItems} />
                <h1 className="text-2xl sm:text-[32px] lg:text-[42px] text-[#121820] leading-[140%] space-y-5 font-bold">
                  Infrastructure Réseau & Câblage
                </h1>
                <p className="text-lg text-[#4A5568] max-w-xl">
                  Des solutions réseau performantes pour connecter efficacement
                  vos systèmes
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative !z-30 sm:flex hidden"
              >
                <Image
                  src="/images/bg-lb2s-abricot.svg"
                  alt="ceo_words"
                  className="w-full h-full max-h-[140px] max-w-[220px] object-cover object-center flex !z-20 rotate-90"
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
          className="py-10 sm:py-16 xl:max-w-[1420px] px-8 xl:w-full mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#FF7F50] mb-4">
              Infrastructure Réseau & Câblage
            </h1>
            <div className="w-24 h-1 bg-[#FF7F50] mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions d&apos;infrastructure réseau performantes et
              évolutives pour connecter efficacement vos systèmes et
              équipements.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg w-full h-full overflow-hidden shadow-lg relative group"
            >
              <Image
                src="/services/reseaux.jpg"
                alt="Infrastructure réseau moderne"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
            <div className="flex flex-col justify-center">
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold mb-4 text-[#2D3748]"
              >
                Connectivité fiable et sécurisée
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="w-16 h-1 bg-[#FF7F50] mb-6"
              ></motion.div>
              <motion.p
                variants={itemVariants}
                className="text-muted-foreground mb-6"
              >
                Chez L2BS Technology Corp, nous concevons, installons et
                maintenons des infrastructures réseau robustes et évolutives qui
                répondent aux besoins actuels et futurs de votre entreprise.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-muted-foreground mb-8"
              >
                Nos solutions d&apos;infrastructure réseau et de câblage sont
                conçues pour offrir des performances optimales, une fiabilité
                maximale et une sécurité renforcée.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link
                  href="/quote"
                  className="inline-flex items-center text-[#FF7F50] font-medium hover:text-[#FF7F50]/80 transition-colors"
                >
                  Demander un devis <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              custom={0}
              variants={cardVariants}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border-t-4 border-[#FF7F50]"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#FF7F50]/10 p-3 rounded-full mr-4 relative">
                  <Cable className="h-6 w-6 text-[#FF7F50]" />
                  <span className="absolute inset-0 rounded-full border border-[#FF7F50]/50 animate-ping"></span>
                </div>
                <h3 className="text-xl font-semibold">Câblage structuré</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nous réalisons des installations de câblage structuré conformes
                aux normes internationales, pour une connectivité fiable et
                pérenne.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Câblage cuivre Cat5e, Cat6, Cat6a, Cat7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Fibre optique monomode et multimode</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Baies et armoires de brassage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Certification et documentation complète</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              custom={1}
              variants={cardVariants}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border-t-4 border-[#FF7F50]"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#FF7F50]/10 p-3 rounded-full mr-4 relative">
                  <Server className="h-6 w-6 text-[#FF7F50]" />
                  <span className="absolute inset-0 rounded-full border border-[#FF7F50]/50 animate-ping"></span>
                </div>
                <h3 className="text-xl font-semibold">Équipements actifs</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nous fournissons et configurons des équipements réseau de
                qualité professionnelle pour des performances optimales et une
                sécurité renforcée.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Commutateurs (switches) managés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Routeurs et pare-feu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Points d&apos;accès Wi-Fi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Serveurs et stockage réseau</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              custom={2}
              variants={cardVariants}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border-t-4 border-[#FF7F50]"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#FF7F50]/10 p-3 rounded-full mr-4 relative">
                  <Wifi className="h-6 w-6 text-[#FF7F50]" />
                  <span className="absolute inset-0 rounded-full border border-[#FF7F50]/50 animate-ping"></span>
                </div>
                <h3 className="text-xl font-semibold">Solutions Wi-Fi</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nous concevons et déployons des réseaux Wi-Fi performants et
                sécurisés, adaptés à vos besoins de mobilité et de connectivité
                sans fil.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Étude de couverture radio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Wi-Fi 6 (802.11ax) et Wi-Fi 6E</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Contrôleurs Wi-Fi centralisés ou cloud</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Sécurité et authentification avancées</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              custom={3}
              variants={cardVariants}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border-t-4 border-[#FF7F50]"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#FF7F50]/10 p-3 rounded-full mr-4 relative">
                  <Network className="h-6 w-6 text-[#FF7F50]" />
                  <span className="absolute inset-0 rounded-full border border-[#FF7F50]/50 animate-ping"></span>
                </div>
                <h3 className="text-xl font-semibold">Architecture réseau</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nous concevons des architectures réseau adaptées à vos besoins,
                en tenant compte de vos contraintes techniques, budgétaires et
                de sécurité.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Conception de réseaux LAN/WAN</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Segmentation et VLANs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Redondance et haute disponibilité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7F50] mr-2">•</span>
                  <span>Documentation technique détaillée</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInVariants}
            className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-8 shadow-lg mb-16 border border-gray-100"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#2D3748]">
              Services complémentaires
            </h2>
            <div className="w-16 h-1 bg-[#FF7F50] mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#FF7F50]/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-[#FF7F50]" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Téléphonie IP & VoIP
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Nous déployons des solutions de téléphonie IP modernes et
                  performantes pour optimiser vos communications
                  d&apos;entreprise.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-[#FF7F50] mr-2">•</span>
                    <span>IPBX et centraux téléphoniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF7F50] mr-2">•</span>
                    <span>Téléphones IP et softphones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF7F50] mr-2">•</span>
                    <span>Communications unifiées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF7F50] mr-2">•</span>
                    <span>Visioconférence et collaboration</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#FF7F50]/10 p-3 rounded-full mr-4">
                    <Lock className="h-6 w-6 text-[#FF7F50]" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Sécurité Réseau & Cybersécurité
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Nous mettons en place des solutions de sécurité réseau
                  robustes pour protéger vos données et vos systèmes contre les
                  menaces.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-[#FF7F50] mr-2">•</span>
                    <span>Pare-feu nouvelle génération</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF7F50] mr-2">•</span>
                    <span>VPN et accès sécurisés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF7F50] mr-2">•</span>
                    <span>Détection et prévention d&apos;intrusion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF7F50] mr-2">•</span>
                    <span>Surveillance et analyse des menaces</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 mb-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7F50]/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF7F50]/5 rounded-full -ml-32 -mb-32"></div>

            <h2 className="text-2xl font-bold mb-6 text-center relative z-10">
              Notre approche
            </h2>
            <div className="w-16 h-1 bg-[#FF7F50] mx-auto mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-4 text-center shadow-sm"
              >
                <div className="bg-[#FF7F50]/10 p-3 rounded-full mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                  <span className="font-bold text-[#FF7F50]">1</span>
                </div>
                <h3 className="font-semibold mb-2">Audit et analyse</h3>
                <p className="text-sm text-muted-foreground">
                  Évaluation de vos besoins et de votre infrastructure existante
                </p>
              </motion.div>
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-4 text-center shadow-sm"
              >
                <div className="bg-[#FF7F50]/10 p-3 rounded-full mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                  <span className="font-bold text-[#FF7F50]">2</span>
                </div>
                <h3 className="font-semibold mb-2">Conception</h3>
                <p className="text-sm text-muted-foreground">
                  Élaboration d&apos;une solution sur mesure adaptée à vos
                  besoins
                </p>
              </motion.div>
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-4 text-center shadow-sm"
              >
                <div className="bg-[#FF7F50]/10 p-3 rounded-full mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                  <span className="font-bold text-[#FF7F50]">3</span>
                </div>
                <h3 className="font-semibold mb-2">Déploiement</h3>
                <p className="text-sm text-muted-foreground">
                  Installation et configuration professionnelles de votre
                  infrastructure
                </p>
              </motion.div>
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-4 text-center shadow-sm"
              >
                <div className="bg-[#FF7F50]/10 p-3 rounded-full mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                  <span className="font-bold text-[#FF7F50]">4</span>
                </div>
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-sm text-muted-foreground">
                  Maintenance, supervision et assistance technique continue
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={fadeInVariants} className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Avantages de nos solutions d&apos;infrastructure réseau
            </h2>
            <div className="w-16 h-1 bg-[#FF7F50] mx-auto mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#FF7F50]"
              >
                <h3 className="text-xl font-semibold mb-3">Performance</h3>
                <p className="text-muted-foreground">
                  Nos infrastructures réseau offrent des performances optimales
                  pour répondre aux exigences de vos applications métier et
                  garantir la productivité de vos équipes.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#FF7F50]"
              >
                <h3 className="text-xl font-semibold mb-3">Fiabilité</h3>
                <p className="text-muted-foreground">
                  Nous concevons des réseaux robustes et redondants pour assurer
                  une disponibilité maximale de vos services et minimiser les
                  interruptions.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#FF7F50]"
              >
                <h3 className="text-xl font-semibold mb-3">Évolutivité</h3>
                <p className="text-muted-foreground">
                  Nos solutions sont conçues pour évoluer avec votre entreprise,
                  vous permettant d&apos;ajouter facilement de nouveaux
                  utilisateurs, sites ou applications.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            className="text-center mb-16 bg-gradient-to-br from-gray-50 to-white p-12 rounded-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7F50]/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF7F50]/5 rounded-full -ml-32 -mb-32"></div>

            <h2 className="text-3xl font-bold mb-6 relative z-10">
              Besoin d&apos;une infrastructure réseau performante ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto relative z-10">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins
              en matière d&apos;infrastructure réseau et obtenir un devis
              personnalisé.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/quote"
                  className="bg-[#FF7F50] text-white hover:bg-[#FF7F50]/90 px-8 py-3 rounded-md font-medium inline-flex items-center shadow-md hover:shadow-lg transition-all"
                >
                  Demander un devis <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-white text-[#FF7F50] border border-[#FF7F50] hover:bg-gray-50 px-8 py-3 rounded-md font-medium inline-flex items-center shadow-sm hover:shadow-md transition-all"
                >
                  Nous contacter <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
}
