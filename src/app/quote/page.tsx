import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";
import Image from "next/image";
import React from "react";

const QuotePage = () => {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Demande de devis" },
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
                  Demander un Devis pour un Projet
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
        <div className="container mx-auto px-4 py-16">
          {/* Hero Text */}
          {/* <div className="text-center mb-20">
            <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold leading-tight xl:max-w-[1420px] px-8 xl:w-full mx-auto w-full">
              Découvrez l’équipe dynamique et passionnée de{" "}
              <span className="text-orange-500">LB2S Technology Corp</span>, des
              experts engagés à transformer vos projets en succès grâce à leur
              savoir-faire et leur dévouement.
            </h1>
          </div> */}
          <QuoteForm />
        </div>
      </div>
      <div className="bg-white">
        <div className="relative flex xl:max-w-[1420px] px-8 bg-white xl:w-full mx-auto sm:px-6 lg:px-8">
          <div className="w-full h-1 bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot after:content-[''] after:w-[25px] after:border-l-[5px] after:border-l-[#FFFFFF] after:absolute after:h-full after:right-0 after:top-0 after:bg-abricot "></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QuotePage;
