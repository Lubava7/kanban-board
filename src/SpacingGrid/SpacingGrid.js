import React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import AddTask from "../AddTask/AddTask";

// import ListItemText from "@mui/material/ListItemText";

import "./SpacingGrid.css";

export default function SpacingGrid({ children }) {
  const [spacing, setSpacing] = useState(2);
  const [columns, setColumns] = useState([
    { id: 1, order: 1, text: "ToDo" },
    { id: 2, order: 2, text: "In Progress" },
    { id: 3, order: 3, text: "In Review" },
    { id: 4, order: 4, text: "Complete" },
  ]);
  const [currentColumn, setCurrentColumn] = useState(null);

  function DragStartHandler(e, column) {
    // console.log(" drag", column.order);
    setCurrentColumn(column);
  }

  function DragEndHandler(e) {
    e.target.style.backgroundColor = "blue";
    e.target.style.opacity = "0.614";
  }

  function DragOverHandler(e) {
    e.preventDefault();
    e.target.style.backgroundColor = "#FDF783";
    e.target.style.opacity = "0.614";
  }

  function dropHandler(e, column) {
    e.preventDefault();
    // console.log("drop", column.order);
    setColumns(
      columns.map((c) => {
        if (c.id === column.id) {
          return { ...c, order: currentColumn.order };
        }
        if (c.id === currentColumn.id) {
          return { ...c, order: column.order };
        }
        return c;
      })
    );

    e.target.style.backgroundColor = "blue";
    e.target.style.opacity = "0.3";
  }

  // сортирововчная функция
  const sortColumns = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <Grid
      item
      container
      spacing={spacing}
      xs={12}
      sx={{ flexGrow: 1, marginTop: "30px" }}
    >
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={spacing}
      >
        {columns.sort(sortColumns).map((column) => (
          <Grid
            draggable={true}
            onDragStart={(e) => DragStartHandler(e, column)}
            onDragLeave={(e) => DragEndHandler(e)}
            onDragEnd={(e) => DragEndHandler(e)}
            onDragOver={(e) => DragOverHandler(e, column)}
            onDrop={(e) => dropHandler(e, column)}
            key={column.id}
            sx={{ cursor: "move", padding: "0", margin: 1 }}
          >
            <Paper
              sx={{
                height: 800,
                width: 320,
                backgroundColor: "#F7F6EB",
                boxShadow: "-2px 2px 5px -1px grey",
                backgroundColor: "blue",
                opacity: 0.614,
                color: "black",
              }}
            >
              <div
                draggable={false}
                style={{
                  padding: 0,
                  marginTop: 0,
                  fontSize: "40px",
                  color: "black",
                  textAlign: "center",
                  backgroundColor: "blue",
                  opacity: 0.614,
                  boxShadow: "-2px 2px 5px -1px grey",
                }}
              >
                {column.text}
              </div>
              {children}
              <AddTask />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
