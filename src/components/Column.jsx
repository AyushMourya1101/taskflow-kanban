import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";
import React from "react";
import { FaClipboardList, FaSpinner, FaCheckCircle } from "react-icons/fa"; // Icons

function Column({ id, title, tasks, onDelete }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  const icon =
    id === "todo" ? (
      <FaClipboardList />
    ) : id === "in-progress" ? (
      <FaSpinner />
    ) : (
      <FaCheckCircle />
    );

  return (
    <div
      ref={setNodeRef}
      className={`w-80 p-5 rounded-xl border border-gray-200 shadow-md bg-white/80 backdrop-blur-md transition ${
        isOver ? "bg-indigo-100 border-indigo-400" : "bg-neutral-50"
      }`}
    >
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        {icon} {title}
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            id === "todo"
              ? "bg-yellow-100 text-yellow-700"
              : id === "in-progress"
              ? "bg-blue-100 text-blue-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {title}
        </span>
      </h2>

      <div className="space-y-3 overflow-y-auto max-h-[500px] pr-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

export default Column;
