"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  Clock,
  Building,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { sendQuoteRequest } from "@/lib/actions";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  industry: string;
  companySize: string;
  services: string[];
  projectDescription: string;
  projectLocation: string;
  budget: string;
  timeline: string;
  referralSource: string;
  newsletter: boolean;
  terms: boolean;
}

export default function QuoteForm() {
  const [characterCount, setCharacterCount] = useState(0);
  const maxCharacters = 1000;
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    industry: "",
    companySize: "",
    services: [],
    projectDescription: "",
    projectLocation: "",
    budget: "",
    timeline: "",
    referralSource: "website",
    newsletter: false,
    terms: false,
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est requis";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Le nom de l'entreprise est requis";
    }

    if (formData.services.length === 0) {
      newErrors.services = "Veuillez sélectionner au moins un service";
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "La description du projet est requise";
    }

    if (!formData.terms) {
      newErrors.terms = "Vous devez accepter les conditions d'utilisation";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;

      if (name === "terms" || name === "newsletter") {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      } else {
        // Handle service checkboxes
        setFormData((prev) => {
          const updatedServices = checked
            ? [...prev.services, name]
            : prev.services.filter((service) => service !== name);

          return { ...prev, services: updatedServices };
        });
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));

      if (name === "projectDescription") {
        setCharacterCount(value.length);
      }
    }

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user selects
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, referralSource: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Scroll to the first error
      const firstErrorField = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setFormStatus("loading");

    try {
      await sendQuoteRequest({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        position: formData.position,
        industry: formData.industry,
        companySize: formData.companySize,
        serviceType: formData.services.join(", "),
        projectDescription: formData.projectDescription,
        projectLocation: formData.projectLocation,
        budget: formData.budget,
        timeline: formData.timeline,
        referralSource: formData.referralSource,
        newsletter: formData.newsletter,
        message: formData.projectDescription,
      });

      setFormStatus("success");
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        position: "",
        industry: "",
        companySize: "",
        services: [],
        projectDescription: "",
        projectLocation: "",
        budget: "",
        timeline: "",
        referralSource: "website",
        newsletter: false,
        terms: false,
      });
      setCharacterCount(0);

      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error sending quote request:", error);
      setFormStatus("error");

      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  if (formStatus === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
      >
        <Card className="max-w-2xl w-full p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Demande de devis envoyée avec succès!
          </h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Merci pour votre demande de devis. Notre équipe examinera et vous
            contactera dans les plus brefs délais pour discuter de votre projet.
          </p>
          <Button
            onClick={() => setFormStatus("idle")}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-md"
          >
            Faire une autre demande
          </Button>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gray-50"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Demande de Devis Détaillé - LB2S Technology Corp
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pour vous fournir un devis précis et adapté à vos besoins, veuillez
            remplir ce formulaire détaillé. Nous nous engageons à vous répondre
            dans un délai de 24 heures ouvrables.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Services List and Contact Info */}
          <motion.div variants={itemVariants}>
            <Card className="bg-primary text-primary-foreground p-8 h-full">
              <h2 className="text-2xl font-semibold mb-6">Nos Services</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full" />
                  <span>Électricité et sécurité incendie</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full" />
                  <span>Sécurité électronique</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full" />
                  <span>Équipements électromécaniques</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full" />
                  <span>Réseaux et télécommunications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full" />
                  <span>Développement de logiciels</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full" />
                  <span>Développement de sites web</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full" />
                  <span>Développement d&apos;applications mobile</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full" />
                  <span>Énergies renouvelables</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full" />
                  <span>Climatisation et plomberie</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-foreground rounded-full" />
                  <span>Gestion technique de bâtiment</span>
                </li>
              </ul>
              <div className="border-t border-primary-foreground/20 pt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <span>+223 79 49 31 58</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span>contact@lb2stech.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5" />
                  <span>Réponse sous 24h ouvrables</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="h-5 w-5" />
                  <span>Siège: Baco Djicoroni Golf, Bamako, Mali</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Enhanced Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="p-8">
              {formStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-6 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  <p>
                    Une erreur s&apos;est produite lors de l&apos;envoi de votre
                    demande. Veuillez réessayer ou nous contacter directement.
                  </p>
                </div>
              )}

              <form className="space-y-8" onSubmit={handleSubmit}>
                <motion.div variants={itemVariants}>
                  <h3 className="text-lg font-semibold mb-4">
                    Informations Personnelles
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        Prénom <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={errors.firstName ? "border-red-500" : ""}
                        required
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        Nom <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={errors.lastName ? "border-red-500" : ""}
                        required
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        E-mail <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "border-red-500" : ""}
                        required
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Téléphone <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? "border-red-500" : ""}
                        required
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-lg font-semibold mb-4">
                    Informations sur l&apos;Entreprise
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">
                        Nom de l&apos;entreprise{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={errors.company ? "border-red-500" : ""}
                        required
                      />
                      {errors.company && (
                        <p className="text-red-500 text-sm">{errors.company}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Votre poste</Label>
                      <Input
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Secteur d&apos;activité</Label>
                      <Select
                        onValueChange={(value) =>
                          handleSelectChange("industry", value)
                        }
                      >
                        <SelectTrigger id="industry">
                          <SelectValue placeholder="Sélectionnez un secteur" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="construction">
                            Construction
                          </SelectItem>
                          <SelectItem value="energy">Énergie</SelectItem>
                          <SelectItem value="manufacturing">
                            Industrie
                          </SelectItem>
                          <SelectItem value="healthcare">Santé</SelectItem>
                          <SelectItem value="education">Éducation</SelectItem>
                          <SelectItem value="retail">
                            Commerce de détail
                          </SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companySize">
                        Taille de l&apos;entreprise
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleSelectChange("companySize", value)
                        }
                      >
                        <SelectTrigger id="companySize">
                          <SelectValue placeholder="Nombre d'employés" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employés</SelectItem>
                          <SelectItem value="11-50">11-50 employés</SelectItem>
                          <SelectItem value="51-200">
                            51-200 employés
                          </SelectItem>
                          <SelectItem value="201-500">
                            201-500 employés
                          </SelectItem>
                          <SelectItem value="501+">501+ employés</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-lg font-semibold mb-4">
                    Détails du Projet
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>
                        Services requis (sélectionnez tous ceux qui
                        s&apos;appliquent){" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="electricity"
                            name="electricity"
                            checked={formData.services.includes("electricity")}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: [...prev.services, "electricity"],
                                }));
                              } else {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: prev.services.filter(
                                    (s) => s !== "electricity"
                                  ),
                                }));
                              }
                              if (errors.services) {
                                setErrors((prev) => {
                                  const newErrors = { ...prev };
                                  delete newErrors.services;
                                  return newErrors;
                                });
                              }
                            }}
                          />
                          <Label htmlFor="electricity">
                            Électricité et sécurité incendie
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="security"
                            name="security"
                            checked={formData.services.includes("security")}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: [...prev.services, "security"],
                                }));
                              } else {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: prev.services.filter(
                                    (s) => s !== "security"
                                  ),
                                }));
                              }
                              if (errors.services) {
                                setErrors((prev) => {
                                  const newErrors = { ...prev };
                                  delete newErrors.services;
                                  return newErrors;
                                });
                              }
                            }}
                          />
                          <Label htmlFor="security">
                            Sécurité électronique
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="electromechanical"
                            name="electromechanical"
                            checked={formData.services.includes(
                              "electromechanical"
                            )}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: [
                                    ...prev.services,
                                    "electromechanical",
                                  ],
                                }));
                              } else {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: prev.services.filter(
                                    (s) => s !== "electromechanical"
                                  ),
                                }));
                              }
                              if (errors.services) {
                                setErrors((prev) => {
                                  const newErrors = { ...prev };
                                  delete newErrors.services;
                                  return newErrors;
                                });
                              }
                            }}
                          />
                          <Label htmlFor="electromechanical">
                            Équipements électromécaniques
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="networks"
                            name="networks"
                            checked={formData.services.includes("networks")}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: [...prev.services, "networks"],
                                }));
                              } else {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: prev.services.filter(
                                    (s) => s !== "networks"
                                  ),
                                }));
                              }
                              if (errors.services) {
                                setErrors((prev) => {
                                  const newErrors = { ...prev };
                                  delete newErrors.services;
                                  return newErrors;
                                });
                              }
                            }}
                          />
                          <Label htmlFor="networks">
                            Réseaux et télécommunications
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="software"
                            name="software"
                            checked={formData.services.includes("software")}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: [...prev.services, "software"],
                                }));
                              } else {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: prev.services.filter(
                                    (s) => s !== "software"
                                  ),
                                }));
                              }
                              if (errors.services) {
                                setErrors((prev) => {
                                  const newErrors = { ...prev };
                                  delete newErrors.services;
                                  return newErrors;
                                });
                              }
                            }}
                          />
                          <Label htmlFor="software">
                            Développement de logiciels
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="websites"
                            name="websites"
                            checked={formData.services.includes("websites")}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: [...prev.services, "websites"],
                                }));
                              } else {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: prev.services.filter(
                                    (s) => s !== "websites"
                                  ),
                                }));
                              }
                              if (errors.services) {
                                setErrors((prev) => {
                                  const newErrors = { ...prev };
                                  delete newErrors.services;
                                  return newErrors;
                                });
                              }
                            }}
                          />
                          <Label htmlFor="websites">
                            Développement de sites web
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="mobile"
                            name="mobile"
                            checked={formData.services.includes("mobile")}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: [...prev.services, "mobile"],
                                }));
                              } else {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: prev.services.filter(
                                    (s) => s !== "mobile"
                                  ),
                                }));
                              }
                              if (errors.services) {
                                setErrors((prev) => {
                                  const newErrors = { ...prev };
                                  delete newErrors.services;
                                  return newErrors;
                                });
                              }
                            }}
                          />
                          <Label htmlFor="mobile">
                            Développement d&apos;applications mobile
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="renewable"
                            name="renewable"
                            checked={formData.services.includes("renewable")}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: [...prev.services, "renewable"],
                                }));
                              } else {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: prev.services.filter(
                                    (s) => s !== "renewable"
                                  ),
                                }));
                              }
                              if (errors.services) {
                                setErrors((prev) => {
                                  const newErrors = { ...prev };
                                  delete newErrors.services;
                                  return newErrors;
                                });
                              }
                            }}
                          />
                          <Label htmlFor="renewable">
                            Énergies renouvelables
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="hvac"
                            name="hvac"
                            checked={formData.services.includes("hvac")}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: [...prev.services, "hvac"],
                                }));
                              } else {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: prev.services.filter(
                                    (s) => s !== "hvac"
                                  ),
                                }));
                              }
                              if (errors.services) {
                                setErrors((prev) => {
                                  const newErrors = { ...prev };
                                  delete newErrors.services;
                                  return newErrors;
                                });
                              }
                            }}
                          />
                          <Label htmlFor="hvac">
                            Climatisation et plomberie
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="building-management"
                            name="building-management"
                            checked={formData.services.includes(
                              "building-management"
                            )}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: [
                                    ...prev.services,
                                    "building-management",
                                  ],
                                }));
                              } else {
                                setFormData((prev) => ({
                                  ...prev,
                                  services: prev.services.filter(
                                    (s) => s !== "building-management"
                                  ),
                                }));
                              }
                              if (errors.services) {
                                setErrors((prev) => {
                                  const newErrors = { ...prev };
                                  delete newErrors.services;
                                  return newErrors;
                                });
                              }
                            }}
                          />
                          <Label htmlFor="building-management">
                            Gestion technique de bâtiment
                          </Label>
                        </div>
                      </div>
                      {errors.services && (
                        <p className="text-red-500 text-sm">
                          {errors.services}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectDescription">
                        Description détaillée du projet{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="projectDescription"
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleChange}
                        required
                        className={`min-h-[150px] ${errors.projectDescription ? "border-red-500" : ""}`}
                        maxLength={maxCharacters}
                      />
                      <div className="text-sm text-gray-400 text-right">
                        {characterCount}/{maxCharacters} caractères
                      </div>
                      {errors.projectDescription && (
                        <p className="text-red-500 text-sm">
                          {errors.projectDescription}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectLocation">Lieu du projet</Label>
                      <Input
                        id="projectLocation"
                        name="projectLocation"
                        value={formData.projectLocation}
                        onChange={handleChange}
                        placeholder="Ville, Pays"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-lg font-semibold mb-4">
                    Budget et Calendrier
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget estimé (en FCFA)</Label>
                      <Select
                        onValueChange={(value) =>
                          handleSelectChange("budget", value)
                        }
                      >
                        <SelectTrigger id="budget">
                          <SelectValue placeholder="Sélectionnez une fourchette" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1M">
                            0 - 1 million FCFA
                          </SelectItem>
                          <SelectItem value="1M-5M">
                            1 - 5 millions FCFA
                          </SelectItem>
                          <SelectItem value="5M-10M">
                            5 - 10 millions FCFA
                          </SelectItem>
                          <SelectItem value="10M-50M">
                            10 - 50 millions FCFA
                          </SelectItem>
                          <SelectItem value="50M+">
                            Plus de 50 millions FCFA
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Échéance souhaitée</Label>
                      <Input
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        type="date"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-lg font-semibold mb-4">
                    Informations Supplémentaires
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Comment avez-vous entendu parler de nous ?</Label>
                      <RadioGroup
                        defaultValue="website"
                        value={formData.referralSource}
                        onValueChange={handleRadioChange}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="website" id="website" />
                          <Label htmlFor="website">Site web</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="referral" id="referral" />
                          <Label htmlFor="referral">Recommandation</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="social-media"
                            id="social-media"
                          />
                          <Label htmlFor="social-media">Réseaux sociaux</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Autre</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => {
                          setFormData((prev) => ({
                            ...prev,
                            newsletter: checked === true,
                          }));
                        }}
                      />
                      <Label htmlFor="newsletter">
                        Je souhaite recevoir la newsletter de LB2S Technology
                        Corp
                      </Label>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-center space-x-2"
                >
                  <Checkbox
                    id="terms"
                    required
                    checked={formData.terms}
                    onCheckedChange={(checked) => {
                      setFormData((prev) => ({
                        ...prev,
                        terms: checked === true,
                      }));
                      if (errors.terms) {
                        setErrors((prev) => {
                          const newErrors = { ...prev };
                          delete newErrors.terms;
                          return newErrors;
                        });
                      }
                    }}
                    className={
                      errors.terms
                        ? "border-red-500 data-[state=checked]:bg-red-500"
                        : ""
                    }
                  />
                  <Label
                    htmlFor="terms"
                    className={errors.terms ? "text-red-500" : ""}
                  >
                    J&apos;accepte les{" "}
                    <a href="#" className="text-primary hover:underline">
                      conditions d&apos;utilisation
                    </a>{" "}
                    et la{" "}
                    <a href="#" className="text-primary hover:underline">
                      politique de confidentialité
                    </a>{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                </motion.div>
                {errors.terms && (
                  <p className="text-red-500 text-sm">{errors.terms}</p>
                )}

                <motion.div variants={itemVariants}>
                  <Button
                    type="submit"
                    className="w-full md:w-auto"
                    size="lg"
                    disabled={formStatus === "loading"}
                  >
                    {formStatus === "loading" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      "Envoyer la demande de devis"
                    )}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
