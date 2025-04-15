// /* eslint-disable @next/next/no-img-element */
// import React from "react";
// import LOGO from "@/assets/logo/lb2s_logo_sans_font.png";

// const Footer: React.FC = () => {
//   return (
//     <footer className="py-20 relative z-0 text-white">
//       <div className="absolute bg-map bg-opacity-75 bg-contain bg-no-repeat bg-center z-0 w-full h-full inset-0"></div>
//       <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8 z-10">
//         <div className="grid gap-8">
//           <div>
//             <div className="flex justify-center items-center mb-4">
//               <img src={LOGO.src} alt="Logo" className="mr-2 h-40 w-40" />
//             </div>
//             <p className="text-gray-400 text-center">
//               {
//                 "Chez LB2S Technology Corp, nous nous engageons à accompagner les entreprises avec des solutions innovantes en IT et en sécurité. Notre expertise couvre le développement de logiciels de pointe, la cybersécurité avancée et des services technologiques sur mesure, conçus pour favoriser la croissance et l'efficacité. Avec un engagement envers la qualité, l'intégrité et la satisfaction de nos clients, nous aspirons à être votre partenaire de confiance dans la navigation du paysage numérique. Ensemble, construisons un avenir plus intelligent et plus sécurisé."
//               }
//             </p>
//           </div>
//         </div>

//         <div className="bg-transparent py-6">
//           <div className="relative flex xl:max-w-[1420px] px-8 bg-white xl:w-full mx-auto sm:px-6 lg:px-8">
//             <div className="w-full h-1 bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot after:content-[''] after:w-[25px] after:border-l-[5px] after:border-l-[#FFFFFF] after:absolute after:h-full after:right-0 after:top-0 after:bg-abricot "></div>
//           </div>
//         </div>

//         {/* Social Links */}
//         <div className="flex flex-wrap justify-center space-x-6 text-gray-400">
//           <a href="#" className="hover:text-white">
//             Facebook
//           </a>
//           <a href="#" className="hover:text-white">
//             Instagram
//           </a>
//           <a href="#" className="hover:text-white">
//             LinkedIn
//           </a>
//           <a href="#" className="hover:text-white">
//             Twitter
//           </a>
//           <a href="#" className="hover:text-white">
//             YouTube
//           </a>
//         </div>

//         {/* Bottom Links */}
//         <div className="flex justify-center mt-8 text-gray-400 space-x-8">
//           <a href="#" className="hover:text-white">
//             Terms & Condition
//           </a>
//           <a href="#" className="hover:text-white">
//             Privacy Policy
//           </a>
//           <a href="#" className="hover:text-white">
//             Sitemap
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

/* eslint-disable @next/next/no-img-element */
import LOGO from "@/assets/logo/lb2s_logo_sans_font.png";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-10 relative z-0 bg-[#121820] text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute bg-pattern opacity-5 bg-map bg-opacity-75 bg-contain bg-no-repeat bg-center z-0 w-full h-full inset-0"></div>

      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-abricot/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="flex justify-center items-center mb-6">
              <img
                src={LOGO.src || "/placeholder.svg"}
                alt="Logo"
                className="h-24 w-24"
              />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">
              LB2S Technology Corp
            </h3>
            <p className="text-gray-400 text-sm mb-6 text-center md:text-left">
              Solutions innovantes en IT et en sécurité pour accompagner les
              entreprises dans leur transformation numérique.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-abricot/20 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-abricot/20 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-abricot/20 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-abricot/20 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white relative inline-block after:content-[''] after:absolute after:w-10 after:h-1 after:bg-abricot after:left-0 after:-bottom-2">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/services/security"
                  className="text-gray-400 hover:text-abricot transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Sécurité incendie
                </a>
              </li>
              <li>
                <a
                  href="/services/videosurveillance"
                  className="text-gray-400 hover:text-abricot transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Vidéosurveillance
                </a>
              </li>
              <li>
                <a
                  href="/services/access-control"
                  className="text-gray-400 hover:text-abricot transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Contrôle d&apos;Accès
                </a>
              </li>
              <li>
                <a
                  href="/services/network-security"
                  className="text-gray-400 hover:text-abricot transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Cybersécurité
                </a>
              </li>
              <li>
                <a
                  href="/services/web-mobile-development"
                  className="text-gray-400 hover:text-abricot transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Développement Web
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white relative inline-block after:content-[''] after:absolute after:w-10 after:h-1 after:bg-abricot after:left-0 after:-bottom-2">
              Liens Rapides
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-abricot transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> À propos de nous
                </a>
              </li>
              <li>
                <a
                  href="/case-studies"
                  className="text-gray-400 hover:text-abricot transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Études de cas
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="text-gray-400 hover:text-abricot transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Notre équipe
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-abricot transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Contact
                </a>
              </li>
              <li>
                <a
                  href="/quote"
                  className="text-gray-400 hover:text-abricot transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Demander un devis
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white relative inline-block after:content-[''] after:absolute after:w-10 after:h-1 after:bg-abricot after:left-0 after:-bottom-2">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-abricot mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Baco Djicoroni Golf, Bamako, Mali
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-abricot mr-3 flex-shrink-0" />
                <span className="text-gray-400">+223 79 49 31 58</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-abricot mr-3 flex-shrink-0" />
                <span className="text-gray-400">contact@lb2stech.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} LB2S Technology Corp. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Conditions d&apos;utilisation
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Plan du site
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
