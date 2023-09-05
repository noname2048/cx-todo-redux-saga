"use client";

import { useAppSelector, useAppDispatch } from "@/hooks/store";
import { decrement, increment } from "@/components/counter/counterSlice";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function Page() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <button
        className="border p-1 m-2 rounded border-blue-400"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span className="m-2">{count}</span>
      <button
        className="border p-1 m-2 rounded border-red-400"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}
