import { z } from "zod";

export const submissionStatusSchema = z.object({
  token: z.string().uuid(),
  stdout: z.string().nullable(),
  stderr: z.string().nullable(),
  status: z
    .object({ id: z.number(), description: z.string() })
    .transform((status) => {
      return status.description;
    }),
});
