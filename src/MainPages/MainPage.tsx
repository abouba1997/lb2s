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
import { motion } from "framer-motion";

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

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Divider component with animation
  const AnimatedDivider = () => (
    <div className="bg-white py-6">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex xl:max-w-[1420px] px-8 bg-white xl:w-full mx-auto sm:px-6 lg:px-8"
      >
        <div className="w-full h-1 bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot after:content-[''] after:w-[25px] after:border-l-[5px] after:border-l-[#FFFFFF] after:absolute after:h-full after:right-0 after:top-0 after:bg-abricot"></div>
      </motion.div>
    </div>
  );

  return (
    <>
      <div className="min-h-screen relative w-full">
        <Header />
        <div className="absolute inset-0 z-0">
          <BackgroundSwiper data={data} />
        </div>
        <Hero />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Partenaires />
      </motion.div>

      <AnimatedDivider />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Services />
      </motion.div>

      <AnimatedDivider />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Projects />
      </motion.div>

      <AnimatedDivider />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Collaboration />
      </motion.div>

      <AnimatedDivider />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Skills />
      </motion.div>

      <AnimatedDivider />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Testimonials />
      </motion.div>

      <AnimatedDivider />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <ContactForm />
      </motion.div>

      <AnimatedDivider />

      <Footer />
    </>
  );
};

export default MainPage;
