import React from "react";
import { useEffect, useState } from "react";
import AddTask from "../AddTask/AddTask";

const randomId = () => {
  return Math.random().toString(36).substring(2, 15);
};
console.log(randomId());

function AddProject() {
  const [text, setText] = useState("");
  const [projects, setProjects] = useState([]);
  const [counter, setCounter] = useState(projects.length);
  // const [currentProject , setCurrentProject] = useState()

  // const [counter, setCounter] = useState(0);

  // const [currentProject, setCurrentProject] = useState()

  useEffect(() => {
    document.title = `${counter} projects`;
  });

  function addProject(text) {
    if (text) {
      const newProject = {
        id: randomId(),
        name: text,
        tasks: [],
        complete: false,
      };
      setProjects([...projects, newProject]);
      console.log(projects, newProject);
      setCounter(projects.length + 1);
    }
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  const alerts = <div>remove space key before text</div>;

  function handleKeyPress(e) {
    if (text[0] === " ") {
      return;
    } else if (e.key === "Enter") {
      handleSubmit(e);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    addProject(text);
    setText("");
  }
  return (
    <div>
      AddTask {randomId()}
      <input
        autoFocus
        placeholder="okey lets go"
        value={text}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <div style={{ border: "2px solid black", height: "100%" }}>
        {projects.map((project) => {
          return (
            <div style={{ border: "2px solid pink", height: "100%" }}>
              {project.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddProject;
