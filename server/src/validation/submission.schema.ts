import { z } from "zod";

export const submissionSchema = z.object({
  userid: z.bigint().optional(),
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, "Username must be at least 3 characters long"),
  language: z.enum(["CPP", "PYTHON", "JAVA", "JAVASCRIPT"], {
    errorMap: (issue, ctx) => {
      return { message: "invalid role" };
    },
  }),
  stdin: z.string().default(""),
  code: z.string({ required_error: "Code is required" }),
});

export type Submission = z.infer<typeof submissionSchema>;
