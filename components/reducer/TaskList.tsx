"use client";

import { useState } from "react";
import { UserTask } from "@/types/task";

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
}: {
  tasks: UserTask[];
  onChangeTask: Function;
  onDeleteTask: Function;
}) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({
  task,
  onChange,
  onDelete,
}: {
  task: UserTask;
  onChange: Function;
  onDelete: Function;
}) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button
          className="border m-1 p-1 rounded"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          className="border m-1 p-1 rounded"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button
        className="border m-1 p-1 rounded"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </label>
  );
}
