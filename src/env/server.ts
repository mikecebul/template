import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

const emptyStringAsUndefined = (value: unknown) => {
  if (typeof value !== "string") {
    return value;
  }

  const trimmedValue = value.trim();

  return trimmedValue === "" ? undefined : trimmedValue;
};

export const env = createEnv({
  server: {
    DATABASE_URL: z.url(),
    VITE_BASE_URL: z.url().default("http://localhost:3000"),
    BETTER_AUTH_SECRET: z.string().min(1),
    CONTACT_TO_EMAIL: z.preprocess(emptyStringAsUndefined, z.email().default("me@mikecebul.com")),
    CONTACT_FROM_EMAIL: z.preprocess(emptyStringAsUndefined, z.string().optional()),
    RESEND_API_KEY: z.preprocess(emptyStringAsUndefined, z.string().optional()),
    MAILPIT_SMTP_HOST: z.preprocess(emptyStringAsUndefined, z.string().default("127.0.0.1")),
    MAILPIT_SMTP_PORT: z.preprocess(
      emptyStringAsUndefined,
      z.coerce.number().int().positive().default(1025),
    ),

    // OAuth2 providers, optional, update as needed
    GITHUB_CLIENT_ID: z.string().optional(),
    GITHUB_CLIENT_SECRET: z.string().optional(),
    GOOGLE_CLIENT_ID: z.string().optional(),
    GOOGLE_CLIENT_SECRET: z.string().optional(),
  },
  runtimeEnv: process.env,
});
