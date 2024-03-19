import { z } from "zod";

const sqlDbVariables = z.object({
  MYSQL_HOST: z.string(),
  MYSQL_DATABASE: z.string(),
  MYSQL_PORT: z.number(),
  MYSQL_USER: z.string(),
  MYSQL_PASSWORD: z.string(),
});

sqlDbVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof sqlDbVariables> {}
  }
}
