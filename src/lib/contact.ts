import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const inquiryTypes = [
  "Marketing website",
  "Hybrid meeting solution",
  "AI & automation consulting",
  "General question",
] as const;

export const contactFormSchema = z.object({
  email: z
    .string()
    .trim()
    .refine((value) => z.email().safeParse(value).success, "Enter a valid email address."),
  inquiryType: z.enum(inquiryTypes, {
    message: "Choose the type of inquiry that fits best.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Share a little more detail so I can understand the project.")
    .max(800, "Keep the message under 800 characters."),
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Please keep your name under 80 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const $submitContact = createServerFn({ method: "POST" })
  .inputValidator(contactFormSchema)
  .handler(async ({ data }) => {
    await Promise.resolve(data);

    return {
      message:
        "Thanks for reaching out. This placeholder handler validated your message successfully.",
    };
  });
