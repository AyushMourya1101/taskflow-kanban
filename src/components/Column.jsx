import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";
import React from "react";

function Column({ id, title, tasks, onDelete }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      id={id}
      className={`w-80 p-4 rounded shadow min-h-[300px] transition ${
        isOver ? "bg-green-200" : "bg-white"
      }`}
    >
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

export default Column;
