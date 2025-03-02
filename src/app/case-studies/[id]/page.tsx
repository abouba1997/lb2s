import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, CheckCircle } from "lucide-react";
import { caseStudies } from "@/lib/constants";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

const CaseStudyPage = ({ params }: { params: { id: string } }) => {
  const study = caseStudies.find((s) => s.id === Number.parseInt(params.id));

  if (!study) {
    return <div>Étude de cas non trouvée</div>;
  }

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: `Études de cas - ${study.title}` },
  ];

  return (
    <div className="w-full h-full bg-white/90">
      <div className="w-full relative min-[998px]:h-[550px] min-[998px]:pt-[220px] pb-[90px] pt-[190px] flex items-center">
        <div className="w-full !z-20">
          <Header />
          <div className="absolute bg-map-other bg-cover bg-no-repeat bg-center !z-[-1] w-full h-full inset-0"></div>
          <div className="flex w-full min-h-full items-center justify-between relative bg-transparent">
            <div className="xl:max-w-[1420px] px-8 xl:w-full flex justify-between items-center mx-auto w-full">
              <div className=" flex flex-col justify-center items-start space-y-8">
                <Breadcrumb items={breadcrumbItems} />
                <h1 className="text-2xl sm:text-[32px] lg:text-[42px] text-[#121820] leading-[140%] space-y-5 font-bold">
                  Systèmes d&apos;Alarme Intrusion
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
              <Link
                href="/case-studies"
                className="inline-flex items-center text-white mb-8 hover:underline"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Retour aux études de cas
              </Link>
              <h1 className="text-4xl font-bold mb-4">{study.title}</h1>
              <p className="text-xl mb-4">{study.client}</p>
              <div className="flex items-center">
                <Star className="text-yellow-400 w-6 h-6 mr-2" />
                <span className="text-2xl font-semibold">
                  {study.clientSatisfaction.toFixed(1)}/5
                </span>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={800}
                    height={450}
                    className="w-full h-auto rounded-lg shadow-lg mb-8"
                  />
                  <h2 className="text-2xl font-semibold mb-4 text-madison">
                    Le Défi
                  </h2>
                  <p className="text-gray-700 mb-8">{study.challenge}</p>
                  <h2 className="text-2xl font-semibold mb-4 text-madison">
                    Notre Solution
                  </h2>
                  <p className="text-gray-700 mb-8">{study.solution}</p>
                  <h2 className="text-2xl font-semibold mb-4 text-madison">
                    Résultats
                  </h2>
                  <ul className="list-none space-y-4 mb-8">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-green-500 w-6 h-6 mr-2 flex-shrink-0 mt-1" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-madison">
                      Témoignage Client
                    </h3>
                    <p className="text-gray-700 italic">
                      &quot;{study.testimonial}&quot;
                    </p>
                  </div>
                </div>
                <div>
                  <div className="bg-gray-100 p-6 rounded-lg sticky top-8">
                    <h3 className="text-xl font-semibold mb-4 text-madison">
                      Détails du Projet
                    </h3>
                    <ul className="space-y-4">
                      <li>
                        <span className="font-semibold">Client:</span>{" "}
                        {study.client}
                      </li>
                      <li>
                        <span className="font-semibold">Catégorie:</span>{" "}
                        {study.category}
                      </li>
                      <li>
                        <span className="font-semibold">
                          Satisfaction Client:
                        </span>{" "}
                        {study.clientSatisfaction.toFixed(1)}/5
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-abricot text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Prêt à Réaliser Votre Projet ?
              </h2>
              <p className="text-xl mb-8">
                Découvrez comment L2BS Technology Corp peut transformer vos
                défis en opportunités
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
        <Footer />
      </div>
    </div>
  );
};

export default CaseStudyPage;
