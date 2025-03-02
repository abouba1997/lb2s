import Image from "next/image";
import Link from "next/link";
import { Network, Cable, Server, Wifi, Lock, Phone } from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function InfrastructureNetworkingPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Infrastructure Réseau & Câblage" },
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
              Infrastructure Réseau & Câblage
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions d&apos;infrastructure réseau performantes et
              évolutives pour connecter efficacement vos systèmes et
              équipements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Infrastructure réseau moderne"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                Connectivité fiable et sécurisée
              </h2>
              <p className="text-muted-foreground mb-6">
                Chez L2BS Technology Corp, nous concevons, installons et
                maintenons des infrastructures réseau robustes et évolutives qui
                répondent aux besoins actuels et futurs de votre entreprise.
              </p>
              <p className="text-muted-foreground">
                Nos solutions d&apos;infrastructure réseau et de câblage sont
                conçues pour offrir des performances optimales, une fiabilité
                maximale et une sécurité renforcée.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Cable className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Câblage structuré</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nous réalisons des installations de câblage structuré conformes
                aux normes internationales, pour une connectivité fiable et
                pérenne.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Câblage cuivre Cat5e, Cat6, Cat6a, Cat7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Fibre optique monomode et multimode</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Baies et armoires de brassage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Certification et documentation complète</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Câblage structuré"
                width={400}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Équipements actifs</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nous fournissons et configurons des équipements réseau de
                qualité professionnelle pour des performances optimales et une
                sécurité renforcée.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Commutateurs (switches) managés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Routeurs et pare-feu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Points d&apos;accès Wi-Fi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Serveurs et stockage réseau</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Rack avec switchs et routeurs"
                width={400}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Wifi className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Solutions Wi-Fi</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nous concevons et déployons des réseaux Wi-Fi performants et
                sécurisés, adaptés à vos besoins de mobilité et de connectivité
                sans fil.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Étude de couverture radio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Wi-Fi 6 (802.11ax) et Wi-Fi 6E</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Contrôleurs Wi-Fi centralisés ou cloud</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Sécurité et authentification avancées</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Couverture Wi-Fi dans un bâtiment"
                width={400}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Architecture réseau</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nous concevons des architectures réseau adaptées à vos besoins,
                en tenant compte de vos contraintes techniques, budgétaires et
                de sécurité.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Conception de réseaux LAN/WAN</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Segmentation et VLANs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Redondance et haute disponibilité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Documentation technique détaillée</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Architecture réseau"
                width={400}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg mb-16">
            <h2 className="text-2xl font-bold mb-6">
              Services complémentaires
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Téléphonie IP & VoIP
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Nous déployons des solutions de téléphonie IP modernes et
                  performantes pour optimiser vos communications
                  d&apos;entreprise.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>IPBX et centraux téléphoniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Téléphones IP et softphones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Communications unifiées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Visioconférence et collaboration</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Sécurité Réseau & Cybersécurité
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Nous mettons en place des solutions de sécurité réseau
                  robustes pour protéger vos données et vos systèmes contre les
                  menaces.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Pare-feu nouvelle génération</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>VPN et accès sécurisés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Détection et prévention d&apos;intrusion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Surveillance et analyse des menaces</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Notre approche
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-card rounded-lg p-4 text-center">
                <div className="bg-primary/10 p-3 rounded-full mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                  <span className="font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Audit et analyse</h3>
                <p className="text-sm text-muted-foreground">
                  Évaluation de vos besoins et de votre infrastructure existante
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 text-center">
                <div className="bg-primary/10 p-3 rounded-full mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                  <span className="font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Conception</h3>
                <p className="text-sm text-muted-foreground">
                  Élaboration d&apos;une solution sur mesure adaptée à vos
                  besoins
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 text-center">
                <div className="bg-primary/10 p-3 rounded-full mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                  <span className="font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Déploiement</h3>
                <p className="text-sm text-muted-foreground">
                  Installation et configuration professionnelles de votre
                  infrastructure
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 text-center">
                <div className="bg-primary/10 p-3 rounded-full mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                  <span className="font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-sm text-muted-foreground">
                  Maintenance, supervision et assistance technique continue
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Avantages de nos solutions d&apos;infrastructure réseau
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Performance</h3>
                <p className="text-muted-foreground">
                  Nos infrastructures réseau offrent des performances optimales
                  pour répondre aux exigences de vos applications métier et
                  garantir la productivité de vos équipes.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Fiabilité</h3>
                <p className="text-muted-foreground">
                  Nous concevons des réseaux robustes et redondants pour assurer
                  une disponibilité maximale de vos services et minimiser les
                  interruptions.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Évolutivité</h3>
                <p className="text-muted-foreground">
                  Nos solutions sont conçues pour évoluer avec votre entreprise,
                  vous permettant d&apos;ajouter facilement de nouveaux
                  utilisateurs, sites ou applications.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Besoin d&apos;une infrastructure réseau performante ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins
              en matière d&apos;infrastructure réseau et obtenir un devis
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
