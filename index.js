import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DB from "./database.js";
import authRoute from './authentication.js';
import userRoute from './userRoute.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

DB();

app.use(authRoute);
app.use(userRoute);


app.get('/', (req, res) => {
    console.log('Good Morning')
});

app.listen(process.env.PORT, () => { console.log(`Server Running on PORT ${process.env.PORT}`)})