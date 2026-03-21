import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required to run migrations.");
}

const client = createClient({ url: databaseUrl });
const db = drizzle({ client });

await migrate(db, { migrationsFolder: "drizzle" });
console.log("Database migrations completed.");
