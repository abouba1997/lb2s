import { Wrench, Flag, Rocket, Scale, ArrowRight } from "lucide-react";
import Link from "next/link";

const cardData = [
  {
    icon: Wrench,
    title: "Penser Grand",
    description:
      "Chez LB2S, nous concevons des solutions sur mesure qui répondent aux besoins spécifiques de nos clients, tout en anticipant leur évolution future.",
  },
  {
    icon: Flag,
    title: "Commencer Petit",
    description:
      "Nous croyons en l’importance de démarrer avec des projets ciblés qui s'adaptent facilement à la croissance et aux défis futurs.",
  },
  {
    icon: Rocket,
    title: "Créer Rapidement",
    description:
      "Grâce à notre approche agile, nous délivrons rapidement des solutions efficaces pour sécuriser vos infrastructures et systèmes informatiques.",
  },
  {
    icon: Scale,
    title: "Innover à Grande Échelle",
    description:
      "Nous accompagnons la croissance de votre entreprise avec des solutions scalables et innovantes pour un avenir sécurisé et performant.",
  },
];

const Collaboration = () => {
  return (
    <section className="bg-gray-100 pt-32 pb-24 relative z-0">
      {/* Background Image */}
      <div className="absolute bg-lb2s bg-contain bg-no-repeat bg-center z-30 w-56 h-36 top-0 right-[20%]"></div>
      <div className="absolute bg-lb2s rotate-180 bg-contain bg-no-repeat bg-center z-30 w-56 h-36 bottom-0 left-[20%]"></div>
      <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8 z-10">
        {/* Title */}
        <h2 className="text-base flex items-center justify-start relative pl-5 font-medium custom-syne text-[#121820] mb-8 before:absolute before:content-[''] before:top-1/2 before:translate-y-[-50%] before:rounded-full before:left-0 before:w-2 before:h-2 before:bg-abricot">
          Découvrez Notre Entreprise
        </h2>
        <h1 className="text-4xl capitalize font-bold text-[#121820] mb-20">
          Comment peut-on <span className="text-abricot">Collaborer</span> Avec
          Vous
        </h1>

        {/* Collaboration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex-wrap">
          {cardData.map((card, index) => (
            <div key={index} className="flex flex-col mb-[60px]">
              <div className="flex items-center justify-start space-x-4 mb-8">
                <card.icon className="text-abricot w-6 h-6" />
                <h3 className="text-xl font-bold text-[#121820]">
                  {card.title}
                </h3>
              </div>
              <div>
                <p className="text-gray-500">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap">
          <div className="w-1/2 flex justify-start items-center">
            <Link
              href="/projects"
              className="custom-syne group text-[16px] leading-4 text-[#121820] font-semibold whitespace-nowrap inline-flex items-center decoration-0"
            >
              <span className="capitalize">En savoir plus</span>
              <div className="flex items-center rounded-full bg-abricot m-4 p-1 group-hover:transform group-hover:translate-x-2 transition-all duration-500">
                <ArrowRight className="w-6 h-6" />
              </div>
            </Link>
          </div>
          <div className="w-1/2 flex justify-end">
            <Link
              href="/careers"
              className="bg-transparent cursor-pointer px-[60px] border-[#E9806E] h-[70px] text-[16px] whitespace-nowrap inline-flex items-center justify-center text-center text-[#121820] font-bold rounded-full border-2 shadow-[inset_0_0_0_0_#E9806E] hover:shadow-[inset_0_0_0_1px_#E9806E] backdrop-blur-sm transition-[cubic-bezier(0,0,.3642,1)] duration-300"
            >
              Carrières
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
