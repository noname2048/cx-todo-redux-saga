"use client";

import { useTasksDispatch } from "@/context/TasksContext";
import { useState } from "react";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();

  return (
    <>
      <input
        className="border m-1 px-1 py-0.5 rounded"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="border px-1 py-0.5 rounded"
        onClick={() => {
          setText("");
          dispatch &&
            dispatch({
              type: "added",
              id: nextId++,
              text: text,
            });
        }}
      >
        Add
      </button>
    </>
  );
}

let nextId = 3;
