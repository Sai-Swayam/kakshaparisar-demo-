import React, { useState } from "react";
import "../styles/task.css";

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
  
  // var addInput = document.getElementById('addbar');
  // addInput.addEventListener("keypress", function(event){
  //   if(event.key === "Enter"){
  //     event.preventDefault();
  //     document.getElementById("adderbutton").click();
  //   }
  // })

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
              <input type="text" value={task.info} className="task" />
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
