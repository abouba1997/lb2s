import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: "Systèmes de Vidéosurveillance", percentage: 99 },
  { name: "Contrôle d'Accès", percentage: 99 },
  { name: "Consultation IT", percentage: 89 },
  { name: "Développement Logiciel", percentage: 85 },
  { name: "Développement Web", percentage: 90 },
  { name: "Développement d'Applications", percentage: 95 },
  { name: "Cybersécurité", percentage: 85 },
  { name: "Déploiement de Réseaux", percentage: 80 },
  { name: "Maintenance Informatique", percentage: 90 },
];

const Skills = () => {
  return (
    <section className="bg-white pt-32 pb-24 relative z-0">
      <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8 z-10">
        <div className="flex flex-wrap mb-[90px]">
          <div className="w-1/2">
            <h2 className="text-base flex items-center justify-start relative pl-5 font-medium custom-syne text-[#121820] mb-8 before:absolute before:content-[''] before:top-1/2 before:translate-y-[-50%] before:rounded-full before:left-0 before:w-2 before:h-2 before:bg-abricot">
              Notre Expertise
            </h2>
            <h2 className="text-[42px] text-[#121820] mb-8 custom-syne font-semibold leading-[140%]">
              <span className="text-abricot">Réussite</span> en Affaires Grâce à
              la Technologie
            </h2>
          </div>
          <p className="text-gray-500 mb-10 w-1/2 flex items-end">
            Nous offrons une large gamme de compétences techniques pour
            accompagner la transformation numérique de votre entreprise.
            Découvrez nos domaines d&apos;expertise ci-dessous
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <span className="font-semibold leading-[140%] text-[#121820] custom-syne mb-7">
                  {skill.name}
                </span>
                <span className="text-gray-500 mb-7">{skill.percentage}%</span>
              </div>
              <div className="relative mb-[60px] w-full h-1 bg-gray-200 rounded-full">
                <div
                  className="absolute top-0 left-0 h-1 rounded-full bg-abricot"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
          <div className="flex items-center mb-5">
            <Link
              href="/about"
              className="custom-syne group text-[16px] leading-4 text-[#121820] font-semibold whitespace-nowrap inline-flex items-center decoration-0"
            >
              <span className="capitalize">En savoir plus</span>
              <div className="flex items-center rounded-full bg-abricot m-4 p-1 group-hover:transform group-hover:translate-x-2 transition-all duration-500">
                <ArrowRight className="w-6 h-6" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
