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
  Link,
} from "@react-email/components";

interface QuoteRequestConfirmationEmailProps {
  name: string;
  serviceType: string;
}

export const QuoteRequestConfirmationEmail = ({
  name,
  serviceType,
}: QuoteRequestConfirmationEmailProps) => {
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
      <Preview>Votre demande de devis a été reçue - LB2S Technology</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>
            Merci pour votre demande de devis, {name}!
          </Heading>
          <Text style={text}>
            Nous avons bien reçu votre demande de devis concernant nos services
            de {getServiceLabels(serviceType)}.
          </Text>
          <Text style={text}>
            Notre équipe commerciale est en train d&apos;examiner votre demande
            et préparera un devis personnalisé pour votre projet. Nous vous
            contacterons dans les plus brefs délais, généralement sous 48 heures
            ouvrables.
          </Text>

          <Section style={section}>
            <Text style={sectionHeader}>Prochaines étapes:</Text>
            <Text style={sectionItem}>
              1. Notre équipe analyse votre demande et prépare un devis
              personnalisé
            </Text>
            <Text style={sectionItem}>
              2. Un conseiller vous contactera pour discuter des détails de
              votre projet
            </Text>
            <Text style={sectionItem}>
              3. Nous vous enverrons un devis détaillé pour votre approbation
            </Text>
            <Text style={sectionItem}>
              4. Une fois le devis approuvé, nous planifierons le démarrage du
              projet
            </Text>
          </Section>

          <Section style={buttonContainer}>
            <Link href="https://lb2stech.com" style={button}>
              Découvrir nos services
            </Link>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Si vous avez des questions urgentes, n&apos;hésitez pas à nous
            appeler au +223 79 49 31 58.
          </Text>
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

const buttonContainer = {
  margin: "30px 0",
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#e9806e",
  borderRadius: "30px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  padding: "12px 30px",
  display: "inline-block",
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
