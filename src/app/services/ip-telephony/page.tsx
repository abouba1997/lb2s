"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  MessageSquare,
  Video,
  Headphones,
  Globe,
  Server,
  Users,
  BarChart,
  Shield,
  Clock,
} from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function IPTelephonyPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Téléphonie IP & VoIP" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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

  return (
    <div className="w-full h-full bg-white/90">
      {/* Hero Section */}
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
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="flex flex-col justify-center items-start space-y-8"
              >
                <motion.div variants={fadeIn}>
                  <Breadcrumb items={breadcrumbItems} />
                </motion.div>
                <motion.h1
                  variants={fadeIn}
                  className="text-2xl sm:text-[32px] lg:text-[42px] text-[#121820] leading-[140%] font-bold"
                >
                  Téléphonie IP & VoIP
                </motion.h1>
                <motion.p
                  variants={fadeIn}
                  className="text-lg max-w-xl text-gray-700"
                >
                  Des solutions de communication modernes et évolutives pour
                  connecter efficacement vos équipes
                </motion.p>
              </motion.div>
              <div className="relative !z-30 sm:flex hidden">
                <Image
                  src="/images/bg-lb2s-abricot.svg"
                  alt="accent graphic"
                  className="w-full h-full max-h-[140px] max-w-[220px] object-cover object-center flex !z-20 rotate-90"
                  width={220}
                  height={140}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full text-gray-800">
        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="xl:max-w-[1420px] px-8 xl:w-full mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 relative">
                <span className="relative z-10">
                  Communication d&apos;entreprise nouvelle génération
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#FF7F50]"></span>
                </span>
              </h2>
              <p className="text-lg mb-6 text-gray-700">
                Chez L2BS Technology Corp, nous concevons, installons et
                maintenons des solutions de téléphonie IP qui transforment la
                façon dont votre entreprise communique.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                Nos systèmes VoIP offrent une flexibilité inégalée, des
                fonctionnalités avancées et des économies substantielles par
                rapport aux systèmes téléphoniques traditionnels.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="bg-[#FF7F50] hover:bg-[#FF7F50]/90 text-white px-6 py-3 rounded-md font-medium transition-all transform hover:scale-105 hover:shadow-lg"
                >
                  Demander un devis
                </Link>
                <Link
                  href="#services"
                  className="border-2 border-[#FF7F50] text-[#FF7F50] hover:bg-[#FF7F50]/10 px-6 py-3 rounded-md font-medium transition-all"
                >
                  Découvrir nos services
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FF7F50]/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FF7F50]/10 rounded-full"></div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src="/services/telephonie-ip.jpg"
                  alt="Système de téléphonie IP moderne"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Services Section */}
          <motion.div
            id="services"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 inline-block relative">
                <span className="relative z-10">
                  Nos Services de Téléphonie IP
                  <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-[#FF7F50]"></span>
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Des solutions complètes pour répondre à tous vos besoins de
                communication d&apos;entreprise
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Phone className="w-8 h-8 text-[#FF7F50]" />,
                  title: "Centraux téléphoniques IP (IPBX)",
                  description:
                    "Installation et configuration de centraux téléphoniques IP pour une gestion efficace des appels.",
                  features: [
                    "Gestion des appels entrants et sortants",
                    "Transfert et mise en attente",
                    "Messagerie vocale avancée",
                    "Routage intelligent des appels",
                  ],
                },
                {
                  icon: <MessageSquare className="w-8 h-8 text-[#FF7F50]" />,
                  title: "Communications Unifiées",
                  description:
                    "Intégration de la voix, de la messagerie instantanée et de la présence pour une collaboration optimale.",
                  features: [
                    "Messagerie instantanée d'entreprise",
                    "Indicateurs de présence",
                    "Partage de documents",
                    "Intégration avec vos outils métier",
                  ],
                },
                {
                  icon: <Video className="w-8 h-8 text-[#FF7F50]" />,
                  title: "Visioconférence HD",
                  description:
                    "Solutions de visioconférence HD intégrées à votre système de téléphonie IP.",
                  features: [
                    "Conférences audio et vidéo HD",
                    "Partage d'écran",
                    "Salles virtuelles",
                    "Enregistrement des réunions",
                  ],
                },
                {
                  icon: <Headphones className="w-8 h-8 text-[#FF7F50]" />,
                  title: "Centres d'appels IP",
                  description:
                    "Solutions complètes pour centres d'appels avec fonctionnalités avancées de gestion et de reporting.",
                  features: [
                    "Distribution automatique des appels",
                    "Supervision en temps réel",
                    "Enregistrement des conversations",
                    "Statistiques et rapports détaillés",
                  ],
                },
                {
                  icon: <Globe className="w-8 h-8 text-[#FF7F50]" />,
                  title: "Téléphonie Cloud",
                  description:
                    "Solutions de téléphonie hébergées dans le cloud pour une flexibilité et une mobilité maximales.",
                  features: [
                    "Aucun investissement matériel lourd",
                    "Mise à jour automatique",
                    "Accessibilité depuis n'importe où",
                    "Haute disponibilité garantie",
                  ],
                },
                {
                  icon: <Server className="w-8 h-8 text-[#FF7F50]" />,
                  title: "SIP Trunking",
                  description:
                    "Connexion de votre IPBX au réseau téléphonique public via Internet pour réduire vos coûts.",
                  features: [
                    "Réduction des coûts de communication",
                    "Flexibilité des canaux de communication",
                    "Numéros virtuels internationaux",
                    "Qualité de service garantie",
                  ],
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  className="bg-white rounded-lg p-6 shadow-md border-t-4 border-[#FF7F50] hover:border-t-6 transition-all duration-300"
                >
                  <div className="relative mb-6">
                    <div className="absolute -top-3 -left-3">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-[#FF7F50]/20 animate-ping opacity-75"></div>
                        <div className="relative bg-[#FF7F50]/10 p-4 rounded-full">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 pl-14">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#FF7F50] mr-2 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 inline-block relative">
                <span className="relative z-10">
                  Avantages de nos Solutions de Téléphonie IP
                  <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-[#FF7F50]"></span>
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Pourquoi de plus en plus d&apos;entreprises adoptent la
                téléphonie IP
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart className="w-8 h-8 text-[#FF7F50]" />,
                  title: "Réduction des coûts",
                  description:
                    "Économisez jusqu'à 60% sur vos factures de téléphonie grâce à des tarifs d'appel réduits et l'absence de lignes physiques.",
                },
                {
                  icon: <Users className="w-8 h-8 text-[#FF7F50]" />,
                  title: "Mobilité et flexibilité",
                  description:
                    "Travaillez de n'importe où avec le même numéro et les mêmes fonctionnalités qu'au bureau.",
                },
                {
                  icon: <Server className="w-8 h-8 text-[#FF7F50]" />,
                  title: "Évolutivité",
                  description:
                    "Ajoutez facilement de nouveaux utilisateurs et fonctionnalités sans matériel supplémentaire coûteux.",
                },
                {
                  icon: <MessageSquare className="w-8 h-8 text-[#FF7F50]" />,
                  title: "Fonctionnalités avancées",
                  description:
                    "Accédez à des fonctionnalités professionnelles qui améliorent la productivité et l'expérience client.",
                },
                {
                  icon: <Shield className="w-8 h-8 text-[#FF7F50]" />,
                  title: "Fiabilité et sécurité",
                  description:
                    "Profitez d'une haute disponibilité et de communications sécurisées avec chiffrement.",
                },
                {
                  icon: <Clock className="w-8 h-8 text-[#FF7F50]" />,
                  title: "Intégration simplifiée",
                  description:
                    "Connectez votre téléphonie à vos applications métier (CRM, ERP) pour un flux de travail optimisé.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#FF7F50]"
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
          </motion.div>

          {/* Cost Comparison */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 inline-block relative">
                <span className="relative z-10">
                  Comparaison des coûts
                  <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-[#FF7F50]"></span>
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Téléphonie traditionnelle vs. Téléphonie IP
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left bg-gray-100 border"></th>
                    <th className="p-4 text-center bg-gray-100 border">
                      Téléphonie Traditionnelle
                    </th>
                    <th className="p-4 text-center bg-[#FF7F50]/10 border">
                      Téléphonie IP
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border font-medium">Coût initial</td>
                    <td className="p-4 border text-center">
                      Élevé (matériel propriétaire)
                    </td>
                    <td className="p-4 border text-center bg-[#FF7F50]/5">
                      Modéré à faible
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">Coût mensuel</td>
                    <td className="p-4 border text-center">
                      Élevé (lignes physiques)
                    </td>
                    <td className="p-4 border text-center bg-[#FF7F50]/5">
                      Faible (forfaits SIP)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">
                      Appels internationaux
                    </td>
                    <td className="p-4 border text-center">Très coûteux</td>
                    <td className="p-4 border text-center bg-[#FF7F50]/5">
                      Économiques
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">
                      Appels inter-sites
                    </td>
                    <td className="p-4 border text-center">
                      Facturés comme des appels externes
                    </td>
                    <td className="p-4 border text-center bg-[#FF7F50]/5">
                      Gratuits
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">
                      Coût de maintenance
                    </td>
                    <td className="p-4 border text-center">Élevé</td>
                    <td className="p-4 border text-center bg-[#FF7F50]/5">
                      Faible
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border font-medium">Évolutivité</td>
                    <td className="p-4 border text-center">
                      Coûteuse et complexe
                    </td>
                    <td className="p-4 border text-center bg-[#FF7F50]/5">
                      Simple et économique
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-[#FF7F50]/20 to-[#FF7F50]/5 rounded-2xl p-8 lg:p-12 mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Prêt à moderniser votre système de communication ?
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                Contactez-nous dès aujourd&apos;hui pour une consultation
                gratuite et découvrez comment la téléphonie IP peut transformer
                votre entreprise.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/quote"
                  className="bg-[#FF7F50] hover:bg-[#FF7F50]/90 text-white px-8 py-4 rounded-md font-medium transition-all transform hover:scale-105 hover:shadow-lg"
                >
                  Demander un devis gratuit
                </Link>
                <Link
                  href="/contact"
                  className="bg-white border-2 border-[#FF7F50] text-[#FF7F50] hover:bg-[#FF7F50]/10 px-8 py-4 rounded-md font-medium transition-all"
                >
                  Nous contacter
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/80 p-5 rounded-lg shadow-sm text-center">
                <Phone className="w-8 h-8 text-[#FF7F50] mx-auto mb-3" />
                <p className="font-medium">+223 79 49 31 58</p>
              </div>
              <div className="bg-white/80 p-5 rounded-lg shadow-sm text-center">
                <MessageSquare className="w-8 h-8 text-[#FF7F50] mx-auto mb-3" />
                <p className="font-medium">contact@lb2stech.com</p>
              </div>
              <div className="bg-white/80 p-5 rounded-lg shadow-sm text-center">
                <Clock className="w-8 h-8 text-[#FF7F50] mx-auto mb-3" />
                <p className="font-medium">Lun-Ven: 8h-18h</p>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 inline-block relative">
                <span className="relative z-10">
                  Questions fréquentes
                  <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-[#FF7F50]"></span>
                </span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Tout ce que vous devez savoir sur la téléphonie IP
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "Qu'est-ce que la téléphonie IP ?",
                  answer:
                    "La téléphonie IP (ou VoIP) est une technologie qui permet de passer des appels téléphoniques via Internet plutôt que par les lignes téléphoniques traditionnelles. Elle convertit la voix en données numériques qui sont transmises sur le réseau IP.",
                },
                {
                  question:
                    "Quels sont les avantages de la téléphonie IP par rapport à la téléphonie traditionnelle ?",
                  answer:
                    "Les principaux avantages sont la réduction des coûts, la flexibilité, la mobilité, l'intégration avec d'autres applications, et l'accès à des fonctionnalités avancées comme la visioconférence et la messagerie unifiée.",
                },
                {
                  question:
                    "Quelle qualité de son puis-je attendre d'un système VoIP ?",
                  answer:
                    "Avec une connexion Internet stable et suffisamment rapide, la qualité sonore d'un système VoIP moderne est généralement équivalente ou supérieure à celle d'une ligne téléphonique traditionnelle.",
                },
                {
                  question:
                    "Puis-je conserver mes numéros de téléphone actuels ?",
                  answer:
                    "Oui, dans la plupart des cas, vous pouvez conserver vos numéros de téléphone existants grâce à la portabilité des numéros lorsque vous passez à un système de téléphonie IP.",
                },
                {
                  question:
                    "Quelle connexion Internet est nécessaire pour la téléphonie IP ?",
                  answer:
                    "Pour une qualité optimale, nous recommandons une connexion Internet fiable avec au moins 100 kbps par ligne téléphonique. La stabilité de la connexion est plus importante que sa vitesse.",
                },
                {
                  question:
                    "La téléphonie IP fonctionne-t-elle en cas de coupure d'électricité ?",
                  answer:
                    "Sans alimentation électrique, les téléphones IP standard ne fonctionnent pas. Cependant, nous proposons des solutions de secours comme des UPS ou des options de redondance pour maintenir le service en cas de panne.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#FF7F50]"
                >
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
}
