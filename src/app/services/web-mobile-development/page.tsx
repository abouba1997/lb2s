"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code,
  Database,
  Cloud,
  Cog,
  Users,
  Shield,
  Zap,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Star,
  Monitor,
  Layers,
  Server,
  Settings,
  Layout,
  PenTool,
} from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { useMobile } from "@/hooks/use-mobile";

export default function WebMobileDevelopmentPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Développement Web et Mobile" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div className="w-full h-full bg-white">
      {/* Hero Section */}
      <div className="w-full relative min-[998px]:h-[550px] min-[998px]:pt-[220px] pb-[90px] pt-[190px] flex items-center">
        <div className="w-full !z-20">
          <Header />
          <div className="absolute bg-map-other bg-cover bg-no-repeat bg-center !z-[-1] w-full h-full inset-0">
            {isLoaded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-[#FF7F50]/20 to-transparent"
              />
            )}
          </div>
          <div className="flex w-full min-h-full items-center justify-between relative bg-transparent">
            <div className="xl:max-w-[1420px] px-8 xl:w-full flex justify-between items-center mx-auto w-full">
              <div className="flex flex-col justify-center items-start space-y-8">
                <Breadcrumb items={breadcrumbItems} />
                {isLoaded && (
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-2xl sm:text-[32px] lg:text-[42px] text-[#121820] leading-[140%] font-bold"
                  >
                    Développement Web et Mobile
                  </motion.h1>
                )}
                {isLoaded && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-lg text-gray-700 max-w-xl"
                  >
                    Des solutions digitales innovantes et performantes pour
                    propulser votre entreprise vers le succès
                  </motion.p>
                )}
                {isLoaded && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex flex-wrap gap-4 mt-6"
                  >
                    <Link
                      href="/quote"
                      className="bg-[#FF7F50] hover:bg-[#FF7F50]/90 text-white px-6 py-3 rounded-md font-medium transition-all transform hover:scale-105 flex items-center gap-2"
                    >
                      Demander un devis <ChevronRight size={16} />
                    </Link>
                    <Link
                      href="#services"
                      className="border border-[#FF7F50] text-[#FF7F50] hover:bg-[#FF7F50]/10 px-6 py-3 rounded-md font-medium transition-all"
                    >
                      Découvrir nos services
                    </Link>
                  </motion.div>
                )}
              </div>
              <div className="relative !z-30 sm:flex hidden">
                {isLoaded && (
                  <motion.div
                    initial={{ opacity: 0, rotate: 0 }}
                    animate={{ opacity: 1, rotate: 90 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                  >
                    <Image
                      src="/images/bg-lb2s-abricot.svg"
                      alt="Développement Web et Mobile"
                      className="w-full h-full max-h-[140px] max-w-[220px] object-cover object-center flex !z-20"
                      width={220}
                      height={140}
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full text-default-text">
        {/* Introduction Section */}
        {isLoaded && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="py-16 sm:py-10 xl:max-w-[1420px] px-8 xl:w-full mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  variants={fadeIn}
                  custom={1}
                  className="relative rounded-lg overflow-hidden shadow-xl"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FF7F50]/20 to-transparent z-10"></div>
                  <Image
                    src="/services/web-dev.avif"
                    alt="Développement Web et Mobile"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>
              </div>
              <div>
                <motion.span
                  variants={fadeIn}
                  custom={2}
                  className="inline-block px-4 py-1 rounded-full bg-[#FF7F50]/10 text-[#FF7F50] font-medium text-sm mb-4"
                >
                  L2BS Technology Corp
                </motion.span>
                <motion.h2
                  variants={fadeIn}
                  custom={3}
                  className="text-3xl font-bold mb-6 relative"
                >
                  Experts en développement digital
                  <span className="absolute -bottom-2 left-0 w-20 h-1 bg-[#FF7F50]"></span>
                </motion.h2>
                <motion.p
                  variants={fadeIn}
                  custom={4}
                  className="text-gray-700 mb-6"
                >
                  Chez L2BS Technology Corp, nous concevons et développons des
                  solutions digitales sur mesure qui répondent parfaitement à
                  vos besoins spécifiques. Notre équipe d&apos;experts combine
                  créativité, expertise technique et connaissance approfondie
                  des dernières tendances pour créer des expériences digitales
                  exceptionnelles.
                </motion.p>
                <motion.p
                  variants={fadeIn}
                  custom={5}
                  className="text-gray-700 mb-8"
                >
                  Que vous ayez besoin d&apos;un site web vitrine, d&apos;une
                  application mobile innovante ou d&apos;une plateforme
                  e-commerce complète, nous vous accompagnons à chaque étape du
                  processus, de la conception à la mise en ligne.
                </motion.p>
                <motion.div
                  variants={fadeIn}
                  custom={6}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle size={20} className="text-[#FF7F50]" />
                    <span>Solutions sur mesure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={20} className="text-[#FF7F50]" />
                    <span>Technologies modernes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={20} className="text-[#FF7F50]" />
                    <span>Expertise technique</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Services Section */}
        {isLoaded && (
          <motion.section
            id="services"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="py-16 sm:py-10 xl:max-w-[1420px] px-8 xl:w-full mx-auto bg-gray-50"
          >
            <motion.div
              variants={fadeIn}
              custom={0}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#FF7F50]/10 text-[#FF7F50] font-medium text-sm mb-4">
                Nos Services
              </span>
              <h2 className="text-3xl font-bold mb-4">
                Solutions de Développement Complètes
              </h2>
              <div className="w-20 h-1 bg-[#FF7F50] mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-gray-700">
                Nous proposons une gamme complète de services de développement
                web et mobile pour répondre à tous vos besoins digitaux.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Globe className="w-12 h-12 text-[#FF7F50] mb-4" />}
                title="Sites Web Responsifs"
                description="Création de sites web modernes et adaptés à tous les appareils, offrant une expérience utilisateur optimale sur desktop, tablette et mobile."
                features={[
                  "Design moderne et personnalisé",
                  "Optimisation pour les moteurs de recherche",
                  "Expérience utilisateur intuitive",
                  "Compatibilité multi-navigateurs",
                ]}
              />
              <ServiceCard
                icon={<Smartphone className="w-12 h-12 text-[#FF7F50] mb-4" />}
                title="Applications Mobiles"
                description="Développement d'applications natives (iOS et Android) et hybrides, permettant une présence multiplateforme efficace et performante."
                features={[
                  "Applications iOS et Android",
                  "Interfaces utilisateur intuitives",
                  "Fonctionnalités personnalisées",
                  "Maintenance et mises à jour",
                ]}
              />
              <ServiceCard
                icon={<Code className="w-12 h-12 text-[#FF7F50] mb-4" />}
                title="Solutions Web Personnalisées"
                description="Création d'applications web sur mesure pour répondre à vos besoins spécifiques, de l'intranet d'entreprise aux plateformes e-commerce complexes."
                features={[
                  "Applications web sur mesure",
                  "Plateformes e-commerce",
                  "Intranets et extranets",
                  "Systèmes de gestion de contenu",
                ]}
              />
              <ServiceCard
                icon={<Layout className="w-12 h-12 text-[#FF7F50] mb-4" />}
                title="E-commerce"
                description="Développement de boutiques en ligne performantes et sécurisées, avec des fonctionnalités avancées pour optimiser vos ventes."
                features={[
                  "Boutiques en ligne personnalisées",
                  "Intégration de passerelles de paiement",
                  "Gestion des stocks et commandes",
                  "Expérience d'achat optimisée",
                ]}
              />
              <ServiceCard
                icon={<PenTool className="w-12 h-12 text-[#FF7F50] mb-4" />}
                title="UX/UI Design"
                description="Conception d'interfaces utilisateur intuitives et esthétiques, centrées sur l'expérience utilisateur pour maximiser l'engagement."
                features={[
                  "Design centré utilisateur",
                  "Prototypage et wireframing",
                  "Tests d'utilisabilité",
                  "Identité visuelle cohérente",
                ]}
              />
              <ServiceCard
                icon={<Settings className="w-12 h-12 text-[#FF7F50] mb-4" />}
                title="Maintenance & Support"
                description="Services de maintenance continue et support technique pour assurer le bon fonctionnement et l'évolution de vos solutions digitales."
                features={[
                  "Maintenance préventive",
                  "Support technique réactif",
                  "Mises à jour régulières",
                  "Monitoring des performances",
                ]}
              />
            </div>
          </motion.section>
        )}

        {/* Technical Expertise Section */}
        {isLoaded && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="py-16 sm:py-10 xl:max-w-[1420px] px-8 xl:w-full mx-auto"
          >
            <motion.div
              variants={fadeIn}
              custom={0}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#FF7F50]/10 text-[#FF7F50] font-medium text-sm mb-4">
                Notre Expertise
              </span>
              <h2 className="text-3xl font-bold mb-4">
                Technologies & Compétences
              </h2>
              <div className="w-20 h-1 bg-[#FF7F50] mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-gray-700">
                Nous maîtrisons les technologies les plus récentes pour
                développer des solutions performantes et évolutives.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TechExpertiseCard
                icon={<Database className="w-8 h-8 text-[#FF7F50] mb-2" />}
                title="Bases de Données"
                technologies={["MySQL", "PostgreSQL", "MongoDB", "Redis"]}
              />
              <TechExpertiseCard
                icon={<Cloud className="w-8 h-8 text-[#FF7F50] mb-2" />}
                title="Cloud & DevOps"
                technologies={[
                  "AWS",
                  "Google Cloud",
                  "Azure",
                  "Docker",
                  "Kubernetes",
                ]}
              />
              <TechExpertiseCard
                icon={<Cog className="w-8 h-8 text-[#FF7F50] mb-2" />}
                title="Frameworks"
                technologies={[
                  "React",
                  "Vue.js",
                  "Angular",
                  "Node.js",
                  "Laravel",
                  "Django",
                ]}
              />
              <TechExpertiseCard
                icon={<Monitor className="w-8 h-8 text-[#FF7F50] mb-2" />}
                title="Frontend"
                technologies={[
                  "HTML5/CSS3",
                  "JavaScript/TypeScript",
                  "SASS/LESS",
                  "Tailwind CSS",
                  "Bootstrap",
                ]}
              />
              <TechExpertiseCard
                icon={<Server className="w-8 h-8 text-[#FF7F50] mb-2" />}
                title="Backend"
                technologies={[
                  "PHP",
                  "Python",
                  "Node.js",
                  "Java",
                  "Ruby",
                  ".NET",
                ]}
              />
              <TechExpertiseCard
                icon={<Smartphone className="w-8 h-8 text-[#FF7F50] mb-2" />}
                title="Mobile"
                technologies={[
                  "React Native",
                  "Flutter",
                  "Swift",
                  "Kotlin",
                  "Ionic",
                ]}
              />
            </div>
          </motion.section>
        )}

        {/* Development Process Section */}
        {isLoaded && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="py-16 sm:py-10 xl:max-w-[1420px] px-8 xl:w-full bg-gray-50"
          >
            <motion.div
              variants={fadeIn}
              custom={0}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#FF7F50]/10 text-[#FF7F50] font-medium text-sm mb-4">
                Notre Méthodologie
              </span>
              <h2 className="text-3xl font-bold mb-4">
                Processus de Développement
              </h2>
              <div className="w-20 h-1 bg-[#FF7F50] mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-gray-700">
                Notre approche méthodique garantit des projets livrés dans les
                délais, respectant le budget et répondant parfaitement à vos
                attentes.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

              <div className="space-y-12">
                <ProcessStep
                  number="01"
                  title="Analyse des Besoins"
                  description="Compréhension approfondie de vos objectifs et exigences pour définir clairement le périmètre du projet."
                  isLeft={true}
                />
                <ProcessStep
                  number="02"
                  title="Conception UX/UI"
                  description="Création de maquettes et prototypes interactifs pour visualiser l'interface et l'expérience utilisateur."
                  isLeft={false}
                />
                <ProcessStep
                  number="03"
                  title="Développement Agile"
                  description="Cycles de développement itératifs avec feedback continu pour s'adapter rapidement aux changements."
                  isLeft={true}
                />
                <ProcessStep
                  number="04"
                  title="Tests Rigoureux"
                  description="Assurance qualité à chaque étape du développement pour garantir un produit final sans faille."
                  isLeft={false}
                />
                <ProcessStep
                  number="05"
                  title="Déploiement"
                  description="Mise en production sécurisée et optimisée pour assurer un lancement réussi."
                  isLeft={true}
                />
                <ProcessStep
                  number="06"
                  title="Maintenance & Support"
                  description="Suivi post-lancement et évolutions continues pour maintenir et améliorer votre solution."
                  isLeft={false}
                />
              </div>
            </div>
          </motion.section>
        )}

        {/* Why Choose Us Section */}
        {isLoaded && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="py-16 sm:py-10 xl:max-w-[1420px] px-8 xl:w-full mx-auto"
          >
            <motion.div
              variants={fadeIn}
              custom={0}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#FF7F50]/10 text-[#FF7F50] font-medium text-sm mb-4">
                Nos Atouts
              </span>
              <h2 className="text-3xl font-bold mb-4">
                Pourquoi Choisir L2BS pour votre Projet ?
              </h2>
              <div className="w-20 h-1 bg-[#FF7F50] mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-gray-700">
                Découvrez ce qui fait de nous le partenaire idéal pour
                concrétiser vos projets digitaux.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Users className="w-10 h-10 text-[#FF7F50] mb-4" />}
                title="Équipe Expérimentée"
                description="Des développeurs seniors avec une expertise dans divers domaines technologiques pour répondre à tous vos besoins."
              />
              <FeatureCard
                icon={<Shield className="w-10 h-10 text-[#FF7F50] mb-4" />}
                title="Sécurité Renforcée"
                description="Implémentation des meilleures pratiques de sécurité pour protéger vos données et vos utilisateurs contre les menaces."
              />
              <FeatureCard
                icon={<Zap className="w-10 h-10 text-[#FF7F50] mb-4" />}
                title="Performance Optimisée"
                description="Solutions conçues pour être rapides, réactives et capables de gérer de fortes charges pour une expérience utilisateur fluide."
              />
              <FeatureCard
                icon={<Layers className="w-10 h-10 text-[#FF7F50] mb-4" />}
                title="Solutions Évolutives"
                description="Architectures flexibles permettant d'adapter facilement votre solution à la croissance de votre entreprise."
              />
              <FeatureCard
                icon={<Star className="w-10 h-10 text-[#FF7F50] mb-4" />}
                title="Qualité Premium"
                description="Attention méticuleuse aux détails et processus rigoureux pour garantir des produits de la plus haute qualité."
              />
              <FeatureCard
                icon={<ArrowRight className="w-10 h-10 text-[#FF7F50] mb-4" />}
                title="Accompagnement Complet"
                description="Support continu de la conception au déploiement, avec formation et assistance pour maximiser votre investissement."
              />
            </div>
          </motion.section>
        )}

        {/* CTA Section */}
        {isLoaded && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="py-20 sm:py-10 xl:max-w-[1420px] sm:mb-20 mb-10 px-8 xl:w-full mx-auto bg-gradient-to-r from-[#FF7F50] to-[#FF9F70] rounded-xl text-white"
          >
            <div className="text-center">
              <motion.h2
                variants={fadeIn}
                custom={1}
                className="text-3xl font-bold mb-6"
              >
                Prêt à concrétiser votre projet numérique ?
              </motion.h2>
              <motion.p
                variants={fadeIn}
                custom={2}
                className="text-xl mb-8 max-w-3xl mx-auto"
              >
                Contactez-nous dès aujourd&apos;hui pour discuter de vos idées
                et obtenir un devis personnalisé.
              </motion.p>
              <motion.div
                variants={fadeIn}
                custom={3}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link
                  href="/quote"
                  className="bg-white text-[#FF7F50] hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  Demander un devis <ChevronRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-all"
                >
                  Nous contacter
                </Link>
              </motion.div>
            </div>
          </motion.section>
        )}
      </div>
      <Footer />
    </div>
  );
}

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#FF7F50] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="absolute -top-2 -left-2 w-16 h-16 bg-[#FF7F50]/10 rounded-full flex items-center justify-center">
          <motion.div
            animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
            transition={{
              duration: 1,
              repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
              repeatType: "loop",
            }}
          >
            {icon}
          </motion.div>
        </div>
        <div className="ml-16">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
        </div>
      </div>
      <ul className="space-y-2 mt-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle
              size={16}
              className="text-[#FF7F50] mt-1 mr-2 flex-shrink-0"
            />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

