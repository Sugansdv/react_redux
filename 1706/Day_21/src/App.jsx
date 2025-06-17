import { useState } from "react";
import "./App.css";
import Task from "./components/Task";
import Proj1 from "./components/Proj1";
import Proj2 from "./components/Proj2";
import Proj3 from "./components/Proj3";
import Proj4 from "./components/Proj4";

function App() {
  return (
    <>
      <div className="header">
        <div className="header-left">Suganya S</div>
        <div className="header-right">Day 21 Task</div>
      </div>
      <Task />
      <br />
      <hr />
      <Proj1 />
      <br />
      <hr />
      <Proj2 />
      <br />
      <hr />
      <Proj3 />
      <br />
      <hr />
      <Proj4 />
    </>
  );
}

export default App;
