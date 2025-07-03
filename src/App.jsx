import { useEffect, useState } from 'react'
import './App.css'
import initialTasks from './data/Dummydata.js'
import { DndContext } from "@dnd-kit/core";
import Board from './components/Board.jsx';
import AddTaskModal from './components/AddTaskModel.jsx'; 

function App() {
  const [tasks, setTasks] = useState(()=>{
    const saved = localStorage.getItem("taskflow-task")
    return saved ? JSON.parse(saved) : initialTasks
  })

  useEffect(()=>{
    localStorage.setItem("taskflow-tasks" , JSON.stringify(tasks));
  }, [tasks])
  const [showModal, setShowModal] = useState(false); 


  const onDragEnd = (e) => {
    const { active, over } = e;
    if (!over || active.id === over.id) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === active.id ? { ...task, status: over.id } : task
      )
    );
  };

  const handleAddTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const handleDeleteTask = (id) => {
  setTasks((prev) => prev.filter((task) => task.id !== id));
};


  return (
    <div className="p-6 bg-gray-100 ">
      <div className="flex justify-between items-center mb-6">
        <h1 className='text-3xl font-bold'>TaskFlow</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Task
        </button>
      </div>

      <DndContext onDragEnd={onDragEnd}>
        <Board tasks={tasks} onDelete={handleDeleteTask} />
      </DndContext>

      {showModal && (
        <AddTaskModal
          onClose={() => setShowModal(false)}
          onAddTask={handleAddTask}
        />
      )}
    </div>
  )
}

export default App;
