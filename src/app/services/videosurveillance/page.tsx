import Image from "next/image";
import Link from "next/link";
import { Camera, Shield, Eye, Server } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function VideosurveillancePage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Vidéosurveillance" },
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
                  Vidéosurveillance
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
              Vidéosurveillance (CCTV)
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions de vidéosurveillance avancées pour sécuriser vos
              locaux et protéger vos biens et vos collaborateurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Système de vidéosurveillance"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                Surveillance vidéo de pointe
              </h2>
              <p className="text-muted-foreground mb-6">
                Chez L2BS Technology Corp, nous concevons et installons des
                systèmes de vidéosurveillance sur mesure qui répondent aux
                besoins spécifiques de votre entreprise ou de votre domicile.
              </p>
              <p className="text-muted-foreground">
                Nos solutions de vidéosurveillance utilisent les technologies
                les plus récentes pour vous offrir une sécurité optimale et une
                tranquillité d&apos;esprit totale.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg mb-16">
            <h2 className="text-2xl font-bold mb-6">
              Nos solutions de vidéosurveillance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Camera className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Caméras IP haute définition
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Nos caméras IP offrent une qualité d&apos;image
                  exceptionnelle, même dans des conditions de faible luminosité,
                  pour une surveillance efficace 24h/24 et 7j/7.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Résolution 4K Ultra HD</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Vision nocturne infrarouge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Caméras intérieures et extérieures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Caméras PTZ (Pan-Tilt-Zoom)</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Enregistreurs vidéo numériques
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Nos enregistreurs NVR (Network Video Recorder) permettent de
                  stocker et de gérer efficacement vos enregistrements vidéo
                  pour une consultation facile.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Stockage sécurisé des données</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Capacité d&apos;enregistrement évolutive</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Compression H.265 pour optimiser l&apos;espace</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Recherche intelligente d&apos;événements</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Surveillance à distance
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Accédez à vos caméras de surveillance en temps réel depuis
                  n&apos;importe où dans le monde grâce à nos solutions de
                  surveillance à distance sécurisées.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Applications mobiles dédiées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Interface web sécurisée</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Notifications d&apos;alertes en temps réel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Contrôle à distance des caméras PTZ</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Analyse vidéo intelligente
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Nos systèmes intègrent des fonctionnalités d&apos;analyse
                  vidéo avancées pour détecter automatiquement les comportements
                  suspects et améliorer votre sécurité.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Détection de mouvement intelligente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Reconnaissance faciale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Détection de franchissement de ligne</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Comptage de personnes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Applications de nos systèmes de vidéosurveillance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">
                  Entreprises et commerces
                </h3>
                <p className="text-muted-foreground mb-4">
                  Protégez vos locaux, vos employés et vos marchandises contre
                  le vol et le vandalisme. Surveillez les zones sensibles et
                  contrôlez les accès à vos bâtiments.
                </p>
                <Image
                  src="/placeholder.svg?height=150&width=300"
                  alt="Vidéosurveillance pour entreprises"
                  width={300}
                  height={150}
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">
                  Sites industriels
                </h3>
                <p className="text-muted-foreground mb-4">
                  Sécurisez vos installations industrielles et surveillez les
                  processus de production. Assurez la sécurité du personnel et
                  prévenez les accidents.
                </p>
                <Image
                  src="/placeholder.svg?height=150&width=300"
                  alt="Vidéosurveillance pour sites industriels"
                  width={300}
                  height={150}
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">
                  Résidences et copropriétés
                </h3>
                <p className="text-muted-foreground mb-4">
                  Protégez votre domicile et votre famille avec des systèmes de
                  vidéosurveillance discrets et efficaces. Surveillez les
                  entrées et les zones extérieures.
                </p>
                <Image
                  src="/placeholder.svg?height=150&width=300"
                  alt="Vidéosurveillance pour résidences"
                  width={300}
                  height={150}
                  className="w-full h-auto rounded-md"
                />
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
                <h3 className="font-semibold mb-2">Étude des besoins</h3>
                <p className="text-sm text-muted-foreground">
                  Analyse de votre site et de vos exigences spécifiques
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
                <h3 className="font-semibold mb-2">Installation</h3>
                <p className="text-sm text-muted-foreground">
                  Mise en place professionnelle de votre système de
                  vidéosurveillance
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 text-center">
                <div className="bg-primary/10 p-3 rounded-full mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                  <span className="font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold mb-2">Maintenance</h3>
                <p className="text-sm text-muted-foreground">
                  Suivi et entretien régulier pour garantir la performance
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Besoin d&apos;un système de vidéosurveillance fiable ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins
              en matière de vidéosurveillance et obtenir un devis personnalisé.
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
