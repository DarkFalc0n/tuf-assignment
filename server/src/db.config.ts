import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import fs from "fs";

export const getDbConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      port: +process.env.MYSQL_PORT!,
    });
    console.log("Mysql Connection created");
    return drizzle(connection);
  } catch (error) {
    console.error("Error in creating connection", error);
  }
};
