import express from "express";
import { getDbConnection } from "./db/connection";
import dotenv from "dotenv";
import { submitCode, fetch } from "./routes";

dotenv.config();
const app = express();
const port = process.env.APP_LOCAL_PORT || 10000;

app.get("/", (_, res) => {
  res.send("Hello from TUF backend");
});

//code submission route
app.use("/submit", submitCode);

//get all submissions route
app.use("/fetch", fetch);

app.listen(port, () => {
  const dbClient = getDbConnection();
  console.log(`Server is running at port 3000`);
});
