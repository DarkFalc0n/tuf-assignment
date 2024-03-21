import { z } from "zod";

const env = z.object({
  MYSQL_HOST: z.string(),
  MYSQL_DATABASE: z.string(),
  MYSQL_PORT: z.number(),
  MYSQL_USER: z.string(),
  MYSQL_PASSWORD: z.string(),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof env> {}
  }
}
