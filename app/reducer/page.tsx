"use client";

import AddTask from "@/components/reducer/AddTask";
import TaskList from "@/components/reducer/TaskList";
import { TasksProvider } from "@/context/TasksContext";

export default function Page() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
