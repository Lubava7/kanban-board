import React from "react";
import { useState } from "react";

import Paper from "@mui/material/Paper";

import "./SpacingGrid.css";

export default function SpacingGrid({ children }) {
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
    e.target.style.backgroundColor = "#73C4FF";
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

    e.target.style.backgroundColor = "#73C4FF";
    e.target.style.opacity = "0.614";
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
    <div className="main-cont">
      <div className="grid-cont">
        {columns.sort(sortColumns).map((column) => (
          <div
            draggable="true"
            onDragStart={(e) => DragStartHandler(e, column)}
            onDragLeave={(e) => DragEndHandler(e)}
            onDragEnd={(e) => DragEndHandler(e)}
            onDragOver={(e) => DragOverHandler(e, column)}
            onDrop={(e) => dropHandler(e, column)}
            key={column.id}
            className="MuiGrid"
          >
            <div className="paper-header">{column.text}</div>
            <div className="paper">{children}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
