import React from "react";
import { useEffect, useState } from "react";
import AddTask from "../AddTask/AddTask";
import TextField from "@mui/material/TextField";

import ListItemText from "@mui/material/ListItemText";

const randomId = () => {
  return Date.now();
};
console.log(randomId());

function AddProject({ isVisible }) {
  const [text, setText] = useState("");
  const [projects, setProjects] = useState([]);
  const [counter, setCounter] = useState(projects.length);

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState("");

  const [currentProject, setCurrentProject] = useState({});

  useEffect(() => {
    document.title = `${counter} projects`;
  });

  function selectProject(project) {
    setIsOpen(!isOpen);
    setCurrentProject(project);
  }

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
      setCounter(projects.length + 1);
      setCurrentProject(newProject);
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

  if (isVisible) {
    return (
      <div>
        <TextField
          autoFocus
          value={text}
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          required
          id="outlined-required"
          label="Project name"
        />
        <div>
          {projects.map((project) => {
            return (
              <ListItemText
                key={project.id}
                onClick={() => selectProject(project)}
              >
                {project.name}
              </ListItemText>
            );
          })}
        </div>
        <AddTask
          isOpen={isOpen}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default AddProject;
