import express, { json } from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import { config } from "dotenv";

config();
const app = express();

// Handle database connection and synchronization
(async () => {
  try {
    await db.authenticate();
    console.log('Database Connected...');
    await sync();
    console.log('Database synchronized...');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
})();

app.use(cookieParser());
app.use(json());
app.use(router);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});
