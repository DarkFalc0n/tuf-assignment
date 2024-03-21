import express, { Router } from "express";
import { db } from "../db/connection";
import { submissionSchema } from "../validation/submission.schema";
import { submissions } from "../db/schema";
import axios from "axios";
import { submissionTokenSchema } from "../validation/submissionToken.schema";
import { getSubmissionRequest } from "../utils/judgeRequests";

const submitCode = Router();

//parse request body as json
submitCode.use(express.json());

submitCode.post("/", async (req, res) => {
  const data = req.body;
  const parsedSubmissionData = submissionSchema.parse(data);

  //send submission to the compiler service
  const request = getSubmissionRequest(parsedSubmissionData);
  const response = await axios(request);
  const parsedResponse = submissionTokenSchema.parse(response.data);

  if (!db) {
    throw new Error("No db connection");
  }
  await db
    .insert(submissions)
    .values({ ...parsedSubmissionData, stdout_token: parsedResponse.token });

  res.json({ received: parsedSubmissionData });
});

export default submitCode;
