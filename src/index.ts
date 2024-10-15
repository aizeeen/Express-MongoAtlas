import express from 'express';
import mongoose from 'mongoose';
import { studentModel } from './models/student';
import studentRouter from './routers/students';


 

const app = express();
const port = 5000;
app.use(express.json());


mongoose.connect("mongodb+srv://ihebbacha03:2UFeYsYFnI960KgZ@cluster0.yr0ko.mongodb.net/Students")
.then(() => console.log("MongoDB Connected"));


app.use('/students', studentRouter)
app.listen(port, () => {
    console.log("Running on port " + port);
});
