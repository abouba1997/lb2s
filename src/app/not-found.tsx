"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Page404 = () => {
  const router = useRouter();

  return (
    <div className="bg-white w-full h-full">
      <div className="container h-screen flex items-center justify-center mx-auto bg-white text-abricot">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-5 py-24">
          <h1
            className="text-[100px] font-extrabold text-primary custom-syne"
            style={{ lineHeight: "1em" }}
          >
            404
          </h1>
          <h4 className="text-4xl font-semibold">Page non Trouvée</h4>
          <p className="text-neutral-500">
            La page que vous recherchez n&apos;existe pas ou a été déplacée
          </p>
          <div className="flex items-center justify-center gap-5">
            <button onClick={() => router.back()} className="px-5 py-4">
              Retour
            </button>
            <Link
              href="/"
              className="border-2 border-primary text-primary p-2 transition-all hover:bg-abricot hover:border-abricot hover:text-white duration-500"
            >
              Page d&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
