import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/constants";

const CaseStudiesPage = () => {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Études de cas" },
  ];

  return (
    <div className="bg-white/90 w-full h-full">
      <div className="w-full relative min-[998px]:h-[550px] min-[998px]:pt-[220px] pb-[90px] pt-[190px] flex items-center">
        <div className="w-full !z-20">
          <Header />
          <div className="absolute bg-map-other bg-cover bg-no-repeat bg-center !z-[-1] w-full h-full inset-0"></div>
          <div className="flex w-full min-h-full items-center justify-between relative bg-transparent">
            <div className="xl:max-w-[1420px] px-8 xl:w-full flex justify-between items-center mx-auto w-full">
              <div className=" flex flex-col justify-center items-start space-y-8">
                <Breadcrumb items={breadcrumbItems} />
                <h1 className="text-2xl sm:text-[32px] lg:text-[42px] text-[#121820] leading-[140%] space-y-5 font-bold">
                  Études de cas
                </h1>
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

      {/* Hero Section */}
      <div className="bg-white w-full text-default-text">
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <section className="bg-madison text-white py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-4">Nos Études de Cas</h1>
              <p className="text-xl">
                Découvrez comment L2BS Technology Corp transforme les défis en
                opportunités
              </p>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study) => (
                  <div
                    key={study.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-madison">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{study.description}</p>
                      <div className="flex items-center mb-4">
                        <Star className="text-yellow-400 w-5 h-5 mr-1" />
                        <span className="text-gray-700">
                          {study.clientSatisfaction.toFixed(1)}/5
                        </span>
                      </div>
                      <Link
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-abricot hover:text-abricot-dark transition-colors duration-200"
                      >
                        En savoir plus
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Client Satisfaction Section */}
          <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-madison">
                Satisfaction Client Exceptionnelle
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.slice(0, 3).map((study) => (
                  <div
                    key={study.id}
                    className="bg-white rounded-lg shadow p-6"
                  >
                    <p className="text-gray-600 mb-4">
                      &quot;{study.testimonial}&quot;
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-madison">
                        {study.client}
                      </span>
                      <div className="flex items-center">
                        <Star className="text-yellow-400 w-5 h-5 mr-1" />
                        <span className="text-gray-700">
                          {study.clientSatisfaction.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-abricot text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Prêt à Transformer Votre Projet ?
              </h2>
              <p className="text-xl mb-8">
                Découvrez comment L2BS Technology Corp peut vous aider à
                atteindre vos objectifs
              </p>
              <Link
                href="/contact"
                className="bg-white text-abricot font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                Contactez-nous
              </Link>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
