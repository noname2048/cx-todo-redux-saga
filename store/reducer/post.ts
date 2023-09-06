import * as postsAPI from "@/data/posts";
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from "@/store/lib/asyncUtils";

const GET_POSTS = "GET_POSTS"; // 요청 시작
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"; // 요청 성공
const GET_POSTS_ERROR = "GET_POSTS_ERROR"; // 요청 실패

const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

// thunk 함수
const getPosts = () => createPromiseThunk("GET_POSTS", postsAPI.getPosts);
const getPost = (id: number) =>
  createPromiseThunk("GET_POST", postsAPI.getPostById);

// 초기 상태 선언
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

// 리듀서 선언
export default function postsReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, "posts")(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActions(GET_POST, "post")(state, action);
    default:
      return state;
  }
}

export { getPosts, getPost };
