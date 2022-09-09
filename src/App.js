import "./App.css";
import AddProject from "./AddProject/AddProject";
import AddTask from "./AddTask/AddTask";
// import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">Learn React</header>
      <AddProject />
      <AddTask />
    </div>
  );
}

export default App;
