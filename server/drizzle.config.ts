import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  driver: "mysql2",
  dbCredentials: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: +process.env.MYSQL_PORT!,
    database: process.env.MYSQL_DATABASE,
  },
} satisfies Config;
