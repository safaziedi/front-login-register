import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import "./Todolist.css";


function Todolist() {

  const [description, setText] = useState("");
  const [day, setDay] = useState("");
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
  
    getTasks();
  
  }, []);

  const getTasks = async () => {
    const token =localStorage.getItem('token')

    console.log("token : ",token);
    axios.get(
      `http://localhost:8000/todos` , { headers: {"Authorization" : `Bearer ${token}`} }
    ).then((res) => {
      setTasks(res.data);
    
    });
  };


  const onSubmit = (e) => {
    e.preventDefault();
    const token =localStorage.getItem('token')

    if (!description) {
      alert("Please add a task");
      return;
    }
    axios.post("http://localhost:8000/todos",   {
      description: description,
      day: day,
    },
    { headers: {"Authorization" : `Bearer ${token}`} },  
    );
    

    //il réinialise
    setText("");
    setDay("");
    getTasks();
  };


  const api = axios.create({
    baseURL: `http://localhost:8000/todos`,
  });
  const onDelete = async (id) => {
    const token =localStorage.getItem('token')

    await api.delete(`${id}` , 
    { headers: {"Authorization" : `Bearer ${token}`} }

    );
    getTasks();
  };

 


  return (
    <div>
      <div className="form">
        <form onSubmit={onSubmit}>
          <div className="form-controll">
            <label>Task</label>
            <input
              type="description"
              placeholder="Add Task"
              value={description}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <br />
          <div className="form-controll">
            <label>Day & Time</label>
            <input
              type="date"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              min="2000-01-01"
              max="2024-12-31"
            />
          </div>
          <br />
          <input type="submit" value="Save Task" className="btn btn-primary" />
        </form>
      </div>

      <div className="vl"></div>

      <div className="tasks">
        {tasks.map((task) => (
          
            <li key ={task._id}> <b> {task.description}</b> {task.day} <FaTimes
            style={{
              color: "red",
              cursor: "pointer",
            }}
            onClick={() => onDelete(task._id)}
          /> </li> 
        ))}
      </div>



    </div>
  );
}

export default Todolist;
