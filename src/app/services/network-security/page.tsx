import Image from "next/image";
import { Shield, Lock, Eye } from "lucide-react";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function NetworkSecurityPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Sécurité Réseau & Cybersécurité" },
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
                  Sécurité Réseau & Cybersécurité
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
                Sécurité Réseau & Cybersécurité
              </h1>
              <p className="text-xl">
                Protection avancée pour vos systèmes et données
              </p>
            </div>
          </header>

          <main className="container mx-auto px-4 py-16">
            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center">
                Nos Solutions de Sécurité
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Shield className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Pare-feu</h3>
                  <p>
                    Mise en place de pare-feu nouvelle génération pour une
                    protection complète de votre réseau.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Lock className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">VPN</h3>
                  <p>
                    Solutions VPN sécurisées pour un accès distant fiable à vos
                    ressources d&apos;entreprise.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Eye className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Surveillance des menaces
                  </h3>
                  <p>
                    Systèmes de détection et de prévention des intrusions pour
                    une vigilance 24/7.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center">
                Notre Approche en Cybersécurité
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Écran affichant un monitoring de sécurité"
                  width={600}
                  height={400}
                  className="w-full h-auto mb-6 rounded-lg"
                />
                <p className="text-lg">
                  Chez L2BS Technology Corp, nous adoptons une approche
                  proactive de la cybersécurité. Nos experts utilisent les
                  technologies les plus avancées pour protéger votre
                  infrastructure contre les menaces émergentes. Nous offrons une
                  surveillance continue, des analyses de vulnérabilité
                  régulières et des solutions de sécurité sur mesure pour
                  garantir la protection de vos actifs numériques.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-8 text-center">
                Pourquoi Choisir L2BS pour votre Sécurité Réseau ?
              </h2>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>
                  Expertise approfondie en sécurité informatique et réseaux
                </li>
                <li>
                  Solutions de sécurité multicouches pour une protection
                  complète
                </li>
                <li>
                  Conformité aux normes et réglementations de sécurité les plus
                  strictes
                </li>
                <li>Réponse rapide aux incidents et support 24/7</li>
                <li>
                  Formation et sensibilisation des employés aux bonnes pratiques
                  de sécurité
                </li>
              </ul>
            </section>
          </main>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold mb-4">
              Protégez votre entreprise dès maintenant
            </h2>
            <p className="mb-4">
              Contactez-nous pour une évaluation gratuite de la sécurité de
              votre réseau.
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
