import React from "react";

export default function ProgressTracker({ tasks }) {

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const progress =
    totalTasks === 0
      ? 0
      : (completedTasks / totalTasks) * 100;

  return (
    <div className="progress-tracker">

      <p>
        <span>📈 Progress</span>

        <span>
          {completedTasks}/{totalTasks} Completed
        </span>
      </p>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="progress-percent">
        {Math.round(progress)}%
      </div>

    </div>
  );
}