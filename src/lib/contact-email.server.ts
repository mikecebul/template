import { render, toPlainText } from "@react-email/render";
import nodemailer from "nodemailer";
import { jsx } from "react/jsx-runtime";
import { Resend } from "resend";

import { ContactInquiryEmail } from "@/emails/contact-inquiry-email";
import { env } from "@/env/server";
import type { ContactFormValues } from "@/lib/contact";

const DEVELOPMENT_FROM_EMAIL = "Website Contact <contact@localhost>";

export async function sendContactInquiryEmail({
  data,
  subject,
}: {
  data: ContactFormValues;
  subject: string;
}) {
  const email = jsx(ContactInquiryEmail, {
    email: data.email,
    inquiryType: data.inquiryType,
    message: data.message,
    name: data.name,
    subject,
  });
  const html = await render(email, { pretty: true });
  const text = toPlainText(html);
  const to = env.CONTACT_TO_EMAIL;
  const from = getFromEmail();

  try {
    if (process.env.NODE_ENV === "development") {
      const transporter = nodemailer.createTransport({
        host: env.MAILPIT_SMTP_HOST,
        port: env.MAILPIT_SMTP_PORT,
        secure: false,
      });

      await transporter.sendMail({
        from,
        html,
        replyTo: data.email,
        subject,
        text,
        to,
      });

      return;
    }

    const apiKey = env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error("Missing RESEND_API_KEY.");
    }

    const resend = new Resend(apiKey);
    const response = await resend.emails.send({
      from,
      html,
      replyTo: data.email,
      subject,
      text,
      to,
    });

    if (response.error) {
      throw new Error(response.error.message || "Resend could not deliver the inquiry email.");
    }
  } catch (error) {
    const reason =
      error instanceof Error ? error.message : "The email provider returned an unknown error.";

    throw new Error(`We couldn't send your inquiry email right now. ${reason}`);
  }
}

function getFromEmail() {
  if (process.env.NODE_ENV === "development") {
    return env.CONTACT_FROM_EMAIL || DEVELOPMENT_FROM_EMAIL;
  }

  if (!env.CONTACT_FROM_EMAIL) {
    throw new Error("Missing CONTACT_FROM_EMAIL.");
  }

  return env.CONTACT_FROM_EMAIL;
}
