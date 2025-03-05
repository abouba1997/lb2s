"use client";

import Header from "@/components/Header";
import BackgroundSwiper from "@/components/Slider";
import Image1 from "@/assets/images/lb2s_1.jpg";
import Image2 from "@/assets/images/lb2s_2.jpg";
import Image3 from "@/assets/images/lb2s_3.jpeg";
import Image4 from "@/assets/images/lb2s_4.jpg";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Partenaires from "@/components/Partenaires";
import Projects from "@/components/Projects";
import Collaboration from "@/components/Collaboration";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const MainPage = () => {
  const data = [
    {
      image: Image1.src,
      title: "Service 1",
      subTitle: "Description 1",
    },
    {
      image: Image2.src,
      title: "Service 2",
      subTitle: "Description 2",
    },
    {
      image: Image3.src,
      title: "Service 3",
      subTitle: "Description 3",
    },
    {
      image: Image4.src,
      title: "Service 4",
      subTitle: "Description 4",
    },
  ];

  return (
    <>
      <div className="min-h-screen relative w-full">
        <Header />
        <div className="absolute inset-0 z-0">
          <BackgroundSwiper data={data} />
        </div>
        <Hero />
      </div>

      <Partenaires />
      <div className="bg-white">
        <div className="relative flex xl:max-w-[1420px] px-8 bg-white xl:w-full mx-auto sm:px-6 lg:px-8">
          <div className="w-full h-1 bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot after:content-[''] after:w-[25px] after:border-l-[5px] after:border-l-[#FFFFFF] after:absolute after:h-full after:right-0 after:top-0 after:bg-abricot "></div>
        </div>
      </div>
      <Services />
      <div className="bg-white">
        <div className="relative flex xl:max-w-[1420px] px-8 bg-white xl:w-full mx-auto sm:px-6 lg:px-8">
          <div className="w-full h-1 bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot after:content-[''] after:w-[25px] after:border-l-[5px] after:border-l-[#FFFFFF] after:absolute after:h-full after:right-0 after:top-0 after:bg-abricot "></div>
        </div>
      </div>
      <Projects />
      <Collaboration />
      <Skills />
      <div className="bg-white">
        <div className="relative flex xl:max-w-[1420px] px-8 bg-white xl:w-full mx-auto sm:px-6 lg:px-8">
          <div className="w-full h-1 bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot after:content-[''] after:w-[25px] after:border-l-[5px] after:border-l-[#FFFFFF] after:absolute after:h-full after:right-0 after:top-0 after:bg-abricot "></div>
        </div>
      </div>
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
};

export default MainPage;
