import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/components/counter/counterSlice";
import asyncCounterReducer from "@/store/reducer/async-counter";
import { LoggerReduxMiddleware } from "@/store/middleware/logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    asyncCounter: asyncCounterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(LoggerReduxMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
