import { Router } from "express";
import { submissions } from "../db/schema";
import { db } from "../db/connection";
import { desc } from "drizzle-orm";

const fetch = Router();

fetch.get("/", (req, res) => {
  if (!db) {
    throw new Error("No db connection");
  }
  db.query.submissions
    .findMany({
      orderBy: [desc(submissions.createdAt)],
    })
    .then((submissions) => {
      res.json({ submissions: submissions });
    });
});

export default fetch;
