/* eslint-disable @next/next/no-img-element */
import React from "react";
import LOGO from "@/assets/logo/lb2s_logo_sans_font.png";

const Footer: React.FC = () => {
  return (
    <footer className="pb-7 relative z-0 text-white">
      <div className="absolute bg-map bg-opacity-75 bg-contain bg-no-repeat bg-center z-0 w-full h-full inset-0"></div>
      <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8 z-10">
        <div className="grid gap-8">
          <div>
            <div className="flex justify-center items-center mb-4">
              <img src={LOGO.src} alt="Logo" className="mr-2 h-40 w-40" />
            </div>
            <p className="text-gray-400 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
        </div>

        <div className="bg-transparent py-6">
          <div className="relative flex xl:max-w-[1420px] px-8 bg-white xl:w-full mx-auto sm:px-6 lg:px-8">
            <div className="w-full h-1 bg-[rgba(18,24,32,0.1)] relative before:content-[''] before:w-[25px] before:border-r-[5px] before:border-r-[#FFFFFF] before:absolute before:h-full before:left-0 before:top-0 before:bg-abricot after:content-[''] after:w-[25px] after:border-l-[5px] after:border-l-[#FFFFFF] after:absolute after:h-full after:right-0 after:top-0 after:bg-abricot "></div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center space-x-6 text-gray-400">
          <a href="#" className="hover:text-white">
            Facebook
          </a>
          <a href="#" className="hover:text-white">
            Instagram
          </a>
          <a href="#" className="hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white">
            Twitter
          </a>
          <a href="#" className="hover:text-white">
            YouTube
          </a>
        </div>

        {/* Bottom Links */}
        <div className="flex justify-center mt-8 text-gray-400 space-x-8">
          <a href="#" className="hover:text-white">
            Terms & Condition
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
