import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import "./Todolist.css";

function Todolist() {
  const [description, setText] = useState("");
  const [day, setDay] = useState("");
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    axios.get(`http://localhost:8000/todos`).then((res) => {
      setTasks(res.data);
    });
  };
  useEffect(() => {
    getTasks();
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!description) {
      alert("Please add a task");
      return;
    }

    axios.post("http://localhost:8000/todos", {
      description: description,
      day: day,
    });

    //il réinialise
    setText("");
    setDay("");
  };


  const api = axios.create({
    baseURL: `http://localhost:8000/todos`,
  });
  const onDelete = async (id) => {
    await api.delete(`${id}`);
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
          <ul>
            <li> {task.description}  </li> 
            <li> {task.day}  </li> 
            <FaTimes
          style={{
            color: "red",
            cursor: "pointer",
          }}
          onClick={() => onDelete(task._id)}
        />
          </ul>
         
        ))}
      </div>



    </div>
  );
}

export default Todolist;
