import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Task from "../components/Task";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {!!user && (
        <h1>
          <span id="greet">Hi</span> {user.name}
        </h1>
      )}
      <h2 id="pagehead">Dashboard</h2>

      <div className="container">
        <div className="sun-container">
          <div className="side-bar"></div>
          <div className="main-container">
            <Task></Task>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