type TechExpertiseCardProps = {
  icon: React.ReactNode;
  title: string;
  technologies: string[];
};

function TechExpertiseCard({
  icon,
  title,
  technologies,
}: TechExpertiseCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF7F50] transition-all duration-300 hover:shadow-xl"
    >
      <div className="flex items-center mb-4">
        <div className="bg-[#FF7F50]/10 p-3 rounded-full mr-4">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {technologies.map((tech, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle
              size={16}
              className="text-[#FF7F50] mt-1 mr-2 flex-shrink-0"
            />
            <span className="text-gray-700">{tech}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
  isLeft: boolean;
};

function ProcessStep({ number, title, description, isLeft }: ProcessStepProps) {
  const isMobile = useMobile();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: isLeft ? -20 : 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
      }}
      className={`flex ${isMobile ? "flex-col" : isLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
    >
      <div
        className={`w-full md:w-1/2 ${isMobile ? "mb-4" : isLeft ? "md:pr-12" : "md:pl-12"} ${isLeft ? "text-right" : "text-left"}`}
      >
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2 justify-start">
          <span className="bg-[#FF7F50] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
            {number}
          </span>
          <span>{title}</span>
        </h3>
        <p className="text-gray-700">{description}</p>
      </div>

      {!isMobile && (
        <div className="relative flex items-center justify-center">
          <div className="w-4 h-4 bg-[#FF7F50] rounded-full z-10"></div>
        </div>
      )}

      <div
        className={`w-full md:w-1/2 ${isMobile ? "" : isLeft ? "md:pl-12" : "md:pr-12"}`}
      >
        {isMobile && <div className="h-8"></div>}
      </div>
    </motion.div>
  );
}

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
    >
      <div className="flex justify-center mb-4">
        <div className="bg-[#FF7F50]/10 p-4 rounded-full">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
}
