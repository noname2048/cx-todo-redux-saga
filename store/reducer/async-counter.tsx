import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/store";

interface AsyncCounterState {
  value: number;
}

const initialState: AsyncCounterState = {
  value: 0,
};

export const asyncCounterSlice = createSlice({
  name: "asyncCounter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const incrementAsync = () => (dispatch: any) => {
  setTimeout(() => {
    dispatch(increment());
  }, 1000);
};

export const decrementAsync = () => (dispatch: any) => {
  setTimeout(() => {
    dispatch(decrement());
  }, 1000);
};

export const { increment, decrement } = asyncCounterSlice.actions;

export const selectAsyncCounter = (state: RootState) =>
  state.asyncCounter.value;

export default asyncCounterSlice.reducer;
