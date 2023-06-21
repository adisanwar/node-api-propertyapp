import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected ...');

} catch (error) {
    console.log(error);

}
app.use(express.json());
app.use(router);
app.listen(4000, () => console.log('Server Running On Port 4000'));