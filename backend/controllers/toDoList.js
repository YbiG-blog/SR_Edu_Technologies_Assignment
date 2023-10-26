const ToDoList = require('../models/ToDoList');

const addToDo = async ({ body }, res) => {
try{
    const { task } = body;
    const newTask = new ToDoList({ task });
    const saveTask = await newTask.save();
   return res.status(200).json({success: true, message: "Data has been added.", data : saveTask });
} catch (err) {
   return res.status(200).json({success: false, message: "Server error.", error: err.message });
} };

const getToDoList = async (req, res) => {
try{
   const toDoList = await ToDoList.find();
   return res.status(200).json({success: true, message: "Data has been sent.", data : toDoList });
} catch (err) {
   return res.status(200).json({success: false, message: "Server error.", error: err.message });
} };

const deleteToDo = async ({ params }, res) => {
try{
    const { _id } = params;
    console.log(_id);
    const toDoList = await ToDoList.findByIdAndDelete( _id );
    if(!toDoList) return res.status(200).json({success: false, message: "Data not found." });

    return res.status(200).json({success: true, message: "Data has been deleted." });
} catch (err) {
   return res.status(200).json({success: false, message: "Server error.", error: err.message });
} };

const markCompleted = async ({ params }, res) => {
try{
   const { _id } = params;
   const updatedTask = await ToDoList.findByIdAndUpdate( _id , {$set: { isCompleted: true }}, { new: true });
   return res.status(200).json({success: true, message: "Data has been mark as completed.", data: updatedTask });
} catch (err) {
   return res.status(200).json({success: false, message: "Server error.", error: err.message });
} };


module.exports = { addToDo, getToDoList, deleteToDo, markCompleted };