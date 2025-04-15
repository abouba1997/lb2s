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
  Button,
} from "@react-email/components";

export const ContactFormConfirmationEmail = ({ name }: { name: string }) => {
  return (
    <Html>
      <Head />
      <Preview>Merci pour votre message - LB2S Technology</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Merci pour votre message, {name}!</Heading>
          <Text style={text}>
            Nous avons bien reçu votre message et nous vous remercions de nous
            avoir contacté.
          </Text>
          <Text style={text}>
            Un membre de notre équipe examinera votre demande et vous répondra
            dans les plus brefs délais, généralement sous 24 à 48 heures
            ouvrables.
          </Text>

          <Section style={section}>
            <Text style={sectionHeader}>Que se passe-t-il maintenant?</Text>
            <Text style={sectionItem}>
              1. Notre équipe examine votre demande
            </Text>
            <Text style={sectionItem}>
              2. Nous vous contacterons pour discuter de vos besoins spécifiques
            </Text>
            <Text style={sectionItem}>
              3. Nous élaborerons une solution adaptée à votre situation
            </Text>
          </Section>

          <Section style={buttonContainer}>
            <Button style={button} href="https://lb2stech.com">
              Découvrir nos services
            </Button>
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
