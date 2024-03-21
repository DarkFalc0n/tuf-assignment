import { z } from "zod";

export const submissionTokenSchema = z.object({
  token: z.string().uuid(),
});
