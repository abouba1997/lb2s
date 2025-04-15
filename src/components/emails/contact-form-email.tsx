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

export const ContactFormEmail = ({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  return (
    <Html>
      <Head />
      <Preview>Nouveau message de contact de {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nouveau message de contact</Heading>
          <Text style={text}>
            Vous avez reçu un nouveau message de contact de votre site web.
          </Text>

          <Section style={section}>
            <Text style={sectionHeader}>Détails du contact:</Text>
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
            <Text style={sectionHeader}>Message:</Text>
            <Text style={sectionMessage}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            © {new Date().getFullYear()} LB2S Technology Corp. Tous droits
            réservés.
          </Text>
        </Container>
      </Body>
    </Html>
  ) as React.ReactElement;
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

const sectionMessage = {
  fontSize: "16px",
  margin: "0 0 20px 0",
  color: "#333",
};

const sectionItem = {
  margin: "0 0 5px 0",
  color: "#555",
  fontSize: "14px",
  lineHeight: "1.5",
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
