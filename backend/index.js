import express, { request, response } from "express";
import {PORT,mongoDBURL} from "./config.js";
import booksRoute from './routes/bookRouter.js';
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());


app.use(express.json());
app.use('/books', booksRoute);




app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send("Welcom Book App")
});




mongoose.connect(mongoDBURL).then(()=>{
    console.log("App connected to database");
    app.listen(PORT,()=>{
        console.log(`App is listening to port : ${PORT}`);
    });
})
.catch(()=>{
    console.log(error);
});