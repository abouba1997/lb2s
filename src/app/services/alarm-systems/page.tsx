import Image from "next/image";
import Link from "next/link";
import { Bell, ShieldAlert, Smartphone, Wifi } from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export default function AlarmSystemsPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Systèmes d'Alarme Intrusion" },
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
                  Systèmes d&apos;Alarme Intrusion
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
              Systèmes d&apos;Alarme Intrusion
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions d&apos;alarme anti-intrusion performantes pour
              protéger vos locaux contre les tentatives d&apos;effraction et les
              intrusions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Système d'alarme anti-intrusion"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                Protection contre les intrusions
              </h2>
              <p className="text-muted-foreground mb-6">
                Chez L2BS Technology Corp, nous concevons et installons des
                systèmes d&apos;alarme anti-intrusion sur mesure qui répondent
                aux besoins spécifiques de votre entreprise ou de votre
                domicile.
              </p>
              <p className="text-muted-foreground">
                Nos solutions d&apos;alarme utilisent les technologies les plus
                récentes pour vous offrir une sécurité optimale et une
                tranquillité d&apos;esprit totale.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <ShieldAlert className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Détection de mouvement
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nos détecteurs de mouvement avancés identifient toute présence
                non autorisée dans vos locaux et déclenchent immédiatement une
                alerte.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Détecteurs infrarouges passifs (PIR)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Détecteurs à double technologie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Détecteurs anti-masque</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Couverture adaptée à chaque espace</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Détecteur de mouvement"
                width={400}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Alertes et sirènes</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nos systèmes d&apos;alerte dissuadent les intrus et alertent les
                occupants et le voisinage en cas de tentative d&apos;effraction.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Sirènes intérieures puissantes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Sirènes extérieures avec flash</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Alertes sonores et visuelles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Sirènes auto-alimentées</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Sirène d'alarme"
                width={400}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Alertes en temps réel</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Recevez des notifications instantanées sur votre smartphone ou
                tablette en cas de déclenchement d&apos;alarme, où que vous
                soyez.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Notifications push sur mobile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>SMS et appels automatiques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Alertes par email</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Vérification visuelle à distance</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Alertes sur smartphone"
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
                <h3 className="text-xl font-semibold">
                  Connectivité et télésurveillance
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nos systèmes d&apos;alarme peuvent être connectés à un centre de
                télésurveillance pour une protection 24h/24 et 7j/7.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Connexion GSM/GPRS sécurisée</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Transmission IP</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Double voie de communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Intervention rapide en cas d&apos;alarme</span>
                </li>
              </ul>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Centre de télésurveillance"
                width={400}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>

          <div className="bg-muted rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Types de protection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Protection périmétrique
                </h3>
                <p className="text-muted-foreground">
                  Détecte les tentatives d&apos;intrusion avant même que
                  l&apos;intrus ne pénètre dans vos locaux, grâce à des
                  détecteurs installés sur les portes, fenêtres et autres points
                  d&apos;accès.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Protection volumétrique
                </h3>
                <p className="text-muted-foreground">
                  Surveille l&apos;intérieur de vos locaux grâce à des
                  détecteurs de mouvement qui couvrent des zones entières et
                  détectent toute présence non autorisée.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Protection ponctuelle
                </h3>
                <p className="text-muted-foreground">
                  Sécurise des objets ou zones spécifiques de haute valeur,
                  comme des coffres-forts, des œuvres d&apos;art ou des
                  équipements sensibles.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Applications de nos systèmes d&apos;alarme
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">
                  Entreprises et commerces
                </h3>
                <p className="text-muted-foreground mb-4">
                  Protégez vos locaux professionnels, bureaux, commerces et
                  entrepôts contre les cambriolages et les intrusions. Sécurisez
                  vos biens et équipements de valeur.
                </p>
                <Image
                  src="/placeholder.svg?height=150&width=300"
                  alt="Alarme pour entreprise"
                  width={300}
                  height={150}
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">
                  Résidences et habitations
                </h3>
                <p className="text-muted-foreground mb-4">
                  Protégez votre domicile et votre famille avec des systèmes
                  d&apos;alarme fiables et faciles à utiliser. Gardez
                  l&apos;esprit tranquille, que vous soyez chez vous ou absent.
                </p>
                <Image
                  src="/placeholder.svg?height=150&width=300"
                  alt="Alarme résidentielle"
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
                <h3 className="font-semibold mb-2">Étude de sécurité</h3>
                <p className="text-sm text-muted-foreground">
                  Analyse de vos locaux et identification des vulnérabilités
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
                  Mise en place professionnelle de votre système d&apos;alarme
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
              Besoin d&apos;un système d&apos;alarme fiable ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins
              en matière de sécurité et obtenir un devis personnalisé pour votre
              système d&apos;alarme anti-intrusion.
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
