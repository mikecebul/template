import { defineConfig } from "drizzle-kit";

const databaseUrl = process.env.DATABASE_URL ?? "file:./local.db";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/lib/db/schema/index.ts",
  breakpoints: true,
  verbose: true,
  strict: true,
  dialect: "sqlite",
  casing: "snake_case",
  dbCredentials: {
    // `generate` does not talk to the database, so a local fallback keeps the CLI usable
    // without forcing the entire app env contract to be present.
    url: databaseUrl,
  },
});
