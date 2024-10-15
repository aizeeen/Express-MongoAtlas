import express from "express";
import { studentModel } from "../models/student";

const router = express.Router();


router.get('/', async (req, res) => {
    const students = await studentModel.find()
    res.status(200).send(students)
 });
router.get('/:id', async ( req, res) => {
    const id = req.params.id;
    const student = await studentModel.findById(id)
 
    if (!student){
     res.status(404)
    }
    res.send(student)
 });
 
 router.post("/", async ( req, res)=> {
     const data = req.body;
     const newStudent = await studentModel.create(data)
     newStudent.save()
     res.status(201).send(newStudent)
 })
 
 router.put("/:id", async (req, res) => {
     const id = req.params.id;
     const data = req.body;
 
     const student = await studentModel.findByIdAndUpdate(id, data, { new: true });
 
     if (!student){
     res.status(404).send("student not found")
     } else {
     res.status(204).send(student)}
 });
 
 router.delete("/:id", async (req, res) => {
     const id = req.params.id;
     const student = await studentModel.findByIdAndDelete(id)
 
     if (!student){
         res.status(404).send("student not found")
     } else {
     res.send("okey")
     }
 })
 export default router;