import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Droplets,
  FileText,
  PenToolIcon as Tool,
  GraduationCap,
} from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function SecurityPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Sécurité Incendie" },
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
                  Sécurité Incendie
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
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Sécurité Incendie
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Protégez vos biens et vos collaborateurs avec nos solutions
              complètes de sécurité incendie, conformes aux normes
              internationales et adaptées à vos besoins spécifiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Système de sécurité incendie"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                Protection complète contre les incendies
              </h2>
              <p className="text-muted-foreground mb-6">
                Chez L2BS Technology Corp, nous proposons des solutions de
                sécurité incendie de pointe pour protéger vos installations
                contre les risques d&apos;incendie. Notre approche globale
                comprend la détection, l&apos;alerte, l&apos;extinction, la
                formation et la maintenance.
              </p>
              <p className="text-muted-foreground">
                Nos experts vous accompagnent dans toutes les étapes de votre
                projet, de l&apos;étude initiale à la maintenance régulière, en
                passant par l&apos;installation et la mise en service.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Détection et Alerte Incendie
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nos systèmes de détection précoce et d&apos;alerte permettent
                d&apos;identifier rapidement tout départ de feu et
                d&apos;alerter les occupants pour une évacuation rapide et
                sécurisée.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Détecteurs de fumée et chaleur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Alarmes sonores et visuelles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Centrales de détection incendie</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Droplets className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Extinction Automatique
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nos systèmes d&apos;extinction automatique interviennent
                rapidement pour contenir et éteindre les incendies, limitant
                ainsi les dégâts et protégeant les personnes.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Systèmes de sprinklers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Extinction par gaz inerte</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Extincteurs portatifs et RIA</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Plans et Conformité</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nous réalisons des études techniques complètes et veillons à la
                conformité de vos installations avec les normes internationales
                en vigueur.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Études techniques selon normes NFPA et ISO</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Plans d&apos;évacuation et d&apos;intervention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Audit de conformité réglementaire</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Tool className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Maintenance et Vérifications
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nous assurons la maintenance régulière de vos équipements de
                sécurité incendie pour garantir leur bon fonctionnement en cas
                d&apos;urgence.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Contrôle périodique des équipements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Maintenance préventive et corrective</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Rapports détaillés et registre de sécurité</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Formation et Prévention
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nous formons vos équipes à la prévention des incendies et aux
                bonnes pratiques à adopter en cas d&apos;urgence pour minimiser
                les risques.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Sensibilisation et exercices d&apos;évacuation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Formation à l&apos;utilisation des extincteurs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Simulations d&apos;incendie et gestion de crise</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Pourquoi choisir L2BS Technology Corp pour votre sécurité incendie
              ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Expertise technique
                </h3>
                <p className="text-muted-foreground">
                  Notre équipe d&apos;ingénieurs et de techniciens spécialisés
                  possède une expertise approfondie dans le domaine de la
                  sécurité incendie.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Solutions sur mesure
                </h3>
                <p className="text-muted-foreground">
                  Nous concevons des solutions adaptées à vos besoins
                  spécifiques et à la configuration de vos locaux pour une
                  protection optimale.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Conformité aux normes
                </h3>
                <p className="text-muted-foreground">
                  Nos installations respectent les normes internationales (NFPA,
                  ISO) et les réglementations locales en vigueur pour garantir
                  votre sécurité.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à sécuriser vos installations ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins
              en matière de sécurité incendie et obtenir un devis personnalisé.
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
