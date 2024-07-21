import React, { useContext, useEffect, useState } from "react";
import "../styles/task.css";
// import "../public/fonts/Mona-Sans.woff2"
import { UserContext } from "../context/userContext";
import axios from "axios";

const Task = () => {
  const { user } = useContext(UserContext);
  const [tasks, setTasks] = useState([]);
  const [taskInfo, setTaskInfo] = useState("");
  //  add task
  async function handleAddTask() {
    try {
      const newTask = {
        info: taskInfo,
      };
      if (newTask.info !== "") {
        await axios.post("/addtaskprofile", {
          email: user.email,
          task: newTask,
        });

        setTasks((t) => [...t, newTask]);
        setTaskInfo("");
      }
    } catch (error) {
      console.log(error);
    }
  }
  //  remove task
  async function handleRemoveTask(info, index) {
    try {
      await axios.post("/deltaskprofile", {
        email: user.email,
        inf: info,
      });
      setTasks((t) => t.filter((_, i) => i != index));
    } catch (error) {
      console.log(error);
    }
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

                onClick={() => handleRemoveTask(task.info, index)}

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
