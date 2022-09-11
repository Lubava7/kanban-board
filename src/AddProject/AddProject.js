import React from "react";
import { useEffect, useState } from "react";
import AddTask from "../AddTask/AddTask";
import TextField from "@mui/material/TextField";

import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

const randomId = () => {
  return Math.random().toString(36).substring(2, 15);
};
console.log(randomId());

function AddProject({ isVisible }) {
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
        <Box>
          {projects.map((project) => {
            return (
              <ListItemText key={randomId} onClick={() => setIsOpen(!isOpen)}>
                {project.name}
              </ListItemText>
            );
          })}
        </Box>
        <AddTask isOpen={isOpen} onChange={onChange} />
      </div>
    );
  }
}

export default AddProject;
