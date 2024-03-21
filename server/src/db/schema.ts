import {
  mysqlEnum,
  mysqlTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/mysql-core";

export const submissions = mysqlTable("submissions", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  username: text("name").notNull(),
  language: mysqlEnum("language", ["CPP", "PYTHON", "JAVA", "JAVASCRIPT"]),
  stdin: text("stdin").default(""),
  code: text("code").notNull(),
  stdout_token: text("stdout_token").default(""),
});
