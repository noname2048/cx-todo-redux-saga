import { UserTask } from "@/types/task";
import { createContext, ReactNode, useContext, useReducer } from "react";

export const TasksContext = createContext<UserTask[]>([]);
export const TasksDispatchContext = createContext<Function>(() => {});

export function TasksProvider({ children }: { children?: ReactNode }) {
  const [tasks, setTasks] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={[]}>
      <TasksDispatchContext.Provider value={setTasks}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
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

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];
