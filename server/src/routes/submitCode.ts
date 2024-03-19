import express, { Router } from "express";

const submitCode = Router();

//parse request body as json
submitCode.use(express.json());

submitCode.post("/", (req, res) => {
  const code = req.body;
  res.json({ received: code });
});

export default submitCode;
