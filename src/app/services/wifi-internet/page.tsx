import Image from "next/image";
import { Wifi, Signal, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function WifiInternetPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Solutions Wi-Fi & Internet" },
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
                  Solutions Wi-Fi & Internet
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
          <header className="py-20 px-4">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">
                Solutions Wi-Fi & Internet
              </h1>
              <p className="text-xl">
                Connectivité sans fil optimisée pour votre entreprise
              </p>
            </div>
          </header>

          <main className="container mx-auto px-4 py-16">
            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center">
                Nos Services Wi-Fi & Internet
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Wifi className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Réseaux sans fil
                  </h3>
                  <p>
                    Conception et déploiement de réseaux Wi-Fi performants et
                    sécurisés pour tous types d&apos;environnements.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Signal className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Optimisation de couverture
                  </h3>
                  <p>
                    Analyse et amélioration de la couverture Wi-Fi pour éliminer
                    les zones mortes et assurer une connectivité stable.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Smartphone className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Hotspots</h3>
                  <p>
                    Installation de points d&apos;accès Wi-Fi publics sécurisés
                    avec portail captif personnalisé.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center">
                Notre Expertise
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Schéma de couverture Wi-Fi dans un bâtiment"
                  width={600}
                  height={400}
                  className="w-full h-auto mb-6 rounded-lg"
                />
                <p className="text-lg">
                  Chez L2BS Technology Corp, nous concevons des solutions Wi-Fi
                  et Internet adaptées à vos besoins spécifiques. Notre équipe
                  d&apos;experts analyse votre environnement pour optimiser la
                  couverture et les performances de votre réseau sans fil,
                  assurant une connectivité fiable et sécurisée pour tous vos
                  appareils et utilisateurs.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-8 text-center">
                Pourquoi Choisir L2BS pour vos Solutions Wi-Fi & Internet ?
              </h2>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>
                  Expertise technique approfondie dans les technologies Wi-Fi
                  les plus récentes
                </li>
                <li>
                  Solutions sur mesure adaptées à votre infrastructure et vos
                  besoins spécifiques
                </li>
                <li>
                  Optimisation continue pour garantir des performances optimales
                </li>
                <li>Support technique réactif et maintenance proactive</li>
              </ul>
            </section>
          </main>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à améliorer votre connectivité ?
            </h2>
            <p className="mb-4">
              Contactez-nous dès aujourd&apos;hui pour une consultation gratuite
              sur vos besoins en Wi-Fi et Internet.
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
