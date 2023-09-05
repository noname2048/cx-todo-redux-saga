import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/components/counter/counterSlice";
import asyncCounterReducer from "@/store/reducer/async-counter";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    asyncCounter: asyncCounterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
