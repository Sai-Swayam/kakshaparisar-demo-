import React, { useContext, useEffect, useState } from "react";
import "../styles/task.css";
import { UserContext } from "../../context/userContext";
import axios from "axios";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInfo, setTaskInfo] = useState("");
  //  add task
  function handleAddTask() {
    const newTask = {
      info: taskInfo,
    };
    if (newTask.info !== "") {
      setTasks((t) => [...t, newTask]);
    }
    setTaskInfo("");
  }
  //  remove task
  function handleRemoveTask(index) {
    setTasks((t) => t.filter((_, i) => i != index));
  }

  function handleTaskInfoChange(event) {
    setTaskInfo(event.target.value);
  }

  return (
    <>
      <div className="list-container">
        <div className="list">
          {tasks.map((task, index) => (
            <div key={index} className="task-container">
              <button
                onClick={() => handleRemoveTask(index)}
                className="delbtn"
              >
                -
              </button>
              <input
                type="text"
                value={task.info}
                className="task"
                onChange={() => {}}
              />
            </div>
          ))}
        </div>
        {/* adding task input field */}
        <div className="add-list-container">
          <button onClick={handleAddTask} className="addbtn" id="adderbutton">
            +
          </button>
          <input
            type="text"
            value={taskInfo}
            id="addbar"
            className="add-bar"
            onChange={handleTaskInfoChange}
          />
        </div>
      </div>
    </>
  );
};

export default Task;
