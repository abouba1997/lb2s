import Image from "next/image";
import { Phone, MessageSquare, Video } from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function IPTelephonyPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Téléphonie IP & VoIP" },
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
                  Téléphonie IP & VoIP
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
              <h1 className="text-4xl font-bold mb-4">Téléphonie IP & VoIP</h1>
              <p className="text-xl">
                Solutions de communication unifiée pour votre entreprise
              </p>
            </div>
          </header>

          <main className="container mx-auto px-4 py-16">
            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center">
                Nos Services de Téléphonie IP
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Phone className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">IPBX</h3>
                  <p>
                    Installation et configuration de centraux téléphoniques IP
                    pour une gestion efficace des appels.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <MessageSquare className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Communication Unifiée
                  </h3>
                  <p>
                    Intégration de la voix, de la messagerie instantanée et de
                    la présence pour une collaboration optimale.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Video className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Visioconférence
                  </h3>
                  <p>
                    Solutions de visioconférence HD intégrées à votre système de
                    téléphonie IP.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center">
                Notre Expertise en VoIP
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Standard téléphonique IP avec appels en cours"
                  width={600}
                  height={400}
                  className="w-full h-auto mb-6 rounded-lg"
                />
                <p className="text-lg">
                  L2BS Technology Corp vous offre des solutions de téléphonie IP
                  à la pointe de la technologie. Nos systèmes VoIP permettent
                  une gestion flexible des appels, une réduction des coûts de
                  communication et une intégration transparente avec vos outils
                  de travail existants. Que vous soyez une petite entreprise ou
                  une grande organisation, nous avons la solution adaptée à vos
                  besoins.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-8 text-center">
                Avantages de nos Solutions de Téléphonie IP
              </h2>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>Réduction significative des coûts de communication</li>
                <li>Flexibilité et mobilité accrues pour vos employés</li>
                <li>Fonctionnalités avancées pour améliorer la productivité</li>
                <li>
                  Évolutivité pour s&apos;adapter à la croissance de votre
                  entreprise
                </li>
                <li>Intégration avec vos applications métier existantes</li>
              </ul>
            </section>
          </main>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à moderniser votre système de communication ?
            </h2>
            <p className="mb-4">
              Contactez-nous pour découvrir comment la téléphonie IP peut
              transformer votre entreprise.
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
