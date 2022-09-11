import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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

function AddTask({ isOpen, onChange }) {
  const [words, setWords] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask(words) {
    if (words) {
      const newTask = {
        id: randomId(),
        name: words,
        complete: false,
      };
      setTasks([...tasks, newTask]);
      console.log(tasks, newTask);
    }
  }

  function handleChangeTask(e) {
    setWords(e.target.value);
  }

  function handleKeyPressTask(e) {
    if (words[0] === " ") {
      return;
    } else if (e.key === "Enter") {
      handleSubmitTask(e);
    }
  }
  function handleSubmitTask(e) {
    e.preventDefault();
    addTask(words);
    setWords("");
  }

  if (isOpen) {
    return (
      <div>
        <input
          autoFocus
          placeholder="add task"
          value={words}
          type="text"
          onChange={handleChangeTask}
          onKeyDown={handleKeyPressTask}
        />
        <div className="mapTask">
          {tasks.map((task) => {
            return (
              <Card
                draggable="true"
                sx={{ width: 275, backgroundColor: "hotpink" }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Карточка таска, НЕ проекта
                  </Typography>
                  <Typography variant="h5" component="div">
                    {bull}
                    {task.name}
                    {bull}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    название проекта , в котором таск
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Редактировать {task.id}</Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AddTask;
