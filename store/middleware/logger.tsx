import { Middleware } from "redux";

const LoggerReduxMiddleware: Middleware = (store) => (next) => (action) => {
  const before = store.getState().asyncCounter.value;
  const result: any = next(action);
  const after = store.getState().asyncCounter.value;
  console.log("CounterConsoleLogger", action, before, after);
  return result;
};

export { LoggerReduxMiddleware };
