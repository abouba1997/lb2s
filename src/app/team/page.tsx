import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

const TeamPage = () => {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Notre Équipe" },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Lamine Traore",
      role: "CEO ITSulu",
      image: "/team/img1.jpg",
    },
    {
      id: 2,
      name: "Jane Meldrum",
      role: "Designer",
      image: "/team/img2.jpg",
    },
    {
      id: 3,
      name: "Roy Ellawala",
      role: "App Developer",
      image: "/team/img3.jpg",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Product Manager",
      image: "/team/img4.jpg",
    },
    {
      id: 5,
      name: "Michael Chen",
      role: "Lead Engineer",
      image: "/team/img5.jpg",
    },
    {
      id: 6,
      name: "Emma Wilson",
      role: "UX Designer",
      image: "/team/img6.jpg",
    },
  ];

  const values = [
    {
      id: "01",
      title: "Productivité",
      description:
        "Nous nous efforçons d’atteindre les plus hauts niveaux d’efficacité et de performance dans chaque projet, en utilisant des solutions technologiques innovantes pour répondre aux besoins de nos clients.",
    },
    {
      id: "02",
      title: "Transparence",
      description:
        "La transparence est au cœur de notre relation avec nos clients, partenaires et collaborateurs. Nous croyons en une communication honnête et ouverte à chaque étape de nos projets.",
    },
    {
      id: "03",
      title: "Personnalisation",
      description:
        "Nous adaptons nos services aux besoins uniques de chaque client, en fournissant des solutions sur mesure qui garantissent des résultats optimaux et un haut niveau de satisfaction.",
    },
    {
      id: "04",
      title: "Engagement",
      description:
        "Notre volonté de réussir et notre engagement envers l'excellence sont ce qui nous distingue. Nous travaillons sans relâche pour offrir des services de qualité tout en respectant nos valeurs fondamentales.",
    },
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
                  Équipe de Direction
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
        <div className="container mx-auto px-4 py-16">
          {/* Hero Text */}
          <div className="text-center mb-20">
            <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold leading-tight xl:max-w-[1420px] px-8 xl:w-full mx-auto w-full">
              Découvrez l’équipe dynamique et passionnée de{" "}
              <span className="text-orange-500">LB2S Technology Corp</span>, des
              experts engagés à transformer vos projets en succès grâce à leur
              savoir-faire et leur dévouement.
            </h1>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-7xl mx-auto px-4 md:px-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center group team-member"
              >
                <div className="relative mil-image-frame transition-all duration-500">
                  {/* Profile Image Container */}
                  <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover sm:grayscale sm:group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div
                    style={{ transition: ".4s cubic-bezier(0, 0, .3642, 1)" }}
                    className="absolute bottom-0 right-0 rounded-full scale-0 bg-orange-500 opacity-0 group-hover:opacity-100 group-hover:scale-100 w-28 h-28 transition-all duration-500"
                  ></div>
                </div>

                {/* Name and Role */}
                <h2 className="mt-6 text-xl font-semibold group-hover:">
                  {member.name}
                </h2>
                <p
                  className={`mt-2 text-gray-600 group-hover:text-orange-500 transition-all duration-500`}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="relative flex xl:max-w-[1420px] px-8 bg-white xl:w-full mx-auto sm:px-6 lg:px-8">
          <div className="w-full h-1 bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot after:content-[''] after:w-[25px] after:border-l-[5px] after:border-l-[#FFFFFF] after:absolute after:h-full after:right-0 after:top-0 after:bg-abricot "></div>
        </div>
      </div>

      <div className="w-full bg-white">
        <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-default-text">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Les valeurs qui{" "}
              <span className="text-orange-500">Nous Guident</span>
            </h2>
            <p className="mt-4 max-w-3xl mx-auto">
              C&apos;est un fait établi depuis longtemps qu&apos;un lecteur sera
              distrait par le contenu lisible d&apos;une page lorsqu&apos;il
              regarde sa mise en page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value) => (
              <div key={value.id} className="text-center">
                <div className="relative inline-block mb-6">
                  <Zap className="w-12 h-12 stroke-2" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-orange-500 rounded-full" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-orange-500 font-medium">
                      {value.id}.
                    </span>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default TeamPage;
