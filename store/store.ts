import counterReducer from "@/components/counter/counterSlice";
import { logger } from "@/store/middleware/logger";
import asyncCounterReducer from "@/store/reducer/async-counter";
import { configureStore } from "@reduxjs/toolkit";
// import postReducer from "@/store/reducer/post";
import postsReducer from "@/store/postsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    asyncCounter: asyncCounterReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          date: "2023-01-01",
          answer: 42,
        },
      },
    }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
