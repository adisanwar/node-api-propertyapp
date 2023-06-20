import express from "express";
import db from "./config/database.js";
import router from "./routes/index.js";
// import Users from "./models/UserModels.js";


const app = express();

try {
    await db.authenticate();
    console.log ("database Connected ...");
    // await Users.sync();
} catch (error) {
    console.log(error);
}

app.use(express.json);
app.use(router);
app.listen(3000, () => console.log('server running at port 3000'));