import Image from "next/image";
import {
  Globe,
  Smartphone,
  Code,
  Database,
  Cloud,
  Cog,
  Users,
  Shield,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function WebMobileDevelopmentPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Développement Web et Mobile" },
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
                  Développement Web et Mobile
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
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Nos Services de Développement
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Globe className="w-12 h-12 text-indigo-600 mb-4" />}
                title="Sites Web Responsifs"
                description="Création de sites web modernes et adaptés à tous les appareils, offrant une expérience utilisateur optimale sur desktop, tablette et mobile."
              />
              <ServiceCard
                icon={<Smartphone className="w-12 h-12 text-indigo-600 mb-4" />}
                title="Applications Mobiles"
                description="Développement d'applications natives (iOS et Android) et hybrides, permettant une présence multiplateforme efficace et performante."
              />
              <ServiceCard
                icon={<Code className="w-12 h-12 text-indigo-600 mb-4" />}
                title="Solutions Web Personnalisées"
                description="Création d'applications web sur mesure pour répondre à vos besoins spécifiques, de l'intranet d'entreprise aux plateformes e-commerce complexes."
              />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Notre Expertise Technique
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TechExpertiseCard
                icon={<Database className="w-8 h-8 text-indigo-600 mb-2" />}
                title="Bases de Données"
                technologies={["MySQL", "PostgreSQL", "MongoDB", "Redis"]}
              />
              <TechExpertiseCard
                icon={<Cloud className="w-8 h-8 text-indigo-600 mb-2" />}
                title="Cloud & DevOps"
                technologies={[
                  "AWS",
                  "Google Cloud",
                  "Azure",
                  "Docker",
                  "Kubernetes",
                ]}
              />
              <TechExpertiseCard
                icon={<Cog className="w-8 h-8 text-indigo-600 mb-2" />}
                title="Frameworks"
                technologies={[
                  "React",
                  "Vue.js",
                  "Angular",
                  "Node.js",
                  "Laravel",
                  "Django",
                ]}
              />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Notre Processus de Développement
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ol className="list-decimal list-inside space-y-4 text-lg">
                <li>
                  <strong>Analyse des Besoins :</strong> Compréhension
                  approfondie de vos objectifs et exigences.
                </li>
                <li>
                  <strong>Conception UX/UI :</strong> Création de maquettes et
                  prototypes interactifs.
                </li>
                <li>
                  <strong>Développement Agile :</strong> Cycles de développement
                  itératifs avec feedback continu.
                </li>
                <li>
                  <strong>Tests Rigoureux :</strong> Assurance qualité à chaque
                  étape du développement.
                </li>
                <li>
                  <strong>Déploiement :</strong> Mise en production sécurisée et
                  optimisée.
                </li>
                <li>
                  <strong>Maintenance & Support :</strong> Suivi post-lancement
                  et évolutions continues.
                </li>
              </ol>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Pourquoi Choisir L2BS pour votre Projet de Développement ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Users className="w-10 h-10 text-indigo-600 mb-4" />}
                title="Équipe Expérimentée"
                description="Des développeurs seniors avec une expertise dans divers domaines technologiques."
              />
              <FeatureCard
                icon={<Shield className="w-10 h-10 text-indigo-600 mb-4" />}
                title="Sécurité Renforcée"
                description="Implémentation des meilleures pratiques de sécurité pour protéger vos données et vos utilisateurs."
              />
              <FeatureCard
                icon={<Zap className="w-10 h-10 text-indigo-600 mb-4" />}
                title="Performance Optimisée"
                description="Solutions conçues pour être rapides, réactives et capables de gérer de fortes charges."
              />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Nos Réalisations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <CaseStudyCard
                image="/placeholder.svg?height=300&width=400"
                title="Plateforme E-commerce B2B"
                description="Développement d'une solution e-commerce sur mesure pour un leader de la distribution en Afrique de l'Ouest."
              />
              <CaseStudyCard
                image="/placeholder.svg?height=300&width=400"
                title="Application Mobile de Gestion de Flotte"
                description="Création d'une app iOS et Android pour optimiser la gestion de flotte d'une entreprise de logistique."
              />
            </div>
          </section>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              Prêt à concrétiser votre projet numérique ?
            </h2>
            <p className="mb-4">
              Contactez-nous pour discuter de vos idées et obtenir un devis
              personnalisé.
            </p>
            <Link
              href="/quote"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-medium"
            >
              Demander un devis
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

type ServiceCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

type TechExpertiseCardProps = {
  icon: JSX.Element;
  title: string;
  technologies: string[];
};

function TechExpertiseCard({
  icon,
  title,
  technologies,
}: TechExpertiseCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {icon}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="list-disc list-inside">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

type FeatureCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

type CaseStudyCardProps = {
  image: string;
  title: string;
  description: string;
};

function CaseStudyCard({ image, title, description }: CaseStudyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
