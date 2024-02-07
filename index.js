import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { databaseConnection } from './db.js';
import { userRouter } from './router/userroute.js';


dotenv.config()

const PORT = 2000;

const app = express();

app.use(express.json());
app.use(cors());

databaseConnection();

app.use('/',userRouter)


app.get('/',(req,res)=>{
    res.send("Hello ! User This is Success message from Ecom Server")
})

app.listen(PORT,()=>{console.log("Server is running in port ");});