import Image from "next/image";
import Link from "next/link";
import { Zap, Lightbulb, Battery, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function ElectricityPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Électricité" },
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
                  Électricité
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
              Électricité
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des installations électriques fiables, sécurisées et efficaces
              pour vos bâtiments résidentiels, commerciaux et industriels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Installation électrique professionnelle"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                Solutions électriques complètes
              </h2>
              <p className="text-muted-foreground mb-6">
                Chez L2BS Technology Corp, nous concevons, installons et
                maintenons des systèmes électriques de haute qualité pour tous
                types de bâtiments. Notre expertise couvre l&apos;ensemble des
                besoins électriques, de l&apos;installation initiale à la
                maintenance préventive.
              </p>
              <p className="text-muted-foreground">
                Nos équipes qualifiées respectent les normes les plus strictes
                pour garantir la sécurité et la fiabilité de vos installations
                électriques.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Installation Électrique Bâtiments & Industries
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nous réalisons des installations électriques complètes pour tous
                types de bâtiments, des résidences aux complexes industriels, en
                respectant les normes de sécurité.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Câblage électrique complet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Tableaux électriques et armoires de distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Systèmes de mise à la terre et protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Installations électriques industrielles</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Schéma de distribution électrique"
                width={400}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Éclairage et Automatisation
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nous proposons des solutions d&apos;éclairage modernes et
                économes en énergie, ainsi que des systèmes
                d&apos;automatisation pour optimiser le confort et
                l&apos;efficacité énergétique.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Éclairage LED intérieur et extérieur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Capteurs de mouvement et de luminosité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Systèmes de gestion d&apos;éclairage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Domotique et automatisation du bâtiment</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Bureau avec éclairage intelligent"
                width={400}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Battery className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Onduleurs et Groupes Électrogènes
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nous installons des solutions de secours électrique pour assurer
                la continuité de vos activités en cas de coupure de courant.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Onduleurs (UPS) pour équipements sensibles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Groupes électrogènes de secours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Systèmes de commutation automatique</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Maintenance et tests périodiques</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Onduleur connecté à un serveur"
                width={400}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Audit et Sécurité Électrique
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nous réalisons des audits complets de vos installations
                électriques pour identifier les risques potentiels et garantir
                la conformité aux normes en vigueur.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Diagnostic des installations existantes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Vérification de la conformité aux normes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Mesures et tests électriques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Recommandations d&apos;amélioration</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Technicien testant une installation"
                width={400}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>

          <div className="bg-muted rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Nos engagements pour vos installations électriques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Sécurité</h3>
                <p className="text-muted-foreground">
                  Nous accordons une importance primordiale à la sécurité de vos
                  installations électriques, en respectant scrupuleusement les
                  normes et réglementations en vigueur.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Efficacité énergétique
                </h3>
                <p className="text-muted-foreground">
                  Nos solutions sont conçues pour optimiser votre consommation
                  d&apos;énergie, réduire vos coûts et minimiser votre impact
                  environnemental.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Fiabilité</h3>
                <p className="text-muted-foreground">
                  Nous utilisons des équipements et des matériaux de haute
                  qualité pour garantir la durabilité et la fiabilité de vos
                  installations électriques.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Besoin d&apos;une installation électrique fiable ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins
              en matière d&apos;électricité et obtenir un devis personnalisé.
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
