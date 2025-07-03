import React from "react";
import { useDraggable } from "@dnd-kit/core";

function TaskCard({ task, onDelete }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-gray-200 p-3 rounded shadow flex items-start justify-between gap-2 w-full max-w-full"
    >
      
      <div {...listeners} {...attributes} className="w-full break-all text-sm cursor-move">
        {task.title}
      </div>

      
      <button
        className="text-red-600 shrink-0 ml-2"
        onClick={(e) => {
          e.stopPropagation(); // ✅ Prevent drag interference
          onDelete(task.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
