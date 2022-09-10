import React from "react";
import { useEffect, useState } from "react";
// import AddTask from "../AddTask/AddTask";
import AddTask from "../AddTask/AddTask";

const randomId = () => {
  return Math.random().toString(36).substring(2, 15);
};
console.log(randomId());

function AddProject() {
  const [text, setText] = useState("");
  const [projects, setProjects] = useState([]);
  const [counter, setCounter] = useState(projects.length);

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    document.title = `${counter} projects`;
  });

  const onChange = (words) => setData(words.name);

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
        // autoFocus
        placeholder="add proj"
        value={text}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <div style={{ border: "2px solid black", height: "100%" }}>
        {projects.map((project) => {
          return (
            <div
              onClick={() => setIsOpen(!isOpen)}
              style={{ border: "2px solid pink", height: "100%" }}
            >
              {project.name}
            </div>
          );
        })}
      </div>
      <AddTask isOpen={isOpen} onChange={onChange} />
    </div>
  );
}

export default AddProject;
