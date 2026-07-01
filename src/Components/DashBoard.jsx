import React from "react";

export default function DashBoard({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  return (
    <div className="dashboard">
      <div className="card">
        <h3>📋 Total</h3>
        <h2>{total}</h2>
      </div>

      <div className="card">
        <h3>✅ Completed</h3>
        <h2>{completed}</h2>
      </div>

      <div className="card">
        <h3>⏳ Pending</h3>
        <h2>{pending}</h2>
      </div>
    </div>
  );
}