import Image from "next/image";
import Link from "next/link";
import { KeyRound, Fingerprint, Clock, Shield } from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function AccessControlPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Contrôle d'Accès" },
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
              Contrôle d&apos;Accès
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions de contrôle d&apos;accès intelligentes pour
              sécuriser vos locaux et gérer efficacement les entrées et sorties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Système de contrôle d'accès"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                Contrôle d&apos;accès sécurisé
              </h2>
              <p className="text-muted-foreground mb-6">
                Chez L2BS Technology Corp, nous concevons et installons des
                systèmes de contrôle d&apos;accès sur mesure qui répondent aux
                besoins spécifiques de votre entreprise ou de votre institution.
              </p>
              <p className="text-muted-foreground">
                Nos solutions de contrôle d&apos;accès utilisent les
                technologies les plus récentes pour vous offrir une sécurité
                optimale tout en facilitant la gestion des accès.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <KeyRound className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Badges RFID et cartes à puce
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nos systèmes de contrôle d&apos;accès par badges RFID et cartes
                à puce offrent une solution fiable et facile à gérer pour
                sécuriser vos locaux.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Badges personnalisables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Technologie RFID sécurisée</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Cartes à puce avec cryptage avancé</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Lecteurs de badges élégants et discrets</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Badges RFID et lecteur"
                width={400}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Fingerprint className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Biométrie</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nos solutions biométriques offrent un niveau de sécurité
                supérieur en utilisant les caractéristiques physiques uniques de
                chaque individu.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Lecteurs d&apos;empreintes digitales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Reconnaissance faciale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Reconnaissance de l&apos;iris</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Authentification multi-facteurs</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Lecteur biométrique"
                width={400}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Gestion des accès et horaires
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Notre logiciel de gestion des accès vous permet de définir
                précisément qui peut accéder à quelles zones et à quels moments,
                pour un contrôle total.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Définition de plages horaires d&apos;accès</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Gestion des niveaux d&apos;autorisation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Rapports d&apos;activité détaillés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Intégration avec les systèmes RH</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Interface de gestion des accès"
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
                  Intégration et sécurité
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nos systèmes de contrôle d&apos;accès s&apos;intègrent
                parfaitement avec vos autres équipements de sécurité pour une
                protection complète.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Intégration avec la vidéosurveillance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Connexion aux systèmes d&apos;alarme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Gestion centralisée de la sécurité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Protocoles de communication sécurisés</span>
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
              Applications de nos systèmes de contrôle d&apos;accès
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Entreprises</h3>
                <p className="text-muted-foreground">
                  Sécurisez vos bureaux et zones sensibles. Gérez les accès des
                  employés, visiteurs et prestataires. Suivez les entrées et
                  sorties pour améliorer la sécurité et la gestion du personnel.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Institutions</h3>
                <p className="text-muted-foreground">
                  Protégez les établissements publics, écoles, hôpitaux et
                  administrations. Contrôlez les flux de personnes et sécurisez
                  les zones réservées au personnel autorisé.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Résidences</h3>
                <p className="text-muted-foreground">
                  Sécurisez les immeubles résidentiels et copropriétés. Gérez
                  les accès des résidents et visiteurs. Améliorez la sécurité
                  tout en facilitant la vie quotidienne des habitants.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Avantages de nos systèmes de contrôle d&apos;accès
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">
                  Sécurité renforcée
                </h3>
                <p className="text-muted-foreground">
                  Limitez l&apos;accès à vos locaux aux seules personnes
                  autorisées. Protégez vos biens, vos données et vos
                  collaborateurs contre les intrusions.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">
                  Gestion simplifiée
                </h3>
                <p className="text-muted-foreground">
                  Fini les clés perdues ou dupliquées. Gérez facilement les
                  droits d&apos;accès depuis une interface centralisée. Ajoutez
                  ou supprimez des utilisateurs en quelques clics.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">
                  Traçabilité complète
                </h3>
                <p className="text-muted-foreground">
                  Suivez tous les mouvements d&apos;entrée et de sortie. Générez
                  des rapports détaillés pour analyser les flux et identifier
                  d&apos;éventuelles anomalies.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Évolutivité</h3>
                <p className="text-muted-foreground">
                  Nos systèmes s&apos;adaptent à l&apos;évolution de vos
                  besoins. Ajoutez facilement de nouveaux points d&apos;accès ou
                  de nouvelles fonctionnalités selon vos exigences.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Besoin d&apos;un système de contrôle d&apos;accès fiable ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins
              en matière de contrôle d&apos;accès et obtenir un devis
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
