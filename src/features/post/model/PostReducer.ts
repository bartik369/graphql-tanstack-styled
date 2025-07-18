import { PostActionTypes, type PostAction, type PostState } from "./PostTypes";

export const initialPostState: PostState = {
  post: {
    id: null,
    title: null,
    body: null,
  },
  pageSize: 10,
  page: 1,
  fetchedPostId: "",
  fetched: false,
  likes: {},
};

export function postReducer(state: PostState, action: PostAction): PostState {
  switch (action.type) {
    case PostActionTypes.SET_POST:
      return {
        ...state,
        post: { ...state.post, ...action.payload }
      }
    case PostActionTypes.SET_FETCHED_POST:
      return { ...state, fetchedPostId: action.payload };
    case PostActionTypes.SET_FETCHED:
      return { ...state, fetched: action.payload };
    case PostActionTypes.RESET_FETCHED:
      return { ...state, fetched: false };
    case PostActionTypes.INCREMENT_LIKE: {
      const commentId = action.payload;
      const currentLike = state.likes[commentId] || 0;
      const isLiked = currentLike > 0;
      return {
        ...state,
        likes: {
          ...state.likes,
          [commentId]: isLiked ? currentLike - 1 : currentLike + 1,
        },
      };
    }
    default:
      return state;
  }
}
