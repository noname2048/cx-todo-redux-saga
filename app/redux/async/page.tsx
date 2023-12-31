"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { incrementAsync, decrementAsync } from "@/store/reducer/async-counter";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function Page() {
  return (
    <Provider store={store}>
      <AsyncCounter />
    </Provider>
  );
}

function AsyncCounter() {
  const value = useAppSelector((state) => state.asyncCounter.value);
  const dispatch = useAppDispatch();
  return (
    <main>
      <h1>Async Redux</h1>
      <section>
        <button
          className="m-2 rounded-md border border-blue-400 p-1"
          onClick={() => {
            dispatch(incrementAsync());
          }}
        >
          Up
        </button>
        <span>{value}</span>
        <button
          className="m-2 rounded-md border border-blue-400 p-1"
          onClick={() => {
            dispatch(decrementAsync());
          }}
        >
          Down
        </button>
      </section>
    </main>
  );
}
