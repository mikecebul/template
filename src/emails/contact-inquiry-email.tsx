import { Body, Container, Head, Html, Preview, Section, Text } from "@react-email/components";

import type { ContactFormValues } from "@/lib/contact";

interface ContactInquiryEmailProps extends ContactFormValues {
  subject: string;
}

const brandColor = "#c7a157";
const cardBackground = "#131b2e";
const cardBorder = "#22304f";
const pageBackground = "#0c1221";
const textColor = "#f5f7fb";

export function ContactInquiryEmail({
  email,
  inquiryType,
  message,
  name,
  subject,
}: ContactInquiryEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={card}>
            <Text style={title}>New Contact Form Submission</Text>
            <Text style={line}>
              <strong style={label}>Name:</strong> {name}
            </Text>
            <Text style={line}>
              <strong style={label}>Email:</strong> {email}
            </Text>
            <Text style={line}>
              <strong style={label}>Inquiry Type:</strong> {inquiryType}
            </Text>
            <Text style={messageLabel}>
              <strong style={label}>Message:</strong>
            </Text>
            <Text style={messageBody}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: pageBackground,
  color: textColor,
  fontFamily: '"DM Sans", "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  margin: "0",
  padding: "24px 12px",
};

const container = {
  margin: "0 auto",
  maxWidth: "640px",
};

const card = {
  backgroundColor: cardBackground,
  border: `1px solid ${cardBorder}`,
  borderRadius: "18px",
  padding: "28px",
};

const title = {
  color: textColor,
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "1.3",
  margin: "0 0 20px",
};

const line = {
  color: textColor,
  fontSize: "16px",
  lineHeight: "1.7",
  margin: "0 0 12px",
};

const label = {
  color: brandColor,
};

const messageLabel = {
  color: textColor,
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "20px 0 8px",
};

const messageBody = {
  color: textColor,
  fontSize: "16px",
  lineHeight: "1.75",
  margin: "0",
  whiteSpace: "pre-line" as const,
};
