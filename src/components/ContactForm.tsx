"use client";

import React from "react";

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submit logic here
    console.log("Form submitted");
  };

  return (
    <div className="pt-32 relative z-0">
      <div className="absolute bg-lb2ss bg-contain bg-no-repeat bg-center z-30 w-56 h-36 top-0 right-[20%]"></div>
      <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8 z-10 mb-[100px]">
        <h1 className="text-4xl capitalize font-bold mb-16 leading-[140%]">
          Contactez <span className="text-abricot">Nous</span>
        </h1>
        <form onSubmit={handleSubmit} className="bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-10">
              <div className="flex flex-col">
                <label className="text-sm mb-2 text-abricot">
                  Nom <span className="text-red-500 text-lg">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Entrez votre nom et prenom"
                  className="p-3 rounded-md border"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-2 text-abricot">
                  Adresse Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Votre addresse email"
                  className="p-3 rounded-md border"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-2 text-abricot">
                  Telephone <span className="text-gray-400">Optional</span>
                </label>
                <input
                  type="tel"
                  placeholder="Votre numero de telephone"
                  className="p-3 rounded-md border w-full"
                />
              </div>
            </div>
            <div className="w-full h-full">
              <div className="flex flex-col w-full h-full">
                <label className="text-sm mb-2 text-abricot">
                  Message <span className="text-red-500 text-lg">*</span>
                </label>
                <textarea
                  placeholder="Message"
                  className="p-3 rounded-md border w-full h-full"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-10 bg-abricot text-black font-bold py-5 px-6 rounded-full hover:bg-orange-500 transition duration-200 w-full"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
