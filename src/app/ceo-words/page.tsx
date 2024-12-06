import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

const CEOWords = () => {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Mot du Président" },
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
                  Mot du Président
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
      {/* <div className="bg-white w-full py-16">
        <div className="xl:max-w-[1420px] px-8 xl:w-full mx-auto">
          <div className="grid md:grid-cols-1 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#121820]">
                Mot du Président
              </h2>
              <blockquote className="italic text-lg text-gray-700 border-l-4 border-[#121820] pl-4">
                « Chers partenaires, collaborateurs et clients, Je suis honoré
                de vous accueillir chez L2BS Technology Corp. Depuis notre
                fondation, notre ambition est de construire une entreprise de
                référence en solutions technologiques et en installations
                avancées. Nous croyons fermement en l&apos;innovation et en
                l&apos;excellence, et notre mission est d&apos;offrir des
                solutions durables et adaptées à vos besoins. Je remercie
                chaleureusement nos clients et partenaires pour leur confiance
                et leur soutien. Ensemble, construisons un avenir sûr et
                innovant. »
              </blockquote>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#121820]">
                À propos de L2BS Technology Corp
              </h2>
              <p className="text-gray-700">
                Fondée par quatre associés passionnés et visionnaires, L2BS
                Technology Corp s&apos;engage à transformer les infrastructures
                et systèmes techniques de ses clients en Afrique de
                l&apos;Ouest. Nous fournissons des solutions innovantes dans les
                domaines de l&apos;électricité, de la sécurité électronique, de
                la gestion de bâtiment, des réseaux informatiques, et des
                énergies renouvelables.
              </p>
              <p className="text-gray-700">
                Notre mission est d&apos;offrir un service de qualité, alliant
                expertise et efficacité, pour garantir la sécurité et le confort
                de chaque projet. Chez L2BS, chaque installation est réalisée
                dans un souci de durabilité et de performance optimale.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-white w-full py-16">
        <div className="xl:max-w-[1420px] px-8 xl:w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#121820]">
                Mot du Président
              </h2>
              <Image
                src="/gifs/earth_2.gif"
                alt="CEO Portrait"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <blockquote className="italic text-lg text-gray-700 border-l-4 border-[#121820] pl-4">
                « Chers partenaires, collaborateurs et clients, Je suis honoré
                de vous accueillir chez L2BS Technology Corp. Depuis notre
                fondation, notre ambition est de construire une entreprise de
                référence en solutions technologiques et en installations
                avancées. Nous croyons fermement en l&apos;innovation et en
                l&apos;excellence, et notre mission est d&apos;offrir des
                solutions durables et adaptées à vos besoins. Je remercie
                chaleureusement nos clients et partenaires pour leur confiance
                et leur soutien. Ensemble, construisons un avenir sûr et
                innovant. »
              </blockquote>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#121820]">
                Notre Vision
              </h3>
              <p className="text-gray-700">
                Chez L2BS Technology Corp, nous aspirons à être le leader
                incontesté des solutions technologiques en Afrique de
                l&apos;Ouest. Notre vision est de créer un environnement où la
                technologie améliore la vie quotidienne, renforce la sécurité et
                favorise le développement durable.
              </p>
              <h3 className="text-2xl font-semibold text-[#121820]">
                Notre Engagement
              </h3>
              <p className="text-gray-700">
                Nous nous engageons à fournir des solutions sur mesure qui
                répondent aux défis uniques de chaque client. Notre équipe
                d&apos;experts travaille sans relâche pour intégrer les
                dernières innovations technologiques dans nos projets,
                garantissant ainsi des installations à la pointe de la modernité
                et de l&apos;efficacité.
              </p>
              <h3 className="text-2xl font-semibold text-[#121820]">
                L&apos;Innovation au Cœur de Notre ADN
              </h3>
              <p className="text-gray-700">
                L&apos;innovation est le moteur de notre croissance. Nous
                investissons continuellement dans la recherche et le
                développement pour rester à l&apos;avant-garde des avancées
                technologiques. Cette approche nous permet d&apos;offrir des
                solutions toujours plus performantes et adaptées aux besoins
                évolutifs du marché africain.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CEOWords;
