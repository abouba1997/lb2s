"use server";

import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { ContactFormEmail } from "@/components/emails/contact-form-email";
import { ContactFormConfirmationEmail } from "@/components/emails/contact-form-confirmation";
import { QuoteRequestEmail } from "@/components/emails/quote-request-email";
import { QuoteRequestConfirmationEmail } from "@/components/emails/quote-request-confirmation";

const transporter = nodemailer.createTransport({
  host: "send.one.com",
  port: 587,
  auth: {
    user: process.env.EMAIL_USER || "",
    pass: process.env.EMAIL_PASSWORD || "",
  },
});

interface EmailProps {
  from: string;
  name: string;
  phone: string;
  message: string;
}

export async function sendEmail({ from, name, phone, message }: EmailProps) {
  try {
    const companyEmailHtml = await render(
      ContactFormEmail({ name, email: from, phone, message })
    );

    const confirmationEmailHtml = await render(
      ContactFormConfirmationEmail({ name })
    );

    const companyEmailInfo = await transporter.sendMail({
      from: `"LB2S Contact" <${process.env.EMAIL_USER}>`,
      to: "contact@lb2stech.com",
      subject: `Nouveau message de ${name}`,
      html: companyEmailHtml,
    });

    if (!companyEmailInfo.messageId) {
      console.error("Failed to send email to company");
      throw new Error("Failed to send email to company");
    }

    // Send confirmation email to the sender
    const confirmationEmailInfo = await transporter.sendMail({
      from: `"LB2S Technology" <${process.env.EMAIL_USER}>`,
      to: from,
      subject: "Nous avons bien reçu votre message - LB2S Technology",
      html: confirmationEmailHtml,
    });

    if (!confirmationEmailInfo.messageId) {
      console.error("Failed to send confirmation email");
      throw new Error("Failed to send confirmation email");
    }

    return { companyEmailInfo, confirmationEmailInfo };
  } catch (error) {
    console.error("Error in sendEmail function:", error);
    throw new Error("Failed to send email");
  }
}

interface QuoteRequestProps {
  name: string;
  email: string;
  phone: string;
  company: string;
  position?: string;
  industry?: string;
  companySize?: string;
  serviceType: string;
  projectDescription?: string;
  projectLocation?: string;
  budget: string;
  timeline: string;
  referralSource?: string;
  newsletter?: boolean;
  message: string;
}

export async function sendQuoteRequest({
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
}: QuoteRequestProps) {
  try {
    // Render the company notification email
    const companyEmailHtml = await render(
      QuoteRequestEmail({
        name,
        email,
        phone,
        company,
        position,
        industry,
        companySize,
        serviceType,
        projectDescription: projectDescription || "",
        projectLocation,
        budget,
        timeline,
        referralSource,
        newsletter,
        message,
      })
    );

    // Render the confirmation email
    const confirmationEmailHtml = await render(
      QuoteRequestConfirmationEmail({ name, serviceType })
    );

    // Send email to the company
    const companyEmailInfo = await transporter.sendMail({
      from: `"LB2S Quote Request" <${process.env.EMAIL_USER}>`,
      to: "contact@lb2stech.com",
      subject: `Nouvelle demande de devis de ${name}`,
      html: companyEmailHtml,
    });

    if (!companyEmailInfo.messageId) {
      console.error("Failed to send quote request to company");
      throw new Error("Failed to send quote request to company");
    }

    // Send confirmation email to the sender
    const confirmationEmailInfo = await transporter.sendMail({
      from: `"LB2S Technology" <${process.env.EMAIL_USER}>`,
      to: email, // Sender's email
      subject: "Nous avons bien reçu votre demande de devis - LB2S Technology",
      html: confirmationEmailHtml,
    });

    if (!confirmationEmailInfo.messageId) {
      console.error("Failed to send confirmation email for quote request");
      throw new Error("Failed to send confirmation email for quote request");
    }

    return { companyEmailInfo, confirmationEmailInfo };
  } catch (error) {
    console.error("Error in sendQuoteRequest function:", error);
    throw new Error("Failed to send quote request");
  }
}
