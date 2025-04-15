"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Star,
  Calendar,
  Building,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { caseStudies } from "@/lib/constants";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { useSwipeable } from "react-swipeable";

const CaseStudyPage = ({ params }: { params: { id: string } }) => {
  const studyId = Number.parseInt(params.id);
  const study = caseStudies.find((s) => s.id === studyId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = useCallback(() => {
    if (!study || !study.image || study.image.length === 0) return;
    setCurrentImageIndex((prev) =>
      prev === study.image.length - 1 ? 0 : prev + 1
    );
  }, [study]);

  const prevImage = () => {
    if (!study || !study.image || study.image.length === 0) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? study.image.length - 1 : prev - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    if (lightboxOpen) return; // Don't auto-rotate when lightbox is open

    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex, lightboxOpen, nextImage]);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-madison mb-4">
            Étude de cas non trouvée
          </h1>
          <p className="text-gray-600 mb-6">
            L&apos;étude de cas que vous recherchez n&apos;existe pas ou a été
            déplacée.
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center bg-abricot hover:bg-abricot/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Retour aux études de cas
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: study.title || `Projet pour ${study.client}` },
  ];

  return (
    <div className="w-full h-full bg-white/90">
      <div className="w-full relative min-[998px]:h-[550px] min-[998px]:pt-[220px] pb-[90px] pt-[190px] flex items-center">
        <div className="w-full !z-20">
          <Header />
          <div className="absolute bg-map-other bg-cover bg-no-repeat bg-center !z-[-1] w-full h-full inset-0"></div>
          <div className="flex w-full min-h-full items-center justify-between relative bg-transparent">
            <div className="xl:max-w-[1420px] px-8 xl:w-full flex justify-between items-center mx-auto w-full">
              <div className="flex flex-col justify-center items-start space-y-8">
                <Breadcrumb items={breadcrumbItems} />
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl sm:text-[32px] lg:text-[42px] text-[#121820] leading-[140%] space-y-5 font-bold"
                >
                  {study.title || `Projet pour ${study.client}`}
                </motion.h1>
              </div>
              <div className="relative !z-30 sm:flex hidden">
                <Image
                  src="/images/bg-lb2s-abricot.svg"
                  alt="ceo_words"
                  className="w-full h-full max-h-[140px] max-w-[220px] object-cover object-center flex !z-20 rotate-90"
                  width={220}
                  height={140}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full text-default-text">
        <section className="py-10 sm:py-16 xl:max-w-[1420px] px-8 xl:w-full  mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center text-madison hover:text-abricot transition-colors duration-300"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Retour aux études de cas
            </Link>
          </motion.div>

          {/* Project Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-madison to-madison/80 text-white p-8 rounded-2xl mb-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('/images/map-pattern.svg')]"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    {study.title || `Projet pour ${study.client}`}
                  </h1>
                  <p className="text-xl text-white/90 mb-4">{study.client}</p>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(study.clientSatisfaction)
                              ? "text-yellow-400 fill-yellow-400"
                              : i < study.clientSatisfaction
                                ? "text-yellow-400 fill-yellow-400 opacity-50"
                                : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-lg font-semibold">
                      {study.clientSatisfaction.toFixed(1)}/5
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-abricot" />
                    <span>{study.date || "2023"}</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                    <Building className="w-5 h-5 mr-2 text-abricot" />
                    <span>{study.client.split(" ")[0]}</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                    <Tag className="w-5 h-5 mr-2 text-abricot" />
                    <span>{study.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              {/* Image Gallery */}
              <div className="mb-12">
                <div
                  className="relative rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setLightboxOpen(true)}
                  {...handlers}
                >
                  <div className="aspect-[16/9] relative">
                    {study.image && study.image.length > 0 ? (
                      <Image
                        src={
                          study.image[currentImageIndex] || "/placeholder.svg"
                        }
                        alt={`${study.title || study.client} - Image ${currentImageIndex + 1}`}
                        width={1200}
                        height={800}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    ) : (
                      <Image
                        src="/placeholder.svg?height=800&width=1200"
                        alt={study.title || study.client}
                        width={1200}
                        height={800}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-lg font-medium">
                        Cliquez pour agrandir
                      </div>
                    </div>
                  </div>

                  {study.image && study.image.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-madison p-2 rounded-full shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100"
                        aria-label="Image précédente"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-madison p-2 rounded-full shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100"
                        aria-label="Image suivante"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail Gallery */}
                {study.image && study.image.length > 1 && (
                  <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                    {study.image.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative aspect-[16/9] w-32 rounded-md overflow-hidden transition-all duration-300 ${
                          currentImageIndex === index
                            ? "ring-2 ring-abricot"
                            : "opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`Thumbnail ${index + 1}`}
                          width={320}
                          height={180}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Content Sections */}
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-2xl font-semibold mb-4 text-madison flex items-center">
                    <span className="w-8 h-8 bg-abricot/10 rounded-full flex items-center justify-center mr-3 text-abricot">
                      1
                    </span>
                    Description du Projet
                  </h2>
                  <div className="pl-11">
                    <p className="text-gray-700">{study.description}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-gray-50 p-8 rounded-xl"
                >
                  <h2 className="text-2xl font-semibold mb-6 text-madison">
                    Témoignage Client
                  </h2>
                  <div className="relative">
                    <div className="absolute -top-4 -left-2 text-7xl text-abricot/10 font-serif">
                      &quot;
                    </div>
                    <p className="text-gray-700 italic relative z-10 text-lg">
                      {study.testimonial}
                    </p>
                    <div className="mt-6 flex items-center">
                      <div className="w-12 h-12 bg-madison/10 rounded-full flex items-center justify-center text-madison font-bold text-xl">
                        {study.client.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-madison">
                          {study.client}
                        </p>
                        <div className="flex mt-1">
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
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="bg-gray-50 p-6 rounded-xl sticky top-8">
                <h3 className="text-xl font-semibold mb-6 text-madison border-b border-gray-200 pb-4">
                  Détails du Projet
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Building className="w-5 h-5 text-abricot mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium text-gray-700 block">
                        Client
                      </span>
                      <span className="text-gray-600">{study.client}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Tag className="w-5 h-5 text-abricot mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium text-gray-700 block">
                        Catégorie
                      </span>
                      <span className="text-gray-600">{study.category}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="w-5 h-5 text-abricot mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium text-gray-700 block">
                        Date
                      </span>
                      <span className="text-gray-600">
                        {study.date || "2023"}
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-abricot mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium text-gray-700 block">
                        Satisfaction Client
                      </span>
                      <div className="flex items-center">
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
                        <span className="ml-2 text-gray-700">
                          {study.clientSatisfaction.toFixed(1)}/5
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 space-y-4">
                  <Link
                    href="/contact"
                    className="bg-abricot hover:bg-abricot/90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center w-full"
                  >
                    Discuter de votre projet
                  </Link>
                  <Link
                    href="/quote"
                    className="bg-madison hover:bg-madison/90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center w-full"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Related Projects */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-madison">
                Projets Similaires
              </h2>
              <div className="w-20 h-1 bg-abricot mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies
                .filter(
                  (s) => s.id !== study.id && s.category === study.category
                )
                .slice(0, 3)
                .map((relatedStudy, index) => (
                  <motion.div
                    key={relatedStudy.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-white rounded-xl shadow-md overflow-hidden group"
                  >
                    <div className="relative overflow-hidden h-48">
                      <Image
                        src={
                          relatedStudy.image && relatedStudy.image.length > 0
                            ? relatedStudy.image[0]
                            : "/placeholder.svg?height=400&width=600"
                        }
                        alt={relatedStudy.title || relatedStudy.client}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-madison">
                        {relatedStudy.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 text-madison group-hover:text-abricot transition-colors duration-300">
                        {relatedStudy.title ||
                          `Projet pour ${relatedStudy.client}`}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedStudy.description}
                      </p>
                      <Link
                        href={`/case-studies/${relatedStudy.id}`}
                        className="inline-flex items-center text-abricot hover:text-abricot/80 transition-colors duration-200 font-medium text-sm"
                      >
                        Voir le projet
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>

            {caseStudies.filter(
              (s) => s.id !== study.id && s.category === study.category
            ).length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-600">Aucun projet similaire trouvé.</p>
              </div>
            )}
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 bg-gradient-to-r from-madison to-madison/80 text-white py-16 px-6 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('/images/map-pattern.svg')]"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Prêt à Réaliser Votre Projet ?
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl mb-8 text-white/90 max-w-2xl mx-auto"
              >
                Découvrez comment L2BS Technology Corp peut transformer vos
                défis en opportunités avec des solutions technologiques sur
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
                  className="bg-abricot hover:bg-abricot/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
              onClick={() => setLightboxOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div
              className="relative w-full max-w-5xl max-h-[80vh]"
              {...handlers}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-w-16 aspect-h-9"
              >
                {study.image && study.image.length > 0 ? (
                  <Image
                    src={study.image[currentImageIndex] || "/placeholder.svg"}
                    alt={`${study.title || study.client} - Image ${currentImageIndex + 1}`}
                    width={1600}
                    height={1200}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src="/placeholder.svg?height=1200&width=1600"
                    alt={study.title || study.client}
                    width={1600}
                    height={1200}
                    className="w-full h-full object-contain"
                  />
                )}
              </motion.div>

              {study.image && study.image.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
                    aria-label="Image suivante"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                    {study.image.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          currentImageIndex === index
                            ? "bg-white scale-125"
                            : "bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Aller à l'image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default CaseStudyPage;
