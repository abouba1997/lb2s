// import { Mail, MapPin, Phone } from "lucide-react";
// import ContactForm from "@/components/ContactForm";
// import Header from "@/components/Header";
// import Breadcrumb from "@/components/Breadcrumb";
// import Image from "next/image";
// import Map from "@/components/map";
// import Footer from "@/components/Footer";

// const ContactPage = () => {
//   const breadcrumbItems = [
//     { label: "Accueil", href: "/" },
//     { label: "Contactez-nous" },
//   ];

//   return (
//     <div className="w-full h-full bg-white/90">
//       <div className="w-full relative min-[998px]:h-[550px] min-[998px]:pt-[220px] pb-[90px] pt-[190px] flex items-center">
//         <div className="w-full !z-20">
//           <Header />
//           <div className="absolute bg-map-other bg-cover bg-no-repeat bg-center !z-[-1] w-full h-full inset-0"></div>
//           <div className="flex w-full min-h-full items-center justify-between relative bg-transparent">
//             <div className="xl:max-w-[1420px] px-8 xl:w-full flex justify-between items-center mx-auto w-full">
//               <div className=" flex flex-col justify-center items-start space-y-8">
//                 <Breadcrumb items={breadcrumbItems} />
//                 <h1 className="text-2xl sm:text-[32px] lg:text-[42px] text-[#121820] leading-[140%] space-y-5 font-bold">
//                   Contactez-nous
//                 </h1>
//               </div>
//               <div className="relative !z-30 sm:flex hidden">
//                 <Image
//                   src="/images/bg-lb2s-abricot.svg"
//                   alt="ceo_words"
//                   className="w-full h-full max-h-[140px] max-w-[220px] object-cover object-center flex !z-20 rotate-90"
//                   width={220}
//                   height={140}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white w-full text-default-text">
//         <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
//             <div>
//               <h2 className="text-3xl font-bold mb-8 text-madison">
//                 Nous contacter
//               </h2>
//               <ContactForm />
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold mb-8 text-madison">
//                 Nos coordonnées
//               </h2>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <MapPin className="w-6 h-6 text-abricot" />
//                   <div>
//                     <h3 className="font-semibold">Adresse</h3>
//                     <p>Garantiguibougou, Bamako, MALI</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <Phone className="w-6 h-6 text-abricot" />
//                   <div>
//                     <h3 className="font-semibold">Téléphone</h3>
//                     <p>+223 79 49 31 58</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <Mail className="w-6 h-6 text-abricot" />
//                   <div>
//                     <h3 className="font-semibold">Email</h3>
//                     <p>contact@lb2stech.com</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-12">
//                 <h2 className="text-3xl font-bold mb-8 text-madison">
//                   Notre emplacement
//                 </h2>
//                 <Map />
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ContactPage;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Contactez-nous" },
  ];

  return (
    <div className="w-full h-full bg-white/90">
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
                  Contactez-<span className="text-abricot">nous</span>
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

      {/* Main Content - Just the Form */}
      <div className="bg-white w-full text-default-text">
        <section className="px-4 sm:px-6 lg:px-8 xl:max-w-[1420px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full mx-auto"
          >
            <ContactForm />
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
