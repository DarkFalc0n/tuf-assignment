import { migrate } from "drizzle-orm/mysql2/migrator";
import { db } from "./connection";

(async function () {
  try {
    if (!db) {
      throw new Error("No db connection");
    }
    await migrate(db, {
      migrationsFolder: "src/db/migrations",
    });

    console.log("Migration successful");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
