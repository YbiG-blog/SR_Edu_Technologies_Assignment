const mongoose = require("mongoose");
const { Schema } = mongoose;

const toDoListSchema = new Schema({
  task: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  }, { timestamps: true }
);

const ToDoList = mongoose.model("ToDoList", toDoListSchema);

module.exports = ToDoList;
