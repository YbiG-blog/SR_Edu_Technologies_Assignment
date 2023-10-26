import React, { useEffect, useState } from "react";
import axios from "axios";
import './home.css';
const backendApi = "http://localhost:8000/api/v1";

const Home = () => {

  const [ newTask, setNewTask ] = useState("");
  const [ dataList, setDataList ] = useState([]);
  const [loading, setLoading] = useState(true);
  const backgroundColor= ["rgb(32, 90, 207)","rgb(225, 228, 234)"];


useEffect(() => {
   const getData = async () => {
    const res = await axios.get(`${backendApi}/getToDoList`);
    setDataList(res.data.data);
    setLoading(false);
    }
    getData();
  },[ loading ]);

  
const addIntoList = (e) => {
  setNewTask( e.target.value );
}
  
const addToDo = async () => {
  try {   
   if( newTask.trim() === "" ) return alert("Task should not be empty.");
   const res = await axios.post(`${backendApi}/addToDo`, { task: newTask });
   const newData = res.data;
   setDataList([...dataList, newData.data]);
   setNewTask("");
   alert("Task added successfully.");
}
  catch (error) {
  console.log(error);
} };

const deleteToDo = async ( taskId ) => {
  try {   
   await axios.delete(`${backendApi}/deleteToDo/${taskId}`);
   const updatedTasks = dataList.filter((task) => task._id !== taskId);
   setDataList(updatedTasks);
   alert("Task deleted successfully.");
}
  catch (error) {
  console.log(error);
} };

const toggleTaskCompletion = async ( taskId ) => {
  try {
    const updatedTask = await axios.put(`${backendApi}/markCompleted/${taskId}`);
    const updatedDataList = dataList.map((task) =>
      task._id === taskId ? updatedTask.data.data : task );
    setDataList(updatedDataList);
    alert("Task marked as completed.");
  } catch (error) {
    console.error(error);
  }
};

return (
    <>
      <div className="to-do-heading">
        <h1 >My-To-Do-List</h1>
      </div>
        <div className="to-do-list">
          <div className="input-area">
          <input type="text" className ="text-field" placeholder="Add a new task" value={ newTask } onChange={ addIntoList }/>
          <button  style={ { backgroundColor: backgroundColor[0] }} onClick={ addToDo }>+</button>
          </div>
          <div className="show-list-item">
          {
            dataList.length > 0 ?(
            dataList.map((item) => {
              if(item === "") return null;
              return (
                <div className="each-item">
                 <input className="checkbox"
                 type="checkbox"
                 checked={ item.isCompleted }
                 onChange={() => toggleTaskCompletion(item._id)}
                />
                <li key={ item._id } >
                { item.task } </li>
                <button style={ { backgroundColor: backgroundColor[1], color : 'red' }} 
                onClick={() => deleteToDo(item._id)}>x</button>
              </div>)
            })
            ):( <h1> No task in the To-Do-List</h1> )  
          }
          </div>
        </div>
    </>
  );
}

export default Home;