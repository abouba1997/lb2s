"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/lib/actions";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus("loading");

    try {
      await sendEmail({
        from: formData.email,
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
      });

      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus("error");

      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }
  };

  return (
    <div className="pt-32 pb-24 relative z-0 overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-abricot/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-3xl"></div>

      {/* Logo watermark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute bg-lb2s bg-contain bg-no-repeat bg-center z-0 w-96 h-96 top-1/4 left-1/4"
      ></motion.div>

      <div className="relative flex flex-col xl:max-w-[1420px] px-8 xl:w-full mx-auto sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-base flex items-center justify-start relative pl-5 font-medium custom-syne text-[#121820] mb-4 before:absolute before:content-[''] before:top-1/2 before:translate-y-[-50%] before:rounded-full before:left-0 before:w-2 before:h-2 before:bg-abricot">
              Contactez-nous
            </h2>
            <h1 className="text-3xl md:text-4xl capitalize font-bold mb-6 leading-[140%] text-[#121820]">
              Discutons de Votre <span className="text-abricot">Projet</span>
            </h1>
            <p className="text-gray-600 mb-10 max-w-md">
              Nous sommes là pour répondre à vos questions et vous aider à
              trouver les meilleures solutions pour votre entreprise.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="bg-abricot/10 p-3 rounded-lg text-abricot">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#121820]">Email</h3>
                  <p className="text-gray-600">contact@lb2stech.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-abricot/10 p-3 rounded-lg text-abricot">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#121820]">Téléphone</h3>
                  <p className="text-gray-600">+223 79 49 31 58</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-abricot/10 p-3 rounded-lg text-abricot">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#121820]">Adresse</h3>
                  <p className="text-gray-600">
                    Baco Djicoroni Golf, Bamako, Mali
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-[#121820] mb-4">
                Heures d&apos;ouverture
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lundi - Vendredi:</span>
                  <span className="font-medium text-gray-900">
                    8:00 - 17:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Samedi:</span>
                  <span className="font-medium text-gray-900">
                    9:00 - 13:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dimanche:</span>
                  <span className="font-medium text-gray-900">Fermé</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            {formStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#121820] mb-2">
                  Message Envoyé!
                </h3>
                <p className="text-gray-600 mb-6">
                  Merci de nous avoir contacté. Nous vous répondrons dans les
                  plus brefs délais.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="px-6 py-2 bg-abricot text-white rounded-full hover:bg-abricot/90 transition-colors duration-300"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                  <div className="flex flex-col">
                    <label className="text-sm mb-2 font-medium text-[#121820]">
                      Nom <span className="text-red-500 text-lg">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Entrez votre nom et prénom"
                      className={`p-3 rounded-md border text-[#121820] ${
                        errors.name
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 focus:border-abricot"
                      } focus:outline-none focus:ring-2 focus:ring-abricot/20 transition-colors duration-200`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm mb-2 font-medium text-[#121820]">
                      Adresse Email{" "}
                      <span className="text-red-500 text-lg">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Votre adresse email"
                      className={`p-3 rounded-md border text-[#121820] ${
                        errors.email
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 focus:border-abricot"
                      } focus:outline-none focus:ring-2 focus:ring-abricot/20 transition-colors duration-200`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm mb-2 font-medium text-[#121820]">
                      Téléphone{" "}
                      <span className="text-gray-400 text-sm">(Optionnel)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Votre numéro de téléphone"
                      className="p-3 rounded-md border border-gray-300 focus:border-abricot focus:outline-none focus:ring-2 focus:ring-abricot/20 transition-colors duration-200 text-[#121820]"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm mb-2 font-medium text-[#121820]">
                      Message <span className="text-red-500 text-lg">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Comment pouvons-nous vous aider?"
                      rows={5}
                      className={`p-3 rounded-md border text-[#121820] ${
                        errors.message
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 focus:border-abricot"
                      } focus:outline-none focus:ring-2 focus:ring-abricot/20 transition-colors duration-200 resize-none`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="w-full bg-abricot text-white font-bold py-4 px-6 rounded-full hover:bg-abricot/90 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-abricot/30 disabled:opacity-70"
                >
                  {formStatus === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>

                {formStatus === "error" && (
                  <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
                    Une erreur s&apos;est produite lors de l&apos;envoi de votre
                    message. Veuillez réessayer plus tard.
                  </div>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
