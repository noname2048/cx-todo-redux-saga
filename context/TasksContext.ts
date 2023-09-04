import { UserTask } from "@/types/task";
import { createContext } from "react";

export const TasksContext = createContext<UserTask[]>([]);
export const TasksDispatchContext = createContext<Function>(() => {});
