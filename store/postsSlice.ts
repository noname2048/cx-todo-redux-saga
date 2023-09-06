import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { posts } from "@/data/posts";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface PostsState {
  isLoading: boolean;
  data: any;
  isError: boolean;
  error: any;
  isFetching: boolean;
}

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    error: null,
    isFetching: false,
  } as PostsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = state.data === null;
        state.isFetching = true;
        state.isError = false;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isFetching = false;
        state.data = action.payload;
        state.isError = false;
        state.error = null;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isFetching = false;
        state.data = null;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const {} = postsSlice.actions;

export default postsSlice.reducer;

const getPosts = createAsyncThunk("posts/getPosts", async () => {
  await sleep(1000);
  return posts;
});

export { getPosts };
