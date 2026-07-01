import React, { useState, useEffect } from "react";

export default function TaskForm({
  addTask,
  tasks,
  updateTask,
  editIndex,
  setEditIndex,
}) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (editIndex !== null) {
      const selectedTask = tasks[editIndex];

      if (selectedTask) {
        setTask(selectedTask.text);
        setPriority(selectedTask.priority);
        setCategory(selectedTask.category);
        setDueDate(selectedTask.dueDate || "");
      }
    }
  }, [editIndex, tasks]);

  const resetForm = () => {
    setTask("");
    setPriority("Medium");
    setCategory("General");
    setDueDate("");
    setEditIndex(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    const taskData = {
      text: task,
      priority,
      category,
      dueDate,
      completed:
        editIndex !== null
          ? tasks[editIndex].completed
          : false,
    };

    if (editIndex !== null) {
      updateTask(taskData, editIndex);
    } else {
      addTask(taskData);
    }

    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div id="inp">
        <input
          type="text"
          placeholder="Enter Your Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit">
          {editIndex !== null ? "Update Task" : "Add Task"}
        </button>
      </div>

      <div id="btns">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
    </form>
  );
}