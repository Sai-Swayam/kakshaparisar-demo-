import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Task from "../components/Task";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Dashboard</h1>
      {!!user && <h2>Hi {user.name}</h2>}

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
