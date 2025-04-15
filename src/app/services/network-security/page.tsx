"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  Server,
  Database,
  FileCheck,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function NetworkSecurityPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Sécurité Réseau & Cybersécurité" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="w-full h-full bg-white/90">
      <div className="w-full relative min-[998px]:h-[550px] min-[998px]:pt-[220px] pb-[90px] pt-[190px] flex items-center">
        <div className="w-full !z-20">
          <Header />
          <div className="absolute bg-map-other bg-cover bg-no-repeat bg-center !z-[-1] w-full h-full inset-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-gradient-to-r from-[#FF7F50]/30 to-transparent"
            />
          </div>
          <div className="flex w-full min-h-full items-center justify-between relative bg-transparent">
            <div className="xl:max-w-[1420px] px-8 xl:w-full flex justify-between items-center mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col justify-center items-start space-y-8"
              >
                <Breadcrumb items={breadcrumbItems} />
                <h1 className="text-2xl sm:text-[32px] lg:text-[42px] text-[#121820] leading-[140%] font-bold">
                  Sécurité Réseau & Cybersécurité
                </h1>
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100px" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="h-1 bg-[#FF7F50] rounded-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 90 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative !z-30 sm:flex hidden"
              >
                <Image
                  src="/images/bg-lb2s-abricot.svg"
                  alt="decorative element"
                  className="w-full h-full max-h-[140px] max-w-[220px] object-cover object-center flex !z-20"
                  width={220}
                  height={140}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full text-[#121820]">
        <section className="xl:max-w-[1420px] px-8 xl:w-full py-4 sm:py-16 mx-auto">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            custom={0}
            className="mb-16 relative"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Protection avancée pour vos systèmes et données
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Dans un monde où les menaces informatiques évoluent constamment,
                la sécurité de votre infrastructure numérique est primordiale.
                Chez L2BS Technology Corp, nous offrons des solutions de
                cybersécurité complètes et adaptées à vos besoins spécifiques.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Link
                  href="/quote"
                  className="bg-[#FF7F50] hover:bg-[#FF7F50]/90 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Demander un audit de sécurité</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-[#FF7F50] text-[#FF7F50] hover:bg-[#FF7F50]/10 px-8 py-3 rounded-md font-medium transition-all duration-300"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                className="w-8 h-8 rounded-full bg-[#FF7F50]/20 flex items-center justify-center"
              >
                <div className="w-4 h-4 rounded-full bg-[#FF7F50]/40" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <motion.h2
                variants={fadeIn}
                custom={1}
                className="text-3xl font-bold mb-4 inline-block relative"
              >
                Nos Solutions de Sécurité
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FF7F50]/60 rounded-full"></div>
              </motion.h2>
              <motion.p
                variants={fadeIn}
                custom={2}
                className="text-lg text-gray-700 max-w-3xl mx-auto"
              >
                Nous proposons une gamme complète de solutions pour protéger
                votre infrastructure contre les menaces modernes
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                variants={cardVariant}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-[#FF7F50]"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#FF7F50]/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                      }}
                      className="absolute inset-0 bg-[#FF7F50]/5 rounded-full"
                    />
                  </div>
                  <Shield className="w-10 h-10 text-[#FF7F50] relative z-10 ml-3 mt-3" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Pare-feu nouvelle génération
                </h3>
                <p className="text-gray-700 mb-4">
                  Protection avancée contre les intrusions avec inspection
                  approfondie des paquets et filtrage applicatif.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF7F50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Filtrage de contenu avancé</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF7F50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Prévention d&apos;intrusion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF7F50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Protection contre les malwares</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={cardVariant}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-[#FF7F50]"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#FF7F50]/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                        delay: 0.5,
                      }}
                      className="absolute inset-0 bg-[#FF7F50]/5 rounded-full"
                    />
                  </div>
                  <Lock className="w-10 h-10 text-[#FF7F50] relative z-10 ml-3 mt-3" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  VPN & Accès sécurisés
                </h3>
                <p className="text-gray-700 mb-4">
                  Solutions VPN robustes pour un accès distant sécurisé à vos
                  ressources d&apos;entreprise.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF7F50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Tunnels VPN site-à-site</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF7F50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>VPN SSL pour accès distant</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF7F50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Authentification multi-facteurs</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={cardVariant}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-[#FF7F50]"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#FF7F50]/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                        delay: 1,
                      }}
                      className="absolute inset-0 bg-[#FF7F50]/5 rounded-full"
                    />
                  </div>
                  <Eye className="w-10 h-10 text-[#FF7F50] relative z-10 ml-3 mt-3" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Surveillance des menaces
                </h3>
                <p className="text-gray-700 mb-4">
                  Systèmes de détection et de prévention des intrusions pour une
                  vigilance 24/7.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF7F50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Monitoring en temps réel</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF7F50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Analyse comportementale</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF7F50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Alertes et rapports automatisés</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={cardVariant}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-[#FF7F50]"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#FF7F50]/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                        delay: 1.5,
                      }}
                      className="absolute inset-0 bg-[#FF7F50]/5 rounded-full"
                    />
                  </div>
                  <Server className="w-10 h-10 text-[#FF7F50] relative z-10 ml-3 mt-3" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Sécurité des serveurs
                </h3>
                <p className="text-gray-700 mb-4">
                  Protection complète de vos serveurs contre les vulnérabilités
                  et les attaques.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF7F50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Durcissement des systèmes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF7F50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Gestion des correctifs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF7F50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Protection anti-malware</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={cardVariant}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-[#FF7F50]"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#FF7F50]/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                        delay: 2,
                      }}
                      className="absolute inset-0 bg-[#FF7F50]/5 rounded-full"
                    />
                  </div>
                  <Database className="w-10 h-10 text-[#FF7F50] relative z-10 ml-3 mt-3" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Protection des données
                </h3>
                <p className="text-gray-700 mb-4">
                  Solutions de chiffrement et de sauvegarde pour protéger vos
                  données sensibles.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF7F50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Chiffrement des données</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF7F50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sauvegarde sécurisée</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF7F50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Prévention de perte de données</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={cardVariant}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-[#FF7F50]"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#FF7F50]/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                        delay: 2.5,
                      }}
                      className="absolute inset-0 bg-[#FF7F50]/5 rounded-full"
                    />
                  </div>
                  <Users className="w-10 h-10 text-[#FF7F50] relative z-10 ml-3 mt-3" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Formation et sensibilisation
                </h3>
                <p className="text-gray-700 mb-4">
                  Programmes de formation pour sensibiliser vos employés aux
                  bonnes pratiques de sécurité.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF7F50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Ateliers de sensibilisation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF7F50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Simulations de phishing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF7F50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Documentation et guides</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            custom={3}
            className="mb-20"
          >
            <div className="bg-gray-50 rounded-xl p-8 lg:p-12 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7F50]/10 rounded-full -mr-32 -mt-32 z-0"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF7F50]/5 rounded-full -ml-32 -mb-32 z-0"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  Notre Approche en Cybersécurité
                </h2>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-lg overflow-hidden shadow-md"
                    >
                      <Image
                        src="/services/security.jpg"
                        alt="Écran affichant un monitoring de sécurité"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </motion.div>
                  </div>

                  <div className="space-y-6">
                    <p className="text-lg">
                      Chez L2BS Technology Corp, nous adoptons une approche
                      proactive et multicouche de la cybersécurité. Notre
                      méthodologie repose sur quatre piliers essentiels :
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-[#FF7F50] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                          1
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Évaluation</h3>
                          <p className="text-gray-700">
                            Analyse approfondie de votre infrastructure pour
                            identifier les vulnérabilités potentielles
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#FF7F50] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                          2
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Protection</h3>
                          <p className="text-gray-700">
                            Mise en place de solutions de sécurité adaptées à
                            vos besoins spécifiques
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#FF7F50] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                          3
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">
                            Surveillance
                          </h3>
                          <p className="text-gray-700">
                            Monitoring continu pour détecter et répondre
                            rapidement aux menaces
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#FF7F50] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                          4
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">
                            Amélioration
                          </h3>
                          <p className="text-gray-700">
                            Optimisation continue de votre posture de sécurité
                            face à l&apos;évolution des menaces
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            custom={4}
            className="mb-20"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Menaces Courantes
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FF7F50]">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-[#FF7F50] mr-3" />
                    <h3 className="font-semibold text-lg">Ransomware</h3>
                  </div>
                  <p className="text-gray-700">
                    Logiciels malveillants qui chiffrent vos données et exigent
                    une rançon pour les déverrouiller.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FF7F50]">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-[#FF7F50] mr-3" />
                    <h3 className="font-semibold text-lg">Phishing</h3>
                  </div>
                  <p className="text-gray-700">
                    Tentatives de vol d&apos;informations sensibles par
                    usurpation d&apos;identité.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FF7F50]">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-[#FF7F50] mr-3" />
                    <h3 className="font-semibold text-lg">DDoS</h3>
                  </div>
                  <p className="text-gray-700">
                    Attaques visant à rendre vos services indisponibles en
                    surchargeant vos systèmes.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FF7F50]">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-[#FF7F50] mr-3" />
                    <h3 className="font-semibold text-lg">Malware</h3>
                  </div>
                  <p className="text-gray-700">
                    Logiciels malveillants conçus pour compromettre vos systèmes
                    et voler des données.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FF7F50]">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-[#FF7F50] mr-3" />
                    <h3 className="font-semibold text-lg">Menaces internes</h3>
                  </div>
                  <p className="text-gray-700">
                    Risques liés aux actions malveillantes ou négligentes des
                    employés.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FF7F50]">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-[#FF7F50] mr-3" />
                    <h3 className="font-semibold text-lg">
                      Vulnérabilités Zero-day
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Failles de sécurité inconnues exploitées avant que les
                    correctifs ne soient disponibles.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            custom={5}
            className="mb-20"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">
                Pourquoi Choisir L2BS pour votre Sécurité Réseau ?
              </h2>
              <div className="w-24 h-1 bg-[#FF7F50] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Notre expertise et notre approche personnalisée font de nous le
                partenaire idéal pour sécuriser votre infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="mb-4 text-[#FF7F50]">
                  <FileCheck className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Expertise approfondie
                </h3>
                <p className="text-gray-700 flex-grow">
                  Notre équipe est composée d&apos;experts certifiés en sécurité
                  informatique et réseaux, avec une expérience éprouvée dans la
                  protection des infrastructures critiques.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="mb-4 text-[#FF7F50]">
                  <Shield className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Protection multicouche
                </h3>
                <p className="text-gray-700 flex-grow">
                  Nous déployons des solutions de sécurité à plusieurs niveaux
                  pour assurer une protection complète contre les menaces
                  modernes et émergentes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="mb-4 text-[#FF7F50]">
                  <Lock className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Conformité réglementaire
                </h3>
                <p className="text-gray-700 flex-grow">
                  Nos solutions respectent les normes et réglementations de
                  sécurité les plus strictes, vous aidant à maintenir la
                  conformité avec les exigences légales.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="mb-4 text-[#FF7F50]">
                  <Eye className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Support 24/7</h3>
                <p className="text-gray-700 flex-grow">
                  Notre équipe de support technique est disponible 24h/24 et
                  7j/7 pour répondre rapidement à tout incident de sécurité et
                  assurer la continuité de vos activités.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="mb-4 text-[#FF7F50]">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Formation et sensibilisation
                </h3>
                <p className="text-gray-700 flex-grow">
                  Nous proposons des programmes de formation pour sensibiliser
                  vos employés aux bonnes pratiques de sécurité, réduisant ainsi
                  les risques d&apos;erreurs humaines.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="mb-4 text-[#FF7F50]">
                  <Server className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Solutions sur mesure
                </h3>
                <p className="text-gray-700 flex-grow">
                  Nous adaptons nos solutions de sécurité à vos besoins
                  spécifiques, en tenant compte de votre infrastructure, de vos
                  contraintes et de vos objectifs.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            custom={6}
            className="text-center mb-16 bg-gradient-to-r from-[#FF7F50]/10 to-white p-10 rounded-xl"
          >
            <h2 className="text-3xl font-bold mb-6">
              Protégez votre entreprise dès maintenant
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Ne laissez pas les cybermenaces compromettre votre activité.
              Contactez-nous pour une évaluation gratuite de la sécurité de
              votre réseau et découvrez comment nos solutions peuvent renforcer
              votre posture de sécurité.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/quote"
                className="bg-[#FF7F50] hover:bg-[#FF7F50]/90 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Demander un devis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#FF7F50] text-[#FF7F50] hover:bg-[#FF7F50]/10 px-8 py-3 rounded-md font-medium transition-all duration-300"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
