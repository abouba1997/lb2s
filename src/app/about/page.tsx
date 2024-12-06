import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Notre Présentation" },
  ];

  const expertiseAreas = [
    "Électricité et sécurité incendie",
    "Sécurité électronique",
    "Équipements électromécaniques",
    "Réseaux et télécommunications",
    "Énergies renouvelables",
    "Climatisation et plomberie",
    "Gestion technique de bâtiment (GTB)",
  ];

  const values = [
    {
      title: "Qualité",
      description:
        "Nous nous engageons à offrir des services de qualité supérieure, respectant les normes techniques et de sécurité les plus strictes.",
    },
    {
      title: "Innovation",
      description:
        "Nous restons à la pointe des nouvelles technologies pour proposer des solutions innovantes et adaptées aux besoins actuels et futurs.",
    },
    {
      title: "Durabilité",
      description:
        "Nous priorisons l'utilisation de solutions écologiques et d'énergies renouvelables afin de contribuer au développement durable.",
    },
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
                  Notre Présentation
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

      <div className="bg-white w-full text-default-text">
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            PRÉSENTATION DE L2BS TECHNOLOGY CORP
          </h2>
          <p className="text-lg max-w-4xl mx-auto text-center mb-12">
            Nous proposons une gamme complète de services techniques et de
            solutions sur mesure pour répondre aux besoins des entreprises,
            institutions et particuliers en Afrique de l&apos;Ouest et au-delà.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Nos domaines d&apos;expertise
              </h3>
              <ul className="space-y-2">
                {expertiseAreas.map((area, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96">
              <Image
                src="/gifs/presentation.gif"
                alt="Expertise Areas"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nos valeurs
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Check className="h-6 w-6 text-green-500 mr-2" />
                    {value.title}
                  </h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96">
              <Image
                src="/images/mission.png"
                alt="Our Vision"
                layout="fill"
                className="rounded-lg shadow-lg object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre vision</h2>
              <p className="text-lg text-gray-700 mb-8">
                Faire de L2BS Technology Corp un leader en solutions
                technologiques et en installations techniques en Afrique de
                l&apos;Ouest, tout en promouvant un développement durable à
                travers des projets innovants.
              </p>
              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <p className="text-gray-700">
                  Pour toute information ou demande de projet, L2BS Technology
                  Corp est disponible pour vous accompagner avec des solutions
                  adaptées à vos besoins.
                </p>
                <Link
                  href={"/contact"}
                  className="mt-4 bg-blue-500 flex w-fit text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
