"use client";

import { TasksContext, TasksDispatchContext } from "@/context/TasksContext";
import { UserTask } from "@/types/task";
import { useReducer } from "react";
import AddTask from "@/components/reducer/AddTask";
import TaskList from "@/components/reducer/TaskList";

export default function Page() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text: string) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task: UserTask) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
        {/*<AddTask onAddTask={handleAddTask} />*/}
        {/*<TaskList*/}
        {/*  tasks={tasks}*/}
        {/*  onChangeTask={handleChangeTask}*/}
        {/*  onDeleteTask={handleDeleteTask}*/}
        {/*/>*/}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

type ActionType =
  | { type: "added"; id: number; text: string }
  | { type: "changed"; task: UserTask }
  | { type: "deleted"; id: number };

function tasksReducer(tasks: UserTask[], action: ActionType) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      const _action: { type: string } = action;
      throw Error("Unknown action: " + (_action.type || "no type"));
    }
  }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];
