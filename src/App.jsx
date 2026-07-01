import { useState, useEffect } from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import ProgressTracker from "./Components/ProgressTracker";
import SearchBar from "./Components/SearchBar";
import DashBoard from "./Components/DashBoard";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Load tasks
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Search
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  // Add Task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Update Task
  const updateTask = (updatedTask, index) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  // Delete Task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);

    if (editIndex === index) {
      setEditIndex(null);
    }
  };

  // Edit
  const editTask = (index) => {
    setEditIndex(index);
  };

  // Clear
  const clearTasks = () => {
    setTasks([]);
    setEditIndex(null);
  };

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <header>
        <h1>TaskBuddy</h1>

        <p>
          <i>
            Organize your day,
            finish your goals,
            stay productive.
          </i>
        </p>
      </header>
      <button
        className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <TaskForm
        addTask={addTask}
        tasks={tasks}
        updateTask={updateTask}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
      />
      <DashBoard tasks={tasks}/>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <TaskList
        tasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />

      <ProgressTracker tasks={tasks} />

      {tasks.length > 0 && (
        <button
          className="clear-btn"
          onClick={clearTasks}
        >
          Clear All Tasks
        </button>
      )}
    </div>
  );
}