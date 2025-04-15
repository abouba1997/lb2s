"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Wifi,
  Signal,
  Smartphone,
  Zap,
  Shield,
  BarChart3,
  Globe,
  Server,
} from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function WifiInternetPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Solutions Wi-Fi & Internet" },
  ];

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

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
    hidden: { y: 50, opacity: 0 },
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
    <div className="w-full h-full bg-white">
      <div className="w-full relative min-[998px]:h-[550px] min-[998px]:pt-[220px] pb-[90px] pt-[190px] flex items-center">
        <div className="w-full !z-20">
          <Header />
          <div className="absolute bg-map-other bg-cover bg-no-repeat bg-center !z-[-1] w-full h-full inset-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-gradient-to-r from-[#FF7F50]/20 to-transparent"
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
                  Solutions Wi-Fi & Internet
                </h1>
                <p className="text-lg text-gray-700 max-w-2xl">
                  Connectivité sans fil performante et sécurisée pour votre
                  entreprise
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 90 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative !z-30 sm:flex hidden"
              >
                <Image
                  src="/images/bg-lb2s-abricot.svg"
                  alt="LB2S decoration"
                  className="w-full h-full max-h-[140px] max-w-[220px] object-cover object-center flex !z-20"
                  width={220}
                  height={140}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full xl:max-w-[1420px] mx-auto px-8 xl:w-full text-default-text">
        <motion.section
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="sm:py-16 py-10 w-full mx-auto"
        >
          {/* Introduction Section */}
          <motion.div
            variants={itemVariants}
            className="mb-20 grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FF7F50]/10 rounded-full"></div>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/services/wifi-couverture.webp"
                  alt="Solutions Wi-Fi professionnelles"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FF7F50]/10 rounded-full"></div>
            </div>
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-[#FF7F50]/10 rounded-full text-[#FF7F50] font-medium text-sm">
                Connectivité Optimisée
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Des solutions Wi-Fi & Internet adaptées à vos besoins
              </h2>
              <div className="w-20 h-1 bg-[#FF7F50]"></div>
              <p className="text-lg text-gray-700">
                Chez L2BS Technology Corp, nous concevons et déployons des
                solutions Wi-Fi et Internet performantes, sécurisées et
                évolutives pour répondre aux exigences spécifiques de votre
                entreprise.
              </p>
              <p className="text-lg text-gray-700">
                Notre expertise technique et notre approche personnalisée vous
                garantissent une connectivité sans faille, essentielle à la
                productivité de vos équipes et à la satisfaction de vos clients.
              </p>
              <div className="pt-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center px-6 py-3 bg-[#FF7F50] text-white rounded-md font-medium transition-all hover:bg-[#FF7F50]/90 hover:shadow-lg"
                >
                  Obtenir un devis
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div variants={itemVariants} className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Nos Services Wi-Fi & Internet
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Des solutions complètes pour assurer une connectivité optimale
                dans tous vos espaces
              </p>
              <div className="w-20 h-1 bg-[#FF7F50] mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Wifi className="w-10 h-10 text-[#FF7F50]" />,
                  title: "Réseaux sans fil",
                  description:
                    "Conception et déploiement de réseaux Wi-Fi performants et sécurisés pour tous types d'environnements professionnels.",
                  features: [
                    "Wi-Fi 6 & 6E",
                    "Maillage (Mesh)",
                    "Contrôleurs centralisés",
                    "Gestion cloud",
                  ],
                },
                {
                  icon: <Signal className="w-10 h-10 text-[#FF7F50]" />,
                  title: "Optimisation de couverture",
                  description:
                    "Analyse et amélioration de la couverture Wi-Fi pour éliminer les zones mortes et assurer une connectivité stable.",
                  features: [
                    "Études de site",
                    "Cartographie thermique",
                    "Positionnement optimal",
                    "Élimination d'interférences",
                  ],
                },
                {
                  icon: <Smartphone className="w-10 h-10 text-[#FF7F50]" />,
                  title: "Hotspots & Portails captifs",
                  description:
                    "Installation de points d'accès Wi-Fi publics sécurisés avec portail captif personnalisé pour vos visiteurs.",
                  features: [
                    "Authentification personnalisée",
                    "Collecte de données",
                    "Limitation de bande passante",
                    "Conformité RGPD",
                  ],
                },
                {
                  icon: <Globe className="w-10 h-10 text-[#FF7F50]" />,
                  title: "Connectivité Internet",
                  description:
                    "Solutions d'accès Internet fiables et redondantes pour garantir une disponibilité maximale de vos services.",
                  features: [
                    "Fibre optique",
                    "Connexions redondantes",
                    "Failover automatique",
                    "QoS (Qualité de Service)",
                  ],
                },
                {
                  icon: <Shield className="w-10 h-10 text-[#FF7F50]" />,
                  title: "Sécurité réseau",
                  description:
                    "Protection de votre réseau sans fil contre les accès non autorisés et les cybermenaces.",
                  features: [
                    "Chiffrement WPA3",
                    "Segmentation VLAN",
                    "Détection d'intrusion",
                    "Filtrage MAC",
                  ],
                },
                {
                  icon: <Server className="w-10 h-10 text-[#FF7F50]" />,
                  title: "Infrastructure réseau",
                  description:
                    "Mise en place de l'infrastructure nécessaire pour supporter vos solutions Wi-Fi et Internet.",
                  features: [
                    "Câblage structuré",
                    "Switches PoE",
                    "Routeurs",
                    "Pare-feu",
                  ],
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#FF7F50] overflow-hidden"
                >
                  <div className="p-8">
                    <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6 bg-[#FF7F50]/10 rounded-full">
                      {service.icon}
                      <span className="absolute w-full h-full rounded-full animate-ping bg-[#FF7F50]/30 opacity-75"></span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-700"
                        >
                          <span className="mr-2 text-[#FF7F50]">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expertise Section */}
          <motion.div variants={itemVariants} className="mb-24">
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-10 lg:p-12 flex flex-col justify-center">
                  <div className="inline-block px-4 py-1 bg-[#FF7F50]/10 rounded-full text-[#FF7F50] font-medium text-sm mb-6">
                    Notre Expertise
                  </div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">
                    Une approche méthodique pour des résultats optimaux
                  </h2>
                  <div className="w-20 h-1 bg-[#FF7F50] mb-6"></div>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-[#FF7F50]/20 flex items-center justify-center">
                          <span className="text-[#FF7F50] font-semibold">
                            1
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold mb-1">
                          Audit & Analyse
                        </h3>
                        <p className="text-gray-700">
                          Évaluation complète de vos besoins et de votre
                          environnement pour identifier les contraintes et
                          opportunités.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-[#FF7F50]/20 flex items-center justify-center">
                          <span className="text-[#FF7F50] font-semibold">
                            2
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold mb-1">
                          Conception sur mesure
                        </h3>
                        <p className="text-gray-700">
                          Élaboration d&apos;une solution adaptée à vos besoins
                          spécifiques, avec sélection des équipements
                          appropriés.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-[#FF7F50]/20 flex items-center justify-center">
                          <span className="text-[#FF7F50] font-semibold">
                            3
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold mb-1">
                          Déploiement professionnel
                        </h3>
                        <p className="text-gray-700">
                          Installation et configuration par nos techniciens
                          certifiés, avec tests approfondis pour garantir les
                          performances.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-[#FF7F50]/20 flex items-center justify-center">
                          <span className="text-[#FF7F50] font-semibold">
                            4
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold mb-1">
                          Suivi & Maintenance
                        </h3>
                        <p className="text-gray-700">
                          Support technique continu, surveillance proactive et
                          optimisation régulière pour maintenir les
                          performances.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF7F50]/20 to-transparent opacity-70 z-10"></div>
                  <Image
                    src="/services/wifi-trans.jpg"
                    alt="Schéma de couverture Wi-Fi dans un bâtiment"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-8 left-8 z-20 bg-white/90 p-4 rounded-lg shadow-lg max-w-xs">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Analyse de couverture Wi-Fi
                    </h4>
                    <p className="text-sm text-gray-700">
                      Nos outils d&apos;analyse avancés permettent
                      d&apos;optimiser le positionnement des points d&apos;accès
                      pour une couverture maximale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div variants={itemVariants} className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Pourquoi Choisir L2BS pour vos Solutions Wi-Fi & Internet ?
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Des avantages concrets pour votre entreprise
              </p>
              <div className="w-20 h-1 bg-[#FF7F50] mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8 text-[#FF7F50]" />,
                  title: "Performance optimale",
                  description:
                    "Des solutions haute performance pour répondre aux besoins de bande passante les plus exigeants.",
                },
                {
                  icon: <Shield className="w-8 h-8 text-[#FF7F50]" />,
                  title: "Sécurité renforcée",
                  description:
                    "Protection avancée contre les accès non autorisés et les cybermenaces.",
                },
                {
                  icon: <BarChart3 className="w-8 h-8 text-[#FF7F50]" />,
                  title: "Évolutivité garantie",
                  description:
                    "Des solutions qui évoluent avec votre entreprise et s'adaptent à vos besoins futurs.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#FF7F50]"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-[#FF7F50]/10 p-3 rounded-full mr-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-700">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-gray-50 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Expertise technique approfondie
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Techniciens certifiés dans les technologies Wi-Fi les plus récentes",
                      "Expérience éprouvée dans des environnements variés et complexes",
                      "Veille technologique constante pour vous proposer les meilleures solutions",
                      "Approche personnalisée adaptée à votre infrastructure et vos besoins spécifiques",
                      "Support technique réactif et maintenance proactive",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-[#FF7F50] mt-1 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Case Study Section */}
          <motion.div variants={itemVariants} className="mb-24">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden text-white">
              <div className="p-10 lg:p-12">
                <div className="inline-block px-4 py-1 bg-[#FF7F50]/20 rounded-full text-[#FF7F50] font-medium text-sm mb-6">
                  Cas client
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  Déploiement Wi-Fi pour un campus d&apos;entreprise
                </h2>
                <div className="w-20 h-1 bg-[#FF7F50] mb-6"></div>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Le défi</h3>
                    <p className="text-gray-300">
                      Un campus d&apos;entreprise de 5000m² avec des besoins de
                      connectivité pour 300+ employés et de nombreux visiteurs.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Notre solution
                    </h3>
                    <p className="text-gray-300">
                      Déploiement d&apos;un réseau Wi-Fi 6 maillé avec 45 points
                      d&apos;accès et segmentation VLAN pour séparer les
                      réseaux.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Les résultats
                    </h3>
                    <p className="text-gray-300">
                      Couverture à 100%, augmentation de 70% des performances et
                      réduction de 30% des incidents réseau.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    href="/quote"
                    className="inline-flex items-center px-6 py-3 bg-[#FF7F50] text-white rounded-md font-medium transition-all hover:bg-[#FF7F50]/90 hover:shadow-lg"
                  >
                    Discuter de votre projet
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg p-10 lg:p-16">
              <h2 className="text-3xl font-bold mb-6">
                Prêt à améliorer votre connectivité ?
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                Contactez-nous dès aujourd&apos;hui pour une consultation
                gratuite sur vos besoins en Wi-Fi et Internet. Nos experts vous
                aideront à concevoir la solution idéale pour votre entreprise.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center px-8 py-4 bg-[#FF7F50] text-white rounded-md font-medium transition-all hover:bg-[#FF7F50]/90 hover:shadow-lg"
                >
                  Demander un devis
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white border border-gray-300 text-gray-700 rounded-md font-medium transition-all hover:bg-gray-50 hover:shadow-md"
                >
                  Nous contacter
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
}
