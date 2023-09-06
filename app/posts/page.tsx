"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getPosts } from "@/store/postsSlice";
import { store } from "@/store/store";
import { useEffect } from "react";
import { Provider } from "react-redux";

export default function Page() {
  return (
    <Provider store={store}>
      <PostsContainer />
    </Provider>
  );
}

function PostsContainer() {
  const { data, isLoading, isError } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [data, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (!data) return <div>No data</div>;
  return <Posts posts={data} />;
}

function Posts({ posts }: any) {
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
