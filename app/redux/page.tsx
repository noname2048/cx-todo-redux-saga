"use client";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { decrement, increment } from "@/components/counter/counterSlice";
import { store } from "@/store/store";
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
        className="m-2 rounded border border-blue-400 p-1"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span className="m-2">{count}</span>
      <button
        className="m-2 rounded border border-red-400 p-1"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}
