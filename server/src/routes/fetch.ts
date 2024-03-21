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

  const tokens = submissionsData.map((submission) => submission.stdout_token);
  console.log("tokens from sqldb", tokens);
  const requiredData = await Promise.all(
    tokens.map(async (token) => {
      const response = await axios(fetchSubmissionStatus(token!));
      console.log("response", response);
      const data = submissionStatusSchema.parse(response.data);
      return data;
    })
  );
  console.log("requiredData", requiredData);
  res.json({ submissions: requiredData });
});

export default fetch;
