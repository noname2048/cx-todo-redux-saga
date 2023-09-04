"use client";

import { useState } from "react";

export default function AddTask({ onAddTask }: { onAddTask: Function }) {
  const [text, setText] = useState("");
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
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}
