import React from "react";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  icon: JSX.Element;
};

const ServiceCard = ({
  number,
  title,
  description,
  icon,
}: ServiceCardProps) => (
  <div className="flex items-start justify-between space-x-4 p-8">
    <div className="flex items-center justify-center w-20 h-20 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-abricot !mb-[30px]">
        {number} <span className="text-black">{title}</span>
      </h3>
      <p className="text-gray-500">{description}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="bg-white pt-32 pb-24 relative z-0">
      <div className="absolute bg-lb2s bg-contain bg-no-repeat bg-center z-30 w-56 h-36 top-0 right-[20%]"></div>
      <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="text-[42px] !mb-[30px] leading-[140%] font-semibold text-gray-900 custom-syne">
            Comment Peut-On <span className="text-abricot">Vous Aider</span>?
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-black mb-6 sm:mb-[60px] sm:mt-[30px]">
              Services IT
            </h3>
            <div className="relative flex bg-white w-full">
              <div className="w-full h-[2px] bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot"></div>
            </div>
            <ServiceCard
              number="01"
              title="Dedicated Team"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              icon={
                <span className="w-full text-[48px] rounded-full flex items-center justify-center">
                  🌩️
                </span>
              }
            />
            <div className="relative flex bg-white w-full">
              <div className="w-full h-[2px] bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot"></div>
            </div>
            <ServiceCard
              number="02"
              title="QA and Testing"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              icon={
                <span className="w-full text-[48px] rounded-full flex items-center justify-center">
                  🔔
                </span>
              }
            />
            <div className="relative flex bg-white w-full">
              <div className="w-full h-[2px] bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot"></div>
            </div>
            <ServiceCard
              number="02"
              title="QA and Testing"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              icon={
                <span className="w-full text-[48px] rounded-full flex items-center justify-center">
                  🔔
                </span>
              }
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black mb-6 sm:mb-[60px] sm:mt-[30px]">
              Services de Sécurité
            </h3>
            <div className="relative flex bg-white w-full">
              <div className="w-full h-[2px] bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot"></div>
            </div>
            <ServiceCard
              number="04"
              title="Blockchain"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              icon={
                <span className="w-full text-[48px] rounded-full flex items-center justify-center">
                  ⚙️
                </span>
              }
            />
            <div className="relative flex bg-white w-full">
              <div className="w-full h-[2px] bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot"></div>
            </div>
            <ServiceCard
              number="05"
              title="Artificial Intelligence"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              icon={
                <span className="w-full text-[48px] rounded-full flex items-center justify-center">
                  ⚡
                </span>
              }
            />
            <div className="relative flex bg-white w-full">
              <div className="w-full h-[2px] bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot"></div>
            </div>
            <ServiceCard
              number="05"
              title="Artificial Intelligence"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              icon={
                <span className="w-full text-[48px] rounded-full flex items-center justify-center">
                  ⚡
                </span>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
