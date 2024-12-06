"use client";

import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import React from "react";

const Page404 = () => {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen">
      <Header />
      <div className="absolute bg-map bg-opacity-75 bg-contain bg-no-repeat bg-center !z-[-1] w-full h-full inset-0"></div>
      <div className="max-w-screen-lg min-[1200px]:flex-row flex-col h-screen flex items-center justify-center min-[1200px]:justify-between mx-auto text-abricot !z-10">
        <div className="mx-auto w-1/3 flex max-w-2xl flex-col items-center justify-center gap-5 min-[1200px]:py-24 py-5">
          <h1
            className="min-[1200px]:text-[100px] text-[60px] font-extrabold text-abricot custom-syne"
            style={{ lineHeight: "1em" }}
          >
            404
          </h1>
          <h4 className="text-xl xs:text-4xl text-center whitespace-nowrap font-semibold">
            Page non Trouvée
          </h4>
        </div>
        <div className="flex sm:w-1/3 w-full mx-auto flex-col sm:items-start items-center justify-center gap-5 text-white">
          <p className="sm:px-0 px-4 text-sm sm:text-lg text-center">
            La page que vous recherchez n&apos;existe pas, elle a peut-être été
            déplacée ou supprimée.
          </p>
          <button
            onClick={() => router.back()}
            className="bg-transparent cursor-pointer sm:px-[60px] px-8 border-[#E9806E] h-[70px] text-[16px] whitespace-nowrap inline-flex items-center justify-center text-center text-white font-bold rounded-full border-2 shadow-[inset_0_0_0_0_#E9806E] hover:shadow-[inset_0_0_0_1px_#E9806E] backdrop-blur-sm transition-[cubic-bezier(0,0,.3642,1)] duration-300"
          >
            Retour à la page d&apos;accueil
          </button>
        </div>
      </div>
      <div className="absolute h-24 w-full bottom-0 left-0 flex items-center justify-between">
        <div className="flex sm:flex-row flex-col sm:gap-0 gap-4 w-full sm:justify-between justify-center sm:items-start items-center px-8">
          <p className="text-sm">
            © LB2S Technology Corp {new Date().getFullYear()}.
          </p>
          <p className="text-sm">Tous droits reservés</p>
        </div>
      </div>
    </div>
  );
};

export default Page404;
