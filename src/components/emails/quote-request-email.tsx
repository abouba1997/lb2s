import type * as React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface QuoteRequestEmailProps {
  name: string;
  email: string;
  phone: string;
  company: string;
  position?: string;
  industry?: string;
  companySize?: string;
  serviceType: string;
  projectDescription: string;
  projectLocation?: string;
  budget: string;
  timeline: string;
  referralSource?: string;
  newsletter?: boolean;
  message: string;
}

export const QuoteRequestEmail = ({
  name,
  email,
  phone,
  company,
  position,
  industry,
  companySize,
  serviceType,
  projectDescription,
  projectLocation,
  budget,
  timeline,
  referralSource,
  newsletter,
  message,
}: QuoteRequestEmailProps) => {
  // Map industry to readable label
  const getIndustryLabel = (industryValue = "") => {
    const industries = {
      construction: "Construction",
      energy: "Énergie",
      manufacturing: "Industrie",
      healthcare: "Santé",
      education: "Éducation",
      retail: "Commerce de détail",
      other: "Autre",
      "": "Non spécifié",
    };
    return (
      industries[industryValue as keyof typeof industries] || industryValue
    );
  };

  // Map company size to readable label
  const getCompanySizeLabel = (sizeValue = "") => {
    const sizes = {
      "1-10": "1-10 employés",
      "11-50": "11-50 employés",
      "51-200": "51-200 employés",
      "201-500": "201-500 employés",
      "501+": "501+ employés",
      "": "Non spécifié",
    };
    return sizes[sizeValue as keyof typeof sizes] || sizeValue;
  };

  // Map budget to readable label
  const getBudgetLabel = (budgetValue = "") => {
    const budgets = {
      "0-1M": "0 - 1 million FCFA",
      "1M-5M": "1 - 5 millions FCFA",
      "5M-10M": "5 - 10 millions FCFA",
      "10M-50M": "10 - 50 millions FCFA",
      "50M+": "Plus de 50 millions FCFA",
      "": "Non spécifié",
    };
    return budgets[budgetValue as keyof typeof budgets] || budgetValue;
  };

  // Map referral source to readable label
  const getReferralSourceLabel = (sourceValue = "") => {
    const sources = {
      website: "Site web",
      referral: "Recommandation",
      "social-media": "Réseaux sociaux",
      other: "Autre",
      "": "Non spécifié",
    };
    return sources[sourceValue as keyof typeof sources] || sourceValue;
  };

  // Parse services from serviceType string
  const getServiceLabels = (services: string) => {
    const serviceMap: Record<string, string> = {
      electricity: "Électricité et sécurité incendie",
      security: "Sécurité électronique",
      electromechanical: "Équipements électromécaniques",
      networks: "Réseaux et télécommunications",
      software: "Développement de logiciels",
      websites: "Développement de sites web",
      mobile: "Développement d'applications mobile",
      renewable: "Énergies renouvelables",
      hvac: "Climatisation et plomberie",
      "building-management": "Gestion technique de bâtiment",
    };

    return services
      .split(", ")
      .map((service) => serviceMap[service] || service)
      .join(", ");
  };

  return (
    <Html>
      <Head />
      <Preview>Nouvelle demande de devis de {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nouvelle demande de devis</Heading>
          <Text style={text}>
            Vous avez reçu une nouvelle demande de devis de votre site web.
          </Text>

          <Section style={section}>
            <Text style={sectionHeader}>Informations du client:</Text>
            <Text style={sectionItem}>
              <strong>Nom:</strong> {name}
            </Text>
            <Text style={sectionItem}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={sectionItem}>
              <strong>Téléphone:</strong> {phone || "Non fourni"}
            </Text>
          </Section>

          <Section style={section}>
            <Text style={sectionHeader}>
              Informations sur l&apos;entreprise:
            </Text>
            <Text style={sectionItem}>
              <strong>Entreprise:</strong> {company || "Non fournie"}
            </Text>
            <Text style={sectionItem}>
              <strong>Poste:</strong> {position || "Non fourni"}
            </Text>
            <Text style={sectionItem}>
              <strong>Secteur d&apos;activité:</strong>{" "}
              {getIndustryLabel(industry)}
            </Text>
            <Text style={sectionItem}>
              <strong>Taille de l&apos;entreprise:</strong>{" "}
              {getCompanySizeLabel(companySize)}
            </Text>
          </Section>

          <Section style={section}>
            <Text style={sectionHeader}>Détails du projet:</Text>
            <Text style={sectionItem}>
              <strong>Services requis:</strong> {getServiceLabels(serviceType)}
            </Text>
            <Text style={sectionItem}>
              <strong>Lieu du projet:</strong>{" "}
              {projectLocation || "Non spécifié"}
            </Text>
            <Text style={sectionItem}>
              <strong>Budget estimé:</strong> {getBudgetLabel(budget)}
            </Text>
            <Text style={sectionItem}>
              <strong>Échéance souhaitée:</strong> {timeline || "Non spécifiée"}
            </Text>
          </Section>

          <Section style={section}>
            <Text style={sectionHeader}>Description détaillée du projet:</Text>
            <Text style={messageStyle}>{projectDescription || message}</Text>
          </Section>

          <Section style={section}>
            <Text style={sectionHeader}>Informations supplémentaires:</Text>
            <Text style={sectionItem}>
              <strong>Source de référence:</strong>{" "}
              {getReferralSourceLabel(referralSource)}
            </Text>
            <Text style={sectionItem}>
              <strong>Inscription à la newsletter:</strong>{" "}
              {newsletter ? "Oui" : "Non"}
            </Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            © {new Date().getFullYear()} LB2S Technology Corp. Tous droits
            réservés.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: "#f5f5f5",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "5px",
};

const h1 = {
  color: "#e9806e",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "30px 0",
  padding: "0",
  lineHeight: "1.5",
};

const text = {
  color: "#333",
  fontSize: "16px",
  margin: "0 0 20px 0",
  lineHeight: "1.5",
};

const section = {
  margin: "20px 0",
  backgroundColor: "#f9f9f9",
  padding: "15px",
  borderRadius: "5px",
  border: "1px solid #eee",
};

const sectionHeader = {
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 10px 0",
  color: "#333",
};

const sectionItem = {
  margin: "0 0 5px 0",
  color: "#555",
  fontSize: "14px",
  lineHeight: "1.5",
};

const messageStyle = {
  margin: "0",
  color: "#555",
  fontSize: "14px",
  lineHeight: "1.5",
  whiteSpace: "pre-wrap" as const,
};

const hr = {
  borderColor: "#eee",
  margin: "30px 0",
};

const footer = {
  color: "#888",
  fontSize: "12px",
  margin: "20px 0 0 0",
  textAlign: "center" as const,
};
