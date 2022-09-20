import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

// import SpacingGrid from "../SpacingGrid/SpacingGrid";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const randomId = () => {
  return Math.random().toString(36).substring(2, 15);
};
console.log(randomId());

function AddTask({ isOpen, currentProject, setCurrentProject }) {
  const [word, setWord] = useState("");
  // const [tasks, setTasks] = useState([]);

  function addTask(word) {
    if (word) {
      const newProject = { ...currentProject };
      const newTask = {
        id: randomId(),
        task: word,
        // complete: false,
      };
      // setTasks([...tasks, newTask]);
      // console.log(tasks, newTask);
      newProject.tasks.push(newTask);
      setCurrentProject(newProject);
    }
  }

  function handleChangeTask(e) {
    setWord(e.target.value);
  }

  function handleKeyPressTask(e) {
    if (word[0] === " ") {
      return;
    } else if (e.key === "Enter") {
      handleSubmitTask(e);
    }
  }
  function handleSubmitTask(e) {
    e.preventDefault();
    addTask(word);
    setWord("");
  }
  // function EditTask(word) {
  //   const [text, setText] = useState("");
  //   setWord(text);
  // }

  if (isOpen) {
    return (
      // <SpacingGrid>
      <div>
        {currentProject.name ? (
          <div className="mapTask">
            <TextField
              autoFocus
              placeholder="add task"
              value={word}
              type="text"
              onChange={handleChangeTask}
              onKeyDown={handleKeyPressTask}
            />

            {currentProject.tasks &&
              currentProject.tasks.map((task) => {
                return (
                  <Card
                    key={task.id}
                    draggable="true"
                    sx={{
                      width: 275,
                      backgroundColor: "#73C4FF",
                      opacity: 0.614,
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Task Card
                      </Typography>
                      <Typography variant="h5" component="div">
                        {bull}
                        {task.task}
                        {bull}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {currentProject.name}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        // onClick={EditTask(word)}
                      >
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                );
              })}
          </div>
        ) : (
          <div>bla bla</div>
        )}
      </div>
      // </SpacingGrid>
    );
  }
}

export default AddTask;
