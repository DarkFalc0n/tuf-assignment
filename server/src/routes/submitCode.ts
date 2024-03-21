import express, { Router } from "express";
import { db } from "../db/connection";
import { submissionSchema } from "../validation/submission.schema";
import { submissions } from "../db/schema";
import { z } from "zod";

const submitCode = Router();

//parse request body as json
submitCode.use(express.json());

submitCode.post("/", (req, res) => {
  const data = req.body;
  const parsedSubmissionData = submissionSchema.parse(data);

  if (!db) {
    throw new Error("No db connection");
  }
  db.insert(submissions)
    .values(parsedSubmissionData)
    .then(() => {
      res.json({ received: parsedSubmissionData });
    });
});

export default submitCode;
