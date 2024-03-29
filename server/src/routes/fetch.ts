import { Router } from "express";
import { submissions } from "../db/schema";
import { db } from "../db/connection";
import { desc } from "drizzle-orm";
import axios from "axios";
import { fetchSubmissionStatus } from "../utils/judgeRequests";
import { submissionStatusSchema } from "../validation/submissionStatus.schema";

const fetch = Router();

fetch.get("/", async (req, res) => {
  if (!db) {
    throw new Error("No db connection");
  }
  const submissionsData = await db.query.submissions.findMany({
    orderBy: [desc(submissions.createdAt)],
  });

  const requiredData = await Promise.all(
    submissionsData.map(async (submission) => {
      const token = submission.stdout_token;
      const response = await axios(fetchSubmissionStatus(token!));
      const data = submissionStatusSchema.parse(response.data);
      return { ...submission, ...data };
    })
  );
  res.json({ submissions: requiredData });
});

export default fetch;
