import React from "react";
import Column from "./Column";

function Board({ tasks, onDelete }) {
  const statuses = ["todo", "in-progress", "done"];

  return (
    <div className="flex gap-6 overflow-hidden">
      {statuses.map((status) => (
        <Column
          key={status}
          id={status}
          title={status.replace("-", " ").toUpperCase()}
          tasks={tasks.filter((t) => t.status === status)}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default Board;
