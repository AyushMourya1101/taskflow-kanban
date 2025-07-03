import React, { useState } from "react";

function AddTaskModal({ onClose, onAddTask }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now().toString(), 
      title,
      status,
    };

    onAddTask(newTask);
    onClose(); // close modal after adding
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Task title"
            className="w-full border border-gray-300 p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select
            className="w-full border border-gray-300 p-2 rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTaskModal;
