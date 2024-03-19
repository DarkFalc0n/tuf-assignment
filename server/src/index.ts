import express from "express";
import { getDbConnection } from "./db.config";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.APP_LOCAL_PORT || 3000;

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  const dbClient = getDbConnection();
  console.log(`Server is running at http://localhost:${port}`);
});
