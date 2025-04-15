"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, Filter, Search } from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/constants";

const CaseStudiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredStudies, setFilteredStudies] = useState(caseStudies);
  const [isLoaded, setIsLoaded] = useState(false);

  // Extract unique categories
  const categories = [
    "all",
    ...Array.from(new Set(caseStudies.map((study) => study.category))),
  ];

  useEffect(() => {
    // Filter studies based on category and search query
    const filtered = caseStudies.filter((study) => {
      const matchesCategory =
        selectedCategory === "all" || study.category === selectedCategory;
      const matchesSearch =
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.client.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    setFilteredStudies(filtered);
    setIsLoaded(true);
  }, [selectedCategory, searchQuery]);

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Études de cas" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="bg-white/90 w-full h-full">
      {/* Hero Section */}
      <div className="w-full relative min-[998px]:h-[550px] min-[998px]:pt-[220px] pb-[50px] pt-[110px] flex items-center">
        <div className="w-full !z-20">
          <Header />
          <div className="absolute bg-map-other bg-cover bg-no-repeat bg-center !z-[-1] w-full h-full inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/40"></div>
          </div>
          <div className="flex w-full min-h-full items-center justify-between relative bg-transparent">
            <div className="xl:max-w-[1420px] px-8 xl:w-full flex justify-between items-center mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center items-start space-y-8"
              >
                <Breadcrumb items={breadcrumbItems} />
                <h1 className="text-2xl sm:text-[32px] lg:text-[42px] text-[#121820] leading-[140%] font-bold">
                  Études de cas
                </h1>
                <p className="max-w-lg text-gray-600">
                  Nous sommes à votre disposition pour répondre à toutes vos
                  questions et vous accompagner dans vos projets technologiques.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 90 }}
                animate={{ opacity: 1, scale: 1, rotate: 90 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative !z-30 sm:flex hidden"
              >
                <Image
                  src="/images/bg-lb2s-abricot.svg"
                  alt="contact_decoration"
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
        <section className="py-10 sm:py-16 xl:max-w-[1420px] px-8 xl:w-full mx-auto">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-madison to-madison/80 text-white py-16 px-6 rounded-2xl mb-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Nos Réalisations
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl mb-8 text-white/90"
              >
                Découvrez comment L2BS Technology Corp transforme les défis en
                opportunités pour nos clients à travers l&apos;Afrique
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link
                  href="/contact"
                  className="bg-abricot hover:bg-abricot/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Discuter de votre projet
                </Link>
                <Link
                  href="/quote"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  Demander un devis
                </Link>
              </motion.div>
            </div>
          </motion.section>

          {/* Filter and Search Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-gray-50 p-6 rounded-xl">
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex items-center mr-2">
                  <Filter className="w-5 h-5 text-madison mr-2" />
                  <span className="font-medium text-madison">Filtrer par:</span>
                </div>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-abricot text-white shadow-md"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category === "all" ? "Tous" : category}
                  </button>
                ))}
              </div>
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full md:w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-abricot focus:border-transparent"
                />
              </div>
            </div>
          </motion.section>

          {/* Case Studies Grid */}
          <motion.section
            variants={container}
            initial="hidden"
            animate={isLoaded ? "show" : "hidden"}
            className="mb-16"
          >
            {filteredStudies.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">
                  Aucune étude de cas ne correspond à vos critères.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 text-abricot hover:text-abricot/80 font-medium"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredStudies.map((study) => (
                  <motion.div
                    key={study.id}
                    variants={item}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group"
                  >
                    <div className="relative overflow-hidden h-56">
                      <Image
                        src={
                          study.image[0] ||
                          "/placeholder.svg?height=400&width=600"
                        }
                        alt={study.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-madison">
                        {study.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold mb-3 text-madison group-hover:text-abricot transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow">
                        {study.description}
                      </p>
                      <div className="mt-auto">
                        <div className="flex items-center mb-4">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(study.clientSatisfaction)
                                    ? "text-yellow-400 fill-yellow-400"
                                    : i < study.clientSatisfaction
                                      ? "text-yellow-400 fill-yellow-400 opacity-50"
                                      : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-gray-700 ml-2">
                            {study.clientSatisfaction.toFixed(1)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {study.client}
                          </span>
                          <Link
                            href={`/case-studies/${study.id}`}
                            className="inline-flex items-center text-abricot hover:text-abricot/80 transition-colors duration-200 font-medium"
                          >
                            Voir le projet
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-r from-abricot to-abricot/80 text-white py-16 px-6 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Prêt à Transformer Votre Projet ?
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl mb-8 text-white/90 max-w-2xl mx-auto"
              >
                Découvrez comment L2BS Technology Corp peut vous aider à
                atteindre vos objectifs avec des solutions technologiques sur
                mesure
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link
                  href="/contact"
                  className="bg-white hover:bg-gray-50 text-abricot font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Contactez-nous
                </Link>
                <Link
                  href="/quote"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  Demander un devis
                </Link>
              </motion.div>
            </div>
          </motion.section>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
