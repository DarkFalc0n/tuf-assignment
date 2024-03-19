import { Router } from "express";

const submissions = Router();

submissions.get("/", (req, res) => {
  res.send("All submissions");
});

export default submissions;
