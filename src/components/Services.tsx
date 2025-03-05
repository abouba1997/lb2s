import { Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: JSX.Element;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  icon,
  href,
}) => (
  <Link
    href={href}
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
    title: "Sécurité incendie",
    description:
      "Solutions avancées pour la prévention, la détection et la suppression des incendies, incluant alarmes et extincteurs automatiques.",
    icon: <span className="text-2xl">🔥</span>,
    href: "/services/security",
  },
  {
    title: "Électricité",
    description:
      "Installation et maintenance de réseaux électriques basse et haute tension, garantissant sécurité et performance énergétique.",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    href: "/services/electricity",
  },
  {
    title: "Vidéosurveillance",
    description:
      "Systèmes de vidéosurveillance intelligents avec caméras HD, enregistrement sécurisé et accès à distance.",
    icon: <span className="text-2xl">🎥</span>,
    href: "/services/videosurveillance",
  },
  {
    title: "Contrôle d'Accès",
    description:
      "Solutions de contrôle d’accès pour sécuriser vos locaux : badges, biométrie, interphonie et gestion des visiteurs.",
    icon: <span className="text-2xl">🔑</span>,
    href: "/services/access-control",
  },
  {
    title: "Systèmes d'Alarmes & Intrusions",
    description:
      "Installation d’alarmes anti-intrusion et détecteurs de mouvement pour une sécurité optimale.",
    icon: <span className="text-2xl">🚨</span>,
    href: "/services/alarm-systems",
  },
  {
    title: "Détection Métaux & Rayon X",
    description:
      "Portiques de détection de métaux et scanners à rayons X pour le contrôle de sécurité dans les zones sensibles.",
    icon: <span className="text-2xl">🛃</span>,
    href: "/services/metal-detection",
  },
  {
    title: "Infrastructure Réseau & Câblage",
    description:
      "Conception et installation d’infrastructures réseau performantes : câblage structuré, fibre optique et data centers.",
    icon: <span className="text-2xl">🖧</span>,
    href: "/services/infrastructure-networking",
  },
  {
    title: "Solutions Wi-Fi & Internet",
    description:
      "Déploiement de réseaux Wi-Fi sécurisés et solutions internet adaptées aux entreprises et collectivités.",
    icon: <span className="text-2xl">📡</span>,
    href: "/services/wifi-internet",
  },
  {
    title: "Téléphonie IP & VoIP",
    description:
      "Mise en place de solutions VoIP et téléphonie IP pour une communication fluide et économique.",
    icon: <span className="text-2xl">📞</span>,
    href: "/services/ip-telephony",
  },
  {
    title: "Sécurité Réseau & Cybersécurité",
    description:
      "Protection avancée contre les cybermenaces avec pare-feu, antivirus et surveillance en temps réel.",
    icon: <span className="text-2xl">🛡️</span>,
    href: "/services/network-security",
  },
  {
    title: "Développement Web et Mobile",
    description:
      "Création et développement de sites web et applications mobiles modernes, performants et optimisés.",
    icon: <span className="text-2xl">💻</span>,
    href: "/services/web-mobile-development",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              number={`0${index + 1}`}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
