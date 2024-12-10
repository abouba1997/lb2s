"use client";

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
import { Phone, Mail, Clock, Building } from "lucide-react";

export default function QuoteForm() {
  const [characterCount, setCharacterCount] = useState(0);
  const maxCharacters = 1000;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Demande de Devis Détaillé - L2BS Technology Corp
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pour vous fournir un devis précis et adapté à vos besoins, veuillez
            remplir ce formulaire détaillé. Nous nous engageons à vous répondre
            dans un délai de 24 heures ouvrables.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Services List and Contact Info */}
          <Card className="bg-primary text-primary-foreground p-8">
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
                <span>+223 20 20 20 20</span>
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
                <span>Siège: Bamako, Mali</span>
              </div>
            </div>
          </Card>

          {/* Right Column - Enhanced Contact Form */}
          <Card className="lg:col-span-2 p-8">
            <form className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Informations Personnelles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstname">
                      Prénom <span className="text-red-500">*</span>
                    </Label>
                    <Input id="firstname" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastname">
                      Nom <span className="text-red-500">*</span>
                    </Label>
                    <Input id="lastname" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      E-mail <span className="text-red-500">*</span>
                    </Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Téléphone <span className="text-red-500">*</span>
                    </Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Informations sur l&apos;Entreprise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">
                      Nom de l&apos;entreprise{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input id="company" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Votre poste</Label>
                    <Input id="position" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Secteur d&apos;activité</Label>
                    <Select>
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="Sélectionnez un secteur" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="construction">
                          Construction
                        </SelectItem>
                        <SelectItem value="energy">Énergie</SelectItem>
                        <SelectItem value="manufacturing">Industrie</SelectItem>
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
                    <Label htmlFor="company-size">
                      Taille de l&apos;entreprise
                    </Label>
                    <Select>
                      <SelectTrigger id="company-size">
                        <SelectValue placeholder="Nombre d'employés" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employés</SelectItem>
                        <SelectItem value="11-50">11-50 employés</SelectItem>
                        <SelectItem value="51-200">51-200 employés</SelectItem>
                        <SelectItem value="201-500">
                          201-500 employés
                        </SelectItem>
                        <SelectItem value="501+">501+ employés</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Détails du Projet
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>
                      Services requis (sélectionnez tous ceux qui
                      s&apos;appliquent) <span className="text-red-500">*</span>
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="electricity" />
                        <Label htmlFor="electricity">
                          Électricité et sécurité incendie
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="security" />
                        <Label htmlFor="security">Sécurité électronique</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="electromechanical" />
                        <Label htmlFor="electromechanical">
                          Équipements électromécaniques
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="networks" />
                        <Label htmlFor="networks">
                          Réseaux et télécommunications
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="software" />
                        <Label htmlFor="software">
                          Développement de logiciels
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="websites" />
                        <Label htmlFor="websites">
                          Développement de sites web
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="mobile" />
                        <Label htmlFor="mobile">
                          Développement d&apos;applications mobile
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="renewable" />
                        <Label htmlFor="renewable">
                          Énergies renouvelables
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="hvac" />
                        <Label htmlFor="hvac">Climatisation et plomberie</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="building-management" />
                        <Label htmlFor="building-management">
                          Gestion technique de bâtiment
                        </Label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="project-description">
                      Description détaillée du projet{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="project-description"
                      required
                      className="min-h-[150px]"
                      maxLength={maxCharacters}
                      onChange={(e) => setCharacterCount(e.target.value.length)}
                    />
                    <div className="text-sm text-gray-400 text-right">
                      {characterCount}/{maxCharacters} caractères
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="project-location">Lieu du projet</Label>
                    <Input id="project-location" placeholder="Ville, Pays" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Budget et Calendrier
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget estimé (en FCFA)</Label>
                    <Select>
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Sélectionnez une fourchette" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1M">0 - 1 million FCFA</SelectItem>
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
                    <Input id="timeline" type="date" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Informations Supplémentaires
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Comment avez-vous entendu parler de nous ?</Label>
                    <RadioGroup defaultValue="website">
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
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter">
                      Je souhaite recevoir la newsletter de L2BS Technology Corp
                    </Label>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms">
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
              </div>

              <Button type="submit" className="w-full md:w-auto" size="lg">
                Envoyer la demande de devis
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
