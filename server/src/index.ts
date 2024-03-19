import express from "express";
import { getDbConnection } from "./utils/db.config";
import dotenv from "dotenv";
import { submitCode, submissions } from "./routes";

dotenv.config();
const app = express();
const port = process.env.APP_LOCAL_PORT || 10000;

app.get("/", (_, res) => {
  res.send("Hello from TUF backend");
});

//code submission route
app.use("/submit", submitCode);

//get all submissions route
app.use("/submissions", submissions);

app.listen(port, () => {
  const dbClient = getDbConnection();
  console.log(`Server is running at port 3000`);
});
