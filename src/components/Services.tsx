import { Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;
};

// const ServiceCard = ({
//   number,
//   title,
//   description,
//   icon,
// }: ServiceCardProps) => (
//   <div className="flex items-start justify-between space-x-4 p-8">
//     <div className="flex items-center justify-center w-20 h-20 rounded-full">
//       {icon}
//     </div>
//     <div>
//       <h3 className="text-lg font-semibold text-abricot !mb-[30px]">
//         {number} <span className="text-black">{title}</span>
//       </h3>
//       <p className="text-gray-500">{description}</p>
//     </div>
//   </div>
// );

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  icon,
  link,
}) => (
  <Link
    href={link}
    style={{ transition: ".4s cubic-bezier(0, 0, .3642, 1)" }}
    className="mb-8 text-default-text bg-black/10 p-8 rounded-lg shadow-xl flex group hover:bg-black/5"
  >
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">
        <div
          style={{ transition: ".4s cubic-bezier(0, 0, .3642, 1)" }}
          className="w-12 h-12 bg-orange-100 group-hover:bg-orange-200 rounded-full flex items-center justify-center"
        >
          {icon}
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">
          <span className="text-orange-500 mr-2">{number}.</span>
          {title}
        </h4>
        <p
          style={{ transition: ".4s cubic-bezier(0, 0, .3642, 1)" }}
          className="text-gray-600 group-hover:text-gray-900"
        >
          {description}
        </p>
      </div>
    </div>
  </Link>
);

const services = [
  {
    title: "Électricité et sécurité incendie",
    description:
      "Fourniture et installation d'équipements de courant fort et faible, ainsi que de systèmes de sécurité incendie.",
    icon: <Zap className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Sécurité électronique",
    description:
      "Mise en place de systèmes de contrôle d'accès, vidéosurveillance, alarmes intrusion, et câblages de sécurité électronique.",
    icon: <span className="text-2xl">🔒</span>,
  },
  {
    title: "Équipements électromécaniques",
    description:
      "Vente et installation d'ascenseurs, d'escalators et autres équipements électromécaniques.",
    icon: <span className="text-2xl">⚙️</span>,
  },
  {
    title: "Réseaux et télécommunications",
    description:
      "Installation de réseaux informatiques, téléphoniques et systèmes de télécommunication.",
    icon: <span className="text-2xl">🌐</span>,
  },
  {
    title: "Énergies renouvelables",
    description:
      "Solutions clé en main pour l'installation de systèmes d'énergie solaire et autres technologies vertes.",
    icon: <span className="text-2xl">☀️</span>,
  },
  {
    title: "Climatisation et plomberie",
    description:
      "Commercialisation et installation de systèmes de climatisation, ainsi que d'équipements de plomberie.",
    icon: <span className="text-2xl">🚰</span>,
  },
  {
    title: "Gestion technique de bâtiment (GTB)",
    description:
      "Automatisation des bâtiments et gestion intelligente de leurs infrastructures pour une efficacité optimale.",
    icon: <span className="text-2xl">🏢</span>,
  },
  {
    title: "Développement de logiciels",
    description:
      "Conception et développement de solutions logicielles sur mesure pour répondre aux besoins spécifiques de votre entreprise.",
    icon: <span className="text-2xl">💻</span>,
  },
  {
    title: "Développement de sites web",
    description:
      "Création de sites web modernes, réactifs et optimisés pour tous les appareils.",
    icon: <span className="text-2xl">🌍</span>,
  },
  {
    title: "Développement d'applications mobiles",
    description:
      "Conception et développement d'applications mobiles innovantes pour iOS et Android.",
    icon: <span className="text-2xl">📱</span>,
  },
];

const Services = () => {
  return (
    <div className="bg-white pt-32 pb-24 relative z-0">
      <div className="absolute bg-lb2s bg-contain bg-no-repeat bg-center z-30 w-56 h-36 top-0 right-[20%]"></div>
      <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="text-[42px] !mb-[30px] leading-[140%] font-semibold text-gray-900 custom-syne">
            Comment Peut-On <span className="text-abricot">Vous Aider</span>?
          </h2>
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-black mb-6 sm:mb-[60px] sm:mt-[30px]">
              Services IT
            </h3>
            <div className="relative flex bg-white w-full">
              <div className="w-full h-[2px] bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot"></div>
            </div>
            <ServiceCard
              number="01"
              title="Développement de Logiciels"
              description="Conceptions et développements des solutions logicielles sur mesure pour répondre aux besoins spécifiques de votre entreprise."
              icon={
                <span className="w-full text-[48px] rounded-full flex items-center justify-center">
                  💻
                </span>
              }
            />
            <div className="relative flex bg-white w-full">
              <div className="w-full h-[2px] bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot"></div>
            </div>
            <ServiceCard
              number="02"
              title="Maintenance Informatique"
              description="Assurez le bon fonctionnement de votre infrastructure IT grâce à nos services de maintenance préventive et curative."
              icon={
                <span className="w-full text-[48px] rounded-full flex items-center justify-center">
                  🔧
                </span>
              }
            />
            <div className="relative flex bg-white w-full">
              <div className="w-full h-[2px] bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot"></div>
            </div>
            <ServiceCard
              number="03"
              title="Déploiement de Réseaux"
              description="Installation et gestion de réseaux sécurisés et performants pour garantir la connectivité de votre entreprise."
              icon={
                <span className="w-full text-[48px] rounded-full flex items-center justify-center">
                  🌐
                </span>
              }
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black mb-6 sm:mb-[60px] sm:mt-[30px]">
              Services de Sécurité
            </h3>
            <div className="relative flex bg-white w-full">
              <div className="w-full h-[2px] bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot"></div>
            </div>
            <ServiceCard
              number="04"
              title="Systèmes de Vidéosurveillance"
              description="Protégez vos locaux avec des caméras de surveillance intelligentes pour une sécurité optimale."
              icon={
                <span className="w-full text-[48px] rounded-full flex items-center justify-center">
                  📹
                </span>
              }
            />
            <div className="relative flex bg-white w-full">
              <div className="w-full h-[2px] bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot"></div>
            </div>
            <ServiceCard
              number="05"
              title="Contrôle d'Accès"
              description="Gérez les autorisations d'accès à vos locaux avec des solutions modernes de contrôle d'accès."
              icon={
                <span className="w-full text-[48px] rounded-full flex items-center justify-center">
                  🔒
                </span>
              }
            />
            <div className="relative flex bg-white w-full">
              <div className="w-full h-[2px] bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot"></div>
            </div>
            <ServiceCard
              number="06"
              title="Consultation en Cybersécurité"
              description="Protégez vos données et réseaux avec nos services de consultation en cybersécurité."
              icon={
                <span className="w-full text-[48px] rounded-full flex items-center justify-center">
                  🔐
                </span>
              }
            />
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              number={`0${index + 1}`}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link="#"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
