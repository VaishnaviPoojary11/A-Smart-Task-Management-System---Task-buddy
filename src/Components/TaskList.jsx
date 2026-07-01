import React from "react";

export default function TaskList({
  tasks,
  updateTask,
  deleteTask,
  editTask,
}) {

  const toggleComplete = (index) => {

    const updatedTask = {
      ...tasks[index],
      completed: !tasks[index].completed,
    };

    updateTask(updatedTask, index);
  };

  if (tasks.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "30px",
          color: "#777",
        }}
      >
        <h3>No Tasks Found!!</h3>
         <p>Add your first task and start being productive.</p>
      </div>
    );
  }

  return (
    <ul className="task-list">

      {tasks.map((task, index) => (

        <li
          key={index}
            className={`task-item ${task.priority.toLowerCase()} ${
                task.completed ? "completed" : ""
  }`}
        >

          <div>

            <span>{task.text}</span>

            <small>
              {task.priority} • {task.category}
            </small>

            {task.dueDate && (
              <p className="due-date">
                📅 Due : {task.dueDate}
              </p>
            )}

          </div>

          <div>
           <div>
    <button
        className="edit-btn"
        onClick={() => editTask(index)}
    >
        ✏ Edit
    </button>

    <button
        className="complete-btn"
        onClick={() => toggleComplete(index)}
    >
        {task.completed ? "↩ Undo" : "✔ Complete"}
    </button>

    <button
        className="delete-btn"
        onClick={() => deleteTask(index)}
    >
        🗑 Delete
    </button>
</div>
          </div>

        </li>

      ))}

    </ul>
  );
}