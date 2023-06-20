import express from "express";
import db from "./config/database.js";
import Users from "./models/UserModels.js";

const app = express();

try {
    await db.authenticate();
    console.log ("database Connected ...");
    await Users.sync();
} catch (error) {
    console.log(error);
}


app.listen(5000, () => console.log('server running at port 5000'))