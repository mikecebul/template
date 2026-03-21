import type { Config } from "drizzle-kit";

const databaseUrl =
  process.env.DATABASE_URL ?? "postgresql://postgres:password@localhost:5432/mikecebul_website";

export default {
  out: "./drizzle",
  schema: "./src/lib/db/schema/index.ts",
  breakpoints: true,
  verbose: true,
  strict: true,
  dialect: "postgresql",
  casing: "snake_case",
  dbCredentials: {
    // `generate` does not talk to the database, so a local fallback keeps the CLI usable
    // without forcing the entire app env contract to be present.
    url: databaseUrl,
  },
} satisfies Config;
