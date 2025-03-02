import Image from "next/image";
import Link from "next/link";
import { ScanLine, Package, Building, Shield } from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function MetalDetectionPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Détection Métaux & Rayon X" },
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
                  Détection Métaux & Rayon X
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
              Détection Métaux & Rayon X
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions de détection avancées pour sécuriser vos accès et
              contrôler efficacement les personnes et les bagages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Portique de détection de métaux"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                Sécurité et contrôle avancés
              </h2>
              <p className="text-muted-foreground mb-6">
                Chez L2BS Technology Corp, nous proposons des solutions de
                détection de métaux et de contrôle par rayons X de haute
                performance pour sécuriser vos accès et protéger vos
                installations.
              </p>
              <p className="text-muted-foreground">
                Nos équipements de détection utilisent les technologies les plus
                récentes pour vous offrir une sécurité optimale tout en
                facilitant le flux des personnes et des objets.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <ScanLine className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Portiques de détection de métaux
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nos portiques de détection de métaux permettent
                d&apos;identifier rapidement et efficacement les objets
                métalliques dissimulés sur les personnes.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Haute sensibilité et discrimination précise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Localisation par zones des objets détectés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Comptage automatique des passages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Paramétrage personnalisable selon vos besoins</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Portique de détection dans un aéroport"
                width={400}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Scanners à rayons X pour bagages
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nos scanners à rayons X permettent d&apos;inspecter le contenu
                des bagages, colis et objets sans avoir à les ouvrir, pour une
                sécurité optimale.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Images haute résolution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Détection automatique des objets dangereux</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Différenciation des matériaux par couleur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Traitement rapide des bagages</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Scanner à rayons X"
                width={400}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Détecteurs manuels et portatifs
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nos détecteurs manuels complètent les portiques fixes pour des
                contrôles plus précis et ciblés des personnes et des objets.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Détecteurs de métaux portatifs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Détecteurs d&apos;explosifs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Miroirs d&apos;inspection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Équipements légers et ergonomiques</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Détecteur manuel"
                width={400}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Solutions intégrées</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nous proposons des solutions complètes intégrant détection de
                métaux, contrôle par rayons X et autres systèmes de sécurité
                pour une protection globale.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Intégration avec le contrôle d&apos;accès</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Connexion à la vidéosurveillance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Gestion centralisée des alertes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Rapports et statistiques détaillés</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Système de sécurité intégré"
                width={400}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>

          <div className="bg-muted rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Applications de nos solutions de détection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Aéroports et transports
                </h3>
                <p className="text-muted-foreground">
                  Sécurisez les flux de passagers et de bagages dans les
                  aéroports, gares et autres infrastructures de transport pour
                  prévenir les menaces.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Bâtiments publics
                </h3>
                <p className="text-muted-foreground">
                  Protégez les tribunaux, administrations, musées et autres
                  lieux recevant du public contre l&apos;introduction
                  d&apos;objets dangereux.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Événements et manifestations
                </h3>
                <p className="text-muted-foreground">
                  Assurez la sécurité des concerts, conférences, salons et
                  autres événements rassemblant un grand nombre de personnes.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Avantages de nos solutions de détection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">
                  Sécurité renforcée
                </h3>
                <p className="text-muted-foreground">
                  Détectez efficacement les objets dangereux ou interdits avant
                  qu&apos;ils ne pénètrent dans vos locaux, pour une protection
                  optimale des personnes et des biens.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">
                  Fluidité des contrôles
                </h3>
                <p className="text-muted-foreground">
                  Nos équipements permettent des contrôles rapides et efficaces,
                  limitant les files d&apos;attente et les désagréments pour les
                  personnes contrôlées.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">
                  Conformité réglementaire
                </h3>
                <p className="text-muted-foreground">
                  Nos solutions respectent les normes et réglementations en
                  vigueur en matière de sécurité et de protection contre les
                  rayonnements.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Adaptabilité</h3>
                <p className="text-muted-foreground">
                  Nos systèmes s&apos;adaptent à vos besoins spécifiques et à la
                  configuration de vos locaux, pour une sécurité sur mesure.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Besoin de solutions de détection fiables ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins
              en matière de détection de métaux et de contrôle par rayons X, et
              obtenir un devis personnalisé.
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
